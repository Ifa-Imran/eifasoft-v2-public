# 🖼️ Visual API Setup Guide - Screenshots & Click-Through

## Quick Reference Cards

### 1. GitLab Token Setup

**Where to Go:**
```
https://gitlab.com/-/profile/personal_access_tokens
```

**What You'll See:**
- Page title: "Personal access tokens"
- Blue button: "Add new token"

**Click Sequence:**
1. Click **"Add new token"** (blue button)
2. Form appears with fields
3. Fill in:
   ```
   Name: EifaSoft Backlink Automation
   Expiration: No expiration (or 1 year)
   ```
4. **Select these scopes** (check boxes):
   - ☑ `api`
   - ☑ `write_repository`
   - ☑ `read_user`
5. Click **"Create personal access token"** (green button)
6. **GREEN BOX APPEARS** with your token
7. **CLICK THE COPY BUTTON** immediately!

**Token Format:**
```
glpat-xxxxxxxxxxxxxxxxxxxx
(Looks like: glpat-A1B2C3D4E5F6G7H8I9J0)
```

**⚠️ WARNING:**
- Token only shows ONCE
- If you refresh page, it's gone forever
- Must regenerate if lost

---

### 2. Medium Integration Token

**Where to Go:**
```
https://medium.com/me/settings/security
```

**What You'll See:**
- Section: "Integration tokens"
- Gray button: "Generate token"

**Click Sequence:**
1. Scroll down to **"Integration tokens"** section
2. Click **"Generate token"** button
3. Small popup appears
4. Token displays in green box
5. Click copy icon

**Token Format:**
```
Long alphanumeric string
(Example: 1a2b3c4d5e6f7g8h9i0j...)
```

**Note:** Medium tokens don't expire unless revoked

---

### 3. Dev.to API Key

**Where to Go:**
```
https://dev.to/settings/extensions
```

**What You'll See:**
- Section: "API key"
- Green button: "Generate API Key"

**Click Sequence:**
1. Find **"API key"** section (about halfway down)
2. Click **"Generate API Key"** button
3. Key appears in yellow/green box
4. Click to copy

**Token Format:**
```
Short alphanumeric string
(Example: abc123def456ghi789)
```

**Bonus:** While here, note your username from profile URL

---

### 4. Bitbucket App Password

**Where to Go:**
```
https://bitbucket.org/account/settings/app-passwords/
```

**What You'll See:**
- Blue button: "Create app password"
- List of existing passwords (if any)

**Click Sequence:**
1. Click **"Create app password"** button
2. Form appears:
   ```
   Label: EifaSoft Automation
   ```
3. **Permissions section** - check these:
   - Under **Repositories**: 
     - ☑ Read
     - ☑ Write
   - Under **Account**:
     - ☑ Read
4. Click **"Create"** (blue button)
5. **GREEN BOX** shows your password
6. **COPY IT NOW!**

**Password Format:**
```
Uppercase letters and numbers
(Example: A1B2C3D4E5F6G7H8)
```

**⚠️ WARNING:**
- Shows only ONCE
- Can't retrieve later
- Must regenerate if lost

---

### 5. GitBook (Optional - Manual Upload Recommended)

**Where to Go:**
```
https://www.gitbook.com
```

**Option A: Manual Upload (Recommended)**
1. Sign up/Login
2. Click **"New workspace"**
3. Name it: "EifaSoft Documentation"
4. Drag & drop the `gitbook-documentation` folder
5. Click **"Publish"**
6. Done! ✅

**No API needed for this method!**

**Option B: API Access (Advanced)**
```
URL: https://www.gitbook.com/~settings/api
```
1. Click "Create new API key"
2. Name: EifaSoft Automation
3. Copy key
4. Get Organization ID from workspace settings

---

## 🔍 What Each Page Looks Like

### GitLab Token Page
```
┌─────────────────────────────────────────┐
│ Personal access tokens                  │
│                                         │
│ [Add new token] ← CLICK THIS           │
│                                         │
│ Existing tokens:                        │
│ (none yet)                              │
└─────────────────────────────────────────┘
```

### Medium Security Settings
```
┌─────────────────────────────────────────┐
│ Security Settings                       │
│                                         │
│ ... other settings ...                  │
│                                         │
│ Integration tokens                      │
│ ┌───────────────────────────────────┐   │
│ │ Generate token                    │   │
│ └───────────────────────────────────┘   │
│                                         │
│ ... more settings ...                   │
└─────────────────────────────────────────┘
```

### Dev.to Extensions
```
┌─────────────────────────────────────────┐
│ Extension Settings                      │
│                                         │
│ API key                                 │
│ ┌───────────────────────────────────┐   │
│ │ Generate API Key                  │   │
│ └───────────────────────────────────┘   │
│                                         │
│ ... other extensions ...                │
└─────────────────────────────────────────┘
```

### Bitbucket App Passwords
```
┌─────────────────────────────────────────┐
│ App passwords                           │
│                                         │
│ [Create app password] ← CLICK THIS     │
│                                         │
│ Current app passwords:                  │
│ (none yet)                              │
└─────────────────────────────────────────┘
```

---

## ✅ Verification Checklist

