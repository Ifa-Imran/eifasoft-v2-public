# 🔑 API Credentials Setup Guide - Complete Walkthrough

## 📋 Overview

This guide will help you obtain API credentials for all 6 platforms in the backlink automation system.

**Total Time:** 20-30 minutes  
**Difficulty:** Easy (step-by-step instructions)

---

## ⚡ Quick Navigation

1. [GitLab](#1-gitlab-personal-access-token) - 5 minutes
2. [Medium](#2-medium-integration-token) - 3 minutes
3. [Dev.to](#3-devto-api-key) - 2 minutes
4. [Bitbucket](#4-bitbucket-app-password) - 5 minutes
5. [GitBook](#5-gitbook-optional-api-key) - 3 minutes
6. [Google Analytics](#6-google-analytics-optional) - 5 minutes

---

## 1. GitLab Personal Access Token

### Why You Need This
Required to automatically create 64 repositories and upload README files.

### Step-by-Step Instructions

#### Step 1: Go to GitLab Settings
```
URL: https://gitlab.com/-/profile/personal_access_tokens
```

#### Step 2: Create New Token
1. Click **"Add new token"** button
2. Fill in the form:
   - **Name:** `EifaSoft Backlink Automation`
   - **Expiration date:** Select `No expiration` (or 1 year)
   - **Select scopes:** Check these boxes:
     - ✅ `api` - Access API
     - ✅ `write_repository` - Create repositories
     - ✅ `read_user` - Read user information

#### Step 3: Generate and Copy
1. Click **"Create personal access token"**
2. **IMPORTANT:** Copy the token immediately
3. Save it somewhere secure (password manager recommended)

#### Step 4: Add to .env File
Open `.env` file and add:
```bash
GITLAB_TOKEN=glpat-YOUR_TOKEN_HERE
GITLAB_USERNAME=eifasoft-technologies
```

### Troubleshooting

**Can't find the page?**
- Make sure you're logged into GitLab
- Go to Profile → Settings → Access Tokens

**Token doesn't work?**
- Ensure you selected all required scopes
- Check if token expired
- Regenerate if needed

---

## 2. Medium Integration Token

### Why You Need This
Allows automated publishing of articles to Medium.

### Step-by-Step Instructions

#### Step 1: Go to Medium Settings
```
URL: https://medium.com/me/settings/security
```

#### Step 2: Generate Integration Token
1. Scroll to **"Integration tokens"** section
2. Click **"Generate token"**
3. Give it a name: `EifaSoft Automation`
4. Copy the generated token

#### Step 3: Get Your Publication ID (Optional)
If you have a Medium publication:
1. Go to your publication homepage
2. Look at the URL or page source
3. Find the publication ID (usually in format: `abc123def456`)

Or use this method:
```
URL: https://api.medium.com/v1/me/publications
Headers: Authorization: Bearer YOUR_TOKEN
```

#### Step 4: Add to .env File
```bash
MEDIUM_API_KEY=YOUR_TOKEN_HERE
MEDIUM_PUBLICATION_ID=your_publication_id_here
```

### Alternative: Manual Publishing
If you prefer manual control, you can skip Medium API and use the UPLOAD_GUIDE.md in `medium-articles/` folder.

---

## 3. Dev.to API Key

### Why You Need This
Enables automated posting of technical tutorials to Dev.to community.

### Step-by-Step Instructions

#### Step 1: Go to Dev.to Settings
```
URL: https://dev.to/settings/extensions
```

#### Step 2: Generate API Key
1. Scroll to **"API key"** section
2. Click **"Generate API Key"** button
3. Copy the displayed key

#### Step 3: Note Your Username
Your Dev.to username is in your profile URL:
```
https://dev.to/yourusername
```

#### Step 4: Add to .env File
```bash
DEV_TO_API_KEY=YOUR_KEY_HERE
DEV_TO_USERNAME=eifasoft
```

### Troubleshooting

**Don't have a Dev.to account?**
1. Sign up at https://dev.to
2. It's free and takes 2 minutes
3. Use GitHub/Twitter/LinkedIn for quick signup

---

## 4. Bitbucket App Password

### Why You Need This
Creates repository mirrors on Bitbucket for additional backlinks.

### Step-by-Step Instructions

#### Step 1: Go to Bitbucket Settings
```
URL: https://bitbucket.org/account/settings/app-passwords/
```

#### Step 2: Create App Password
1. Click **"Create app password"** button
2. Fill in the details:
   - **Label:** `EifaSoft Automation`
   - **Permissions:** Check these:
     - ✅ **Repositories:** Write (create, push, delete)
     - ✅ **Account:** Read
     - ✅ **Team membership:** Read (if using organization)

#### Step 3: Generate and Copy
1. Click **"Create"**
2. **Copy the password immediately** (won't show again!)
3. Store securely

#### Step 4: Add to .env File
```bash
BITBUCKET_USERNAME=eifasoft-technologies
BITBUCKET_APP_PASSWORD=YOUR_PASSWORD_HERE
```

### Important Notes

**Organization vs Personal Account:**
- If using organization account, ensure you have admin rights
- Personal accounts work fine for mirroring

**Security:**
- App passwords are more secure than your main password
- Can be revoked individually without changing main password

---

## 5. GitBook (Optional) API Key

### Why You Might Need This
For advanced automation. **Note:** GitBook can also be used manually via their web interface.

### Step-by-Step Instructions

#### Option A: Manual Upload (Recommended for Most Users)
GitBook has excellent web interface - no API needed!

1. Go to https://gitbook.com
2. Create account
3. Click "New workspace"
4. Drag and drop the `gitbook-documentation` folder
5. Publish!

#### Option B: API Access (Advanced)

If you want API automation:

1. **Go to GitBook Settings**
   ```
   URL: https://www.gitbook.com/~settings/api
   ```

2. **Create API Key**
   - Click "Create new API key"
   - Give it a name: `EifaSoft Automation`
   - Copy the key

3. **Get Organization ID**
   - Go to your workspace settings
   - Find Organization ID in URL or settings

4. **Add to .env File**
   ```bash
   GITBOOK_API_KEY=YOUR_KEY_HERE
   GITBOOK_ORG_ID=eifasoft
   ```

### Recommendation
**Use manual upload for GitBook** - it's faster and easier than API automation for one-time setup.

---

## 6. Google Analytics (Optional)

### Why You Might Want This
Track traffic from your backlinks and measure ROI.

### Step-by-Step Instructions

#### Step 1: Create Google Analytics Account
```
URL: https://analytics.google.com
```

#### Step 2: Set Up Property
1. Click **"Admin"** (gear icon)
2. Under **Property**, click **"Create Property"**
3. Fill in:
   - **Property Name:** `EifaSoft Backlink Tracking`
   - **Reporting Time Zone:** Your timezone
   - **Currency:** USD (or your preference)

#### Step 3: Get Measurement ID
1. After creation, go to **Data Streams**
2. Click your web stream
3. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

#### Step 4: Add to .env File
```bash
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Alternative: Skip for Now
You can add this later. All tracking scripts work without it.

---

## 🔐 Security Best Practices

### Protect Your Credentials

1. **Never commit .env to Git**
   - Already in `.gitignore`? Good!
   - Never share .env file publicly

2. **Use Password Manager**
   - Store all tokens securely
   - Recommended: Bitwarden, 1Password, LastPass

3. **Rotate Regularly**
   - Regenerate tokens every 6-12 months
   - Immediately if compromised

4. **Limit Permissions**
   - Only grant necessary scopes
   - Review permissions periodically

---

## ✅ Configuration Checklist

After obtaining all credentials:

- [ ] GitLab Personal Access Token obtained
- [ ] Medium Integration Token obtained
- [ ] Dev.to API Key obtained
- [ ] Bitbucket App Password obtained
- [ ] (Optional) GitBook API Key obtained
- [ ] (Optional) Google Analytics ID obtained
- [ ] All credentials added to `.env` file
- [ ] `.env` file saved and secure
- [ ] Backup created of credentials (password manager)

---

## 🧪 Testing Your Credentials

### Test GitLab Token
```bash
python -c "import requests; r = requests.get('https://gitlab.com/api/v4/user', headers={'PRIVATE-TOKEN': 'YOUR_TOKEN'}); print(r.json())"
```
Should return your user info if working.

### Test Medium Token
```bash
python -c "import requests; r = requests.get('https://api.medium.com/v1/me', headers={'Authorization': 'Bearer YOUR_TOKEN'}); print(r.json())"
```
Should return your Medium profile.

### Test Dev.to Token
```bash
python -c "import requests; r = requests.get('https://dev.to/api/articles/me/published', headers={'api-key': 'YOUR_KEY'}); print(r.status_code)"
```
Should return status 200 if working.

---

## 🆘 Common Issues

### Issue: "401 Unauthorized"
**Cause:** Invalid or missing token  
**Solution:** 
- Double-check token was copied correctly
- Ensure correct scopes/permissions selected
- Regenerate token if needed

### Issue: "403 Forbidden"
**Cause:** Insufficient permissions  
**Solution:**
- Verify you selected all required scopes
- Check if account has necessary privileges
- For organizations, verify team permissions

### Issue: "Rate Limit Exceeded"
**Cause:** Too many API requests  
**Solution:**
- Wait 5-10 minutes
- Increase `DELAY_BETWEEN_REQUESTS` in .env
- Spread operations over multiple days

### Issue: Token Not Working
**Possible causes:**
- Expired token
- Wrong token format
- Missing characters when copying

**Solutions:**
1. Regenerate the token
2. Copy entire token (no spaces before/after)
3. Ensure no special character encoding issues

---

## 💡 Pro Tips

### 1. Create Dedicated Accounts
Consider creating separate accounts for automation:
- Easier to track
- Better security isolation
- Can delegate to team members later

### 2. Document Everything
Keep a record of:
- When tokens were created
- What permissions they have
- Where they're being used

### 3. Start with One Platform
Don't feel pressured to set up everything at once:
1. Start with GitLab (highest DA)
2. Add others as you have time
3. Quality > Quantity always

### 4. Use Environment Variables in Production
When deploying to server:
```bash
export GITLAB_TOKEN=your_token
export MEDIUM_API_KEY=your_key
# etc.
```

---

## 🎯 Minimum Viable Setup

If you're short on time, start with just these:

### Essential (Do First):
1. ✅ **GitLab** - Creates 64 backlinks automatically
2. ✅ **Manual GitBook upload** - No API needed, just drag-and-drop

### Important (Do Next Week):
3. ✅ **Medium** - High-DA content marketing
4. ✅ **Dev.to** - Developer community engagement

### Nice to Have (Can Wait):
5. ⏳ **Bitbucket** - Additional backlink source
6. ⏳ **Google Analytics** - Performance tracking

---

## 📞 Getting Help

### Platform Documentation
- **GitLab:** https://docs.gitlab.com/ee/api/
- **Medium:** https://github.com/Medium/medium-api-docs
- **Dev.to:** https://developers.forem.com/api
- **Bitbucket:** https://developer.atlassian.com/cloud/bitbucket/rest/

### Community Support
- Stack Overflow (tag: gitlab-api, medium-api, etc.)
- Platform-specific forums
- Reddit communities (r/webdev, r/SEO)

---

## 🎉 Ready to Automate?

Once you have your credentials configured:

```bash
# Run all automations
.\run-all-automations.ps1

# Or run individual scripts
python scripts/automate-gitlab-import.py
python scripts/automate-gitbook-generator.py
python scripts/automate-medium-articles.py
python scripts/automate-backlink-tracker.py
```

**Expected Results:**
- 384+ backlinks created
- 64 documentation pages live
- 64 blog articles published
- Complete tracking system operational

---

**Need more help?** Check the troubleshooting sections in:
- `CROSS-PLATFORM-BACKLINK-AUTOMATION.md`
- `BACKLINK-AUTOMATION-SUMMARY.md`
- Platform-specific guides in output folders

**Good luck with your backlink building! 🚀**
