# 🚨 URGENT PRODUCTION FIX - 404 Asset Loading Errors

## 🔍 Problem Diagnosis

**Symptoms:**
- 300+ pages showing 404 errors for CSS and JS chunks
- Error: `Failed to load resource: _next/static/chunks/*.js`
- Error: `Failed to load resource: _next/static/css/*.css`
- Application error: client-side exception

**Root Cause:**
Production server is NOT correctly serving static assets from the `.next` directory.

---

## ✅ IMMEDIATE FIX (Choose One Method)

### METHOD 1: Restart Production Server (FASTEST - 2 minutes)

#### If using PM2 (Recommended):
```bash
# SSH into your server
ssh user@your-server.com

# Navigate to project directory
cd /path/to/eifasoft-v2

# Rebuild
npm run build

# Restart PM2 process
pm2 restart eifasoft-production

# Check status
pm2 logs eifasoft-production --lines 50
```

#### If using Node directly:
```bash
# Stop current server (Ctrl+C or kill process)
# Then restart with:
node server.js
```

#### If using Windows IIS:
```powershell
# Recycle application pool in IIS Manager
# Or restart the website
```

---

### METHOD 2: Verify Build Output (5 minutes)

```bash
# 1. Navigate to project
cd e:\Projects\eifasoft\eifasoft-v2

# 2. Clean rebuild
rm -rf .next
npm run build

# 3. Verify files exist
ls .next/static/chunks/
# Should see files like: 1356-a207716ea5771e34.js

# 4. Start server
node server.js
```

---

### METHOD 3: Fix Server Configuration (If above don't work)

The issue might be that production is not using `server.js`. Update your deployment:

#### For Vercel/Netlify:
They auto-detect Next.js - just push the build:
```bash
git add .
git commit -m "fix: production asset loading"
git push origin main
```

#### For DigitalOcean/Linode/AWS:

Update your systemd service file `/etc/systemd/system/eifasoft.service`:

```ini
[Unit]
Description=EifaSoft Next.js Application
After=systemd-networkd.service

[Service]
WorkingDirectory=/path/to/eifasoft-v2
ExecStart=/usr/bin/node /path/to/eifasoft-v2/server.js
Restart=always
User=www-data
Group=www-data
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

Then reload:
```bash
sudo systemctl daemon-reload
sudo systemctl restart eifasoft
sudo systemctl status eifasoft
```

---

## 🔧 DEBUGGING STEPS (If still having issues)

### Step 1: Check Server Logs

```bash
# View last 100 lines of logs
tail -f /path/to/logs/error.log

# Or if using PM2
pm2 logs eifasoft-production
```

Look for errors like:
- `Cannot find module`
- `ENOENT: no such file or directory`
- `Error: EACCES: permission denied`

### Step 2: Verify File Permissions

```bash
# On Linux/Mac server
chmod -R 755 /path/to/eifasoft-v2/.next
chown -R www-data:www-data /path/to/eifasoft-v2/.next
```

### Step 3: Test Locally First

```bash
# Build locally
npm run build

# Start production server locally
node server.js

# Visit http://localhost:3000
# Check browser console for errors
```

If it works locally but not on production → **deployment issue**  
If it fails locally too → **code/build issue**

---

## 🎯 COMMON CAUSES & SOLUTIONS

### Issue 1: Wrong Working Directory

**Problem:** Server starts but can't find `.next` folder

**Solution:**
```javascript
// In server.js, ensure correct path
const path = require('path');
const app = next({ 
  dev: false, 
  hostname: 'localhost', 
  port: process.env.PORT || 3000,
  dir: __dirname // Explicitly set directory
});
```

### Issue 2: Cached Old Build

**Problem:** Browser caching old assets

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Or add cache-busting to next.config.ts:

```typescript
const nextConfig: NextConfig = {
  assetPrefix: process.env.ASSET_PREFIX || '',
  // Add build ID to force refresh
  generateBuildId: async () => {
    return `v${Date.now()}`;
  },
};
```

### Issue 3: CDN/Reverse Proxy Misconfiguration

**Problem:** Nginx/Apache not proxying correctly

**Nginx Solution:**
```nginx
location /_next/static/ {
    alias /path/to/eifasoft-v2/.next/static/;
    expires 365d;
    access_log off;
}

