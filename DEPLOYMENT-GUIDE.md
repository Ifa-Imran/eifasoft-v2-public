# IIS Deployment Guide for Next.js Application

## Problem Summary
Your Next.js application builds successfully but fails on IIS with MIME type errors:
- CSS files served as `text/plain` instead of `text/css`
- JS files served as `text/plain` instead of `application/javascript`
- 404 errors for static assets

## Root Cause
IIS doesn't have proper MIME type mappings configured for Next.js static assets by default.

---

## ✅ Solution Steps

### Step 1: Copy web.config to Server
The `web.config` file has been created in the project root with all necessary configurations.

**Files to deploy:**
```
✅ .next/          (build output)
✅ public/         (static assets)
✅ package.json    (dependencies)
✅ web.config      (IIS configuration) ← NEW!
```

### Step 2: Deploy to IIS

#### Option A: Using web.config (Automatic)
1. Build the application locally:
   ```powershell
   npm run build
   ```

2. Copy these files/folders to your IIS wwwroot or site directory:
   ```
   E:\Projects\eifasoft\eifasoft-v2\.next\
   E:\Projects\eifasoft\eifasoft-v2\public\
   E:\Projects\eifasoft\eifasoft-v2\package.json
   E:\Projects\eifasoft\eifasoft-v2\web.config  ← Root level (for IIS)
   E:\Projects\eifasoft\eifasoft-v2\public\web.config  ← Public folder (fallback)
   E:\Projects\eifasoft\eifasoft-v2\server.js
   ```

3. The `web.config` will automatically configure IIS MIME types on first load.

**Note:** The web.config is available in BOTH locations:
- **Root level** (`/web.config`) - Primary location for IIS
- **Public folder** (`/public/web.config`) - Fallback/copied during deployment

#### Option B: Manual IIS Configuration (If web.config doesn't work)

If you prefer to configure IIS manually or web.config isn't being applied:

1. **Open IIS Manager**
   - Press `Win + R`, type `inetmgr`, press Enter

2. **Select your website**
   - Navigate to your site in the left panel

3. **Open MIME Types**
   - Double-click "MIME Types" in the middle pane

4. **Add these MIME types:**

| File Extension | MIME Type |
|---------------|-----------|
| `.css` | `text/css` |
| `.js` | `application/javascript` |
| `.mjs` | `application/javascript` |
| `.json` | `application/json` |
| `.wasm` | `application/wasm` |
| `.avif` | `image/avif` |
| `.webp` | `image/webp` |
| `.svg` | `image/svg+xml` |

5. **Click "Add..." for each one**

### Step 3: Install Required IIS Modules

Make sure these IIS modules are installed:

1. **URL Rewrite Module**
   - Download from: https://www.iis.net/downloads/microsoft/url-rewrite
   - Required for Next.js routing

2. **Application Request Routing (ARR)**
   - Download from: https://www.iis.net/downloads/microsoft/application-request-routing
   - Required for reverse proxy functionality

3. **Http Compression**
   - Should be installed by default
   - Enables gzip compression

### Step 4: Configure Application Pool

1. **Open IIS Manager**
2. **Navigate to Application Pools**
3. **Find your app's pool** (or create new one)
4. **Set .NET CLR Version:** "No Managed Code"
5. **Pipeline Mode:** Integrated
6. **Enable 32-Bit Applications:** False (unless you need it)

### Step 5: Start the Application

1. **Install PM2 for Windows** (if not already done):
   ```powershell
   npm install -g pm2
   ```

2. **Start the production server:**
   ```powershell
   cd C:\inetpub\wwwroot\eifasoft-v2
   pm2 start server.js --name eifasoft-v2
   ```

3. **Configure IIS as Reverse Proxy:**
   
   Add this to `web.config` inside `<system.webServer>`:
   ```xml
   <rewrite>
     <rules>
       <rule name="ReverseProxyInboundRule1" stopProcessing="true">
         <match url="(.*)" />
         <action type="Rewrite" url="http://localhost:3000/{R:1}" />
         <serverVariables>
           <set name="HTTP_ACCEPT_ENCODING" value="gzip, deflate" />
           <set name="HTTP_X_FORWARDED_FOR" value="{REMOTE_ADDR}" />
           <set name="HTTP_X_FORWARDED_PROTO" value="{HTTPS}" />
         </serverVariables>
       </rule>
     </rules>
   </rewrite>
   ```

---

## 🔍 Verification Steps

### 1. Check MIME Types in Browser
Open browser DevTools → Network tab and check:
- CSS files should have `Content-Type: text/css`
- JS files should have `Content-Type: application/javascript`

### 2. Test Static Assets
Visit these URLs directly:
- `https://www.eifasoft.com/_next/static/css/[hash].css`
- `https://www.eifasoft.com/_next/static/chunks/[hash].js`

Both should return 200 OK with correct MIME types.

### 3. Check Response Headers
Look for:
```
Content-Type: text/css; charset=utf-8
Cache-Control: public, max-age=31536000, immutable
```

### 4. Verify Compression
Check if gzip is working:
```
Content-Encoding: gzip
```

---

## 🚨 Troubleshooting

### Issue: Still getting MIME type errors
**Solution:** Clear IIS cache and restart:
```powershell
iisreset
```

### Issue: web.config changes not applying
**Solution:** Touch web.config to force reload:
```powershell
(Get-Content web.config) | Set-Content web.config
```

### Issue: 404 on static assets
**Solution:** Check that `.next/static/` folder exists and has files

### Issue: Site loads but styles are broken
**Solution:** 
1. Hard refresh browser (Ctrl + Shift + R)
2. Clear browser cache
3. Check browser console for CORS errors

---

## 📋 Quick Checklist

Before deploying, ensure:

- [ ] Build completed successfully (`npm run build`)
- [ ] `.next/` folder copied to server
- [ ] `web.config` copied to server root
- [ ] URL Rewrite module installed on IIS
- [ ] ARR module installed on IIS
- [ ] Application Pool set to "No Managed Code"
- [ ] Port 3000 is available (or change in server.js)
- [ ] PM2 installed globally
- [ ] Node.js installed on server (v18+)

---

## 🎯 Post-Deployment Tests

1. **Homepage loads:** http://localhost:3000 or https://www.eifasoft.com
2. **CSS loads correctly:** No MIME type warnings in console
3. **JavaScript executes:** No 404s in Network tab
4. **Navigation works:** Click through pages
5. **Images load:** Check optimized images in `/public/images/`
6. **API routes work:** Test contact form or other API endpoints

---

## 📞 Support Commands

### Restart PM2 App
```powershell
pm2 restart eifasoft-v2
```

### View PM2 Logs
```powershell
pm2 logs eifasoft-v2
```

### Check PM2 Status
```powershell
pm2 status
```

### Stop PM2 App
```powershell
pm2 stop eifasoft-v2
```

### Monitor PM2
```powershell
pm2 monit
```

---

## 📚 Additional Resources

- [Next.js Production Deployment](https://nextjs.org/docs/deployment)
- [IIS URL Rewrite](https://learn.microsoft.com/en-us/iis/extensions/url-rewrite-module/)
- [PM2 Windows Documentation](https://pm2.keymetrics.io/docs/usage/windows/)

---

**Last Updated:** March 11, 2026  
**Next.js Version:** 15.5.6  
**Status:** ✅ Build Successful, Ready for Deployment