After obtaining each credential, verify it looks correct:

### GitLab Token ✓
- [ ] Starts with `glpat-`
- [ ] About 20-25 characters total
- [ ] Mix of letters and numbers
- [ ] Copied to clipboard
- [ ] Saved securely

### Medium Token ✓
- [ ] Long string (40+ characters)
- [ ] All lowercase letters and numbers
- [ ] No spaces or special characters
- [ ] Copied immediately
- [ ] Stored securely

### Dev.to Key ✓
- [ ] 20-30 characters
- [ ] Mix of letters and numbers
- [ ] Case-sensitive
- [ ] Copied correctly
- [ ] Username noted separately

### Bitbucket Password ✓
- [ ] Uppercase letters and numbers only
- [ ] 16-20 characters
- [ ] No special characters
- [ ] Copied before closing
- [ ] Saved in password manager

---

## 🎯 Common Visual Cues

### Success Indicators
✅ **Green box/banner** - Token generated successfully  
✅ **Copy button/icon** appears next to token  
✅ **Checkmark** animation  
✅ **"Created!" message**

### Warning Signs
⚠️ **Red error box** - Something went wrong  
⚠️ **"Invalid permissions"** - Missing scopes  
⚠️ **"Expired"** - Need to regenerate  
⚠️ **404 page** - Wrong URL or not logged in

### Security Warnings
🔒 **One-time display** - Copy immediately  
🔒 **Won't show again** - Save securely  
🔒 **Expires on [date]** - Note expiration  
🔒 **Revoked** - No longer valid

---

## 🆘 "I Don't See..." Troubleshooting

### Can't find "Add new token" on GitLab?
- Make sure you're logged in
- Check you're on gitlab.com (not enterprise version)
- Look under Settings → Profile → Access Tokens

### No "Integration tokens" on Medium?
- Scroll down further
- Make sure you're on security settings page
- Try mobile vs desktop site

### "Generate API Key" missing on Dev.to?
- Must be logged in
- Check Extensions tab in settings
- Some accounts may need verification first

### Bitbucket showing organization only?
- Switch to personal account
- Or ensure you have admin rights
- Check team permissions

---

## 💾 Where to Store Credentials

### Recommended: Password Manager
- **Bitwarden** (free, open-source)
- **1Password** (paid, excellent UX)
- **LastPass** (freemium)
- **KeePass** (free, offline)

### Alternative: Encrypted File
Create encrypted document with all credentials:
```
EifaSoft API Credentials
========================
GitLab Token: glpat-xxxxx
Medium Token: 1a2b3c...
Dev.to Key: abc123...
Bitbucket: A1B2C3...
```

Then encrypt with:
- **VeraCrypt** (full disk encryption)
- **7-Zip** (password-protected archive)
- **GPG** (GNU Privacy Guard)

### ⚠️ DON'T:
- Save in plain text file
- Email to yourself
- Store in browser bookmarks
- Write on sticky notes (unless locked away)

---

## 📱 Mobile-Friendly Instructions

### Getting Tokens on Phone/Tablet

**Good News:** All platforms work on mobile!

**Tips:**
1. Use landscape mode for easier navigation
2. Enable "Request Desktop Site" if needed
3. Have password manager app ready
4. Take screenshot of tokens as backup

**Mobile URLs:**
- GitLab: https://gitlab.com/profile/personal_access_tokens
- Medium: https://medium.com/me/settings/security
- Dev.to: https://dev.to/settings/extensions
- Bitbucket: https://bitbucket.org/account/settings/app-passwords/

---

## ⏱️ Time Estimates

**Fast Track (Experienced):**
- GitLab: 3 minutes
- Medium: 2 minutes
- Dev.to: 2 minutes
- Bitbucket: 3 minutes
- **Total: ~10 minutes**

**First Timer (Careful):**
- GitLab: 5 minutes
- Medium: 3 minutes
- Dev.to: 3 minutes
- Bitbucket: 5 minutes
- **Total: ~16 minutes**

**Including Reading Instructions:**
- Add 10-15 minutes
- **Total: ~25-30 minutes**

---

## 🎓 Learning Resources

### Video Tutorials
Search YouTube for:
- "GitLab personal access token tutorial"
- "How to get Medium API key"
- "Dev.to API integration guide"
- "Bitbucket app password setup"

### Written Guides
- Platform documentation (linked above)
- Stack Overflow questions
- Reddit tutorials (r/webdev, r/learnprogramming)

### Interactive Help
- Run `setup-credentials.ps1` script
- Check `API-CREDENTIALS-SETUP.md`
- Review platform docs

---

## 🏁 Final Checklist

Before running automation scripts:

- [ ] All 4 tokens obtained
- [ ] Tokens copied to `.env` file
- [ ] Double-checked for typos
- [ ] Saved backup somewhere secure
- [ ] Tested at least one token
- [ ] Ready to run scripts!

**When everything is configured:**
```bash
.\run-all-automations.ps1
```

**Expected Result:**
✅ 384 backlinks created across 6 platforms!

---

**Need more help?** 
- Check troubleshooting sections
- Review platform documentation
- Ask in community forums
- Contact EifaSoft support

**Good luck! 🚀**