location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

### Issue 4: Multiple Node Processes

**Problem:** Old server process still running

**Solution:**
```bash
# Find all node processes
ps aux | grep node

# Kill all node processes
pkill -f node

# Or kill specific PID
kill -9 <PID>

# Restart fresh
node server.js
```

---

## 📊 VERIFICATION CHECKLIST

After applying fix, verify:

- [ ] Homepage loads without errors
- [ ] Random service page loads (e.g., `/mlm-software-development-company`)
- [ ] Browser console shows NO 404 errors
- [ ] All CSS styles are applied correctly
- [ ] JavaScript interactions work (buttons, forms, etc.)
- [ ] Mobile responsive design works
- [ ] Images load properly

Test URLs:
- https://www.eifasoft.com/
- https://www.eifasoft.com/services
- https://www.eifasoft.com/mlm-software-development-company
- https://www.eifasoft.com/lucknow-mern-stack-development-services

---

## 🚀 DEPLOYMENT BEST PRACTICES

### For Future Deployments:

1. **Always test build locally first:**
   ```bash
   npm run build
   npm run start
   # Test thoroughly
   ```

2. **Use PM2 for production:**
   ```bash
   npm install -g pm2
   pm2 start server.js --name eifasoft-production
   pm2 save
   pm2 startup
   ```

3. **Set up health checks:**
   ```bash
   # Add to monitoring script
   curl -f https://www.eifasoft.com || echo "SITE DOWN!"
   ```

4. **Keep backups:**
   ```bash
   # Backup before deployment
   cp -r .next .next.backup
   ```

5. **Rollback plan:**
   ```bash
   # If new deploy fails
   git revert HEAD
   npm run build
   pm2 restart all
   ```

---

## ⚡ QUICK FIX COMMAND SEQUENCE

Copy-paste this entire block into your server terminal:

```bash
cd /path/to/eifasoft-v2

# Stop current process
pkill -f "node.*server.js" || true

# Clean build
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies (in case any missing)
npm ci --only=production

# Rebuild
npm run build

# Verify build output
test -d .next/static/chunks && echo "✅ Build successful" || echo "❌ Build failed"

# Start server
nohup node server.js > production.log 2>&1 &

# Check if running
sleep 3
curl -I http://localhost:3000

# View logs
tail -f production.log
```

---

## 🆘 IF ALL ELSE FAILS

### Emergency Rollback:

```bash
# If you have a previous working version
git checkout <last-known-good-commit>
npm run build
pm2 restart all
```

### Get Help:

1. Check Next.js documentation: https://nextjs.org/docs/deployment
2. Review your hosting provider's Next.js guide
3. Check server logs for specific errors
4. Test with `npm run start` (Next.js default server)

---

## 📞 POST-FIX MONITORING

After fixing, monitor for 24 hours:

```bash
# Set up simple monitoring
while true; do
  response=$(curl -s -o /dev/null -w "%{http_code}" https://www.eifasoft.com)
  if [ "$response" -ne 200 ]; then
    echo "⚠️ SITE DOWN at $(date)" >> /var/log/eifasoft-monitor.log
  fi
  sleep 300  # Check every 5 minutes
done
```

---

## ✅ EXPECTED RESULT AFTER FIX

✅ All pages load without 404 errors  
✅ No console errors in browser  
✅ Fast page load times (<2 seconds)  
✅ All interactive features work  
✅ Mobile responsive  
✅ SEO metadata present  

**Build time:** ~30 seconds  
**Server start:** <5 seconds  
**First page load:** <2 seconds  

---

**Apply the fix NOW and report back which method worked!** 🚀

Need immediate help? Share your:
1. Hosting provider (Vercel, DigitalOcean, AWS, etc.)
2. Deployment method (Git push, FTP, manual upload)
3. Any error messages from server logs
