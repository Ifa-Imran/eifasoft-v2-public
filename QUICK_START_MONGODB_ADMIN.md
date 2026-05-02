# MongoDB & Admin Panel Quick Start

## 🚀 Quick Setup (5 minutes)

### Step 1: Generate Admin API Key

**Option A: Using Node.js (Recommended)**
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Option B: Using PowerShell**
```powershell
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 64 | ForEach-Object {[char]$_})
```

**Save this key!** You'll need it in the next step.

---

### Step 2: Create `.env.local` File

Create a file named `.env.local` in your project root with:

```bash
# MongoDB Connection (choose one):

# Option A: MongoDB Atlas (Cloud - FREE)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eifasoft

# Option B: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/eifasoft

# Admin Panel API Key (paste your generated key)
ADMIN_API_KEY=YOUR_GENERATED_KEY_HERE
```

---

### Step 3: Set Up MongoDB

#### **Option A: MongoDB Atlas (Easiest - Recommended)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for free account
3. Click "Build a Database" → Choose "FREE" tier (M0)
4. Select a region close to you (e.g., AWS - Mumbai for India)
5. Click "Create Cluster"
6. Once created, click "Connect"
7. Choose "Connect your application"
8. Copy the connection string
9. Replace username and password in your `.env.local` file

**Example:**
```bash
MONGODB_URI=mongodb+srv://admin:MyPassword123@cluster0.abc123.mongodb.net/eifasoft
```

⚠️ **Important**: In Atlas Network Access, add IP address `0.0.0.0/0` (allow from anywhere) for testing.

#### **Option B: Local MongoDB**

1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install with default settings
3. MongoDB will start automatically as a Windows service
4. Use this connection string in `.env.local`:

```bash
MONGODB_URI=mongodb://localhost:27017/eifasoft
```

---

### Step 4: Test the System

1. **Start your development server:**
   ```powershell
   npm run dev
   ```

2. **Test the contact form:**
   - Go to `http://localhost:3000/contact`
   - Fill out and submit the form
   - You should see a success message

3. **Access the admin panel:**
   - Go to `http://localhost:3000/admin/login`
   - Enter your `ADMIN_API_KEY` from `.env.local`
   - Click "Access Dashboard"
   - You should see your test submission!

---

## ✅ Verification Checklist

- [ ] `.env.local` file created
- [ ] MongoDB URI configured (Atlas or local)
- [ ] ADMIN_API_KEY set (64 character random string)
- [ ] Development server running (`npm run dev`)
- [ ] Contact form submits successfully
- [ ] Admin panel accessible at `/admin/login`
- [ ] Leads appear in dashboard after form submission

---

## 🔧 Troubleshooting

### Error: "MongoDB connection error"

**For Atlas:**
1. Check username/password in MONGODB_URI
2. Verify cluster is running (check Atlas dashboard)
3. Ensure Network Access allows your IP (or 0.0.0.0/0)
4. Test connection string in MongoDB Compass

**For Local MongoDB:**
1. Check if MongoDB service is running:
   ```powershell
   Get-Service -Name MongoDB
   ```
2. If not running, start it:
   ```powershell
   Start-Service MongoDB
   ```
3. Try connecting with mongosh:
   ```powershell
   mongosh
   ```

### Error: "Unauthorized" in admin panel

1. Clear browser localStorage:
   ```javascript
   // In browser console (F12)
   localStorage.clear()
   ```
2. Refresh page
3. Re-enter API key carefully (no extra spaces)
4. Verify ADMIN_API_KEY matches in `.env.local`

### Form submits but doesn't appear in admin panel

1. Check browser console for errors
2. Check terminal/server logs for database errors
3. Verify MongoDB is actually saving data:
   ```javascript
   // In MongoDB Compass or mongosh
   use eifasoft
   db.contactsubmissions.find()
   ```

---

## 📊 Using the Admin Panel

Once logged in:

1. **View all leads** - Paginated table with all submissions
2. **Filter by status** - New, Contacted, Qualified, Converted, Lost
3. **Search** - Find leads by name, email, phone, or company
4. **Update status** - Click a lead to change its status
5. **Add notes** - Track communication history
6. **Export CSV** - Download all leads for Excel/Google Sheets
7. **Delete spam** - Remove test or spam submissions

---

## 🎯 Next Steps After Setup

### 1. Email Notifications (Optional)
Integrate SendGrid to receive emails when forms are submitted.

### 2. Slack Notifications (Optional)
Get instant Slack messages for new leads.

### 3. Production Deployment
When deploying to production (Vercel, Netlify, etc.):
- Add `MONGODB_URI` and `ADMIN_API_KEY` to platform's environment variables
- Never commit `.env.local` to Git
- Use a strong, unique API key

### 4. Backup Strategy
Set up automated MongoDB backups (especially important for production).

---

## 📞 Need Help?

1. Check the full setup guide: `CONTACT_FORM_ADMIN_SETUP.md`
2. Review code comments in the files
3. Check server logs in terminal for errors
4. Test MongoDB connection separately using MongoDB Compass

---

## 🎉 Success Indicators

You'll know everything is working when:
- ✅ Contact form shows "Thank you" message after submission
- ✅ Admin panel loads without errors
- ✅ Test submission appears in the dashboard
- ✅ You can update lead status successfully
- ✅ CSV export downloads your leads

**Congratulations! Your contact form now has full database storage and admin management! 🚀**
