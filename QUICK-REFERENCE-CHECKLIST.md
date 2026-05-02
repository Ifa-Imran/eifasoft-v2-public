# 📋 Quick Reference - Token Setup Checklist

## Keep this open while filling the form!

---

### ✅ Step 1: GitLab Personal Access Token

**URL:** https://gitlab.com/-/profile/personal_access_tokens

**Click Sequence:**
1. Click **"Add new token"** (blue button)
2. Fill in:
   - **Name:** `EifaSoft Backlink Automation`
   - **Expiration:** `No expiration` (or 1 year)
3. **Check these boxes:**
   - ☑ `api`
   - ☑ `write_repository`
   - ☑ `read_user`
4. Click **"Create personal access token"** (green button)
5. **COPY THE TOKEN** (starts with `glpat-`)
6. Paste into form field #1

**Token Format:** `glpat-A1B2C3D4E5F6G7H8I9J0`

---

### ✅ Step 2: Medium Integration Token

**URL:** https://medium.com/me/settings/security

**Click Sequence:**
1. Scroll down to **"Integration tokens"** section
2. Click **"Generate token"** (gray button)
3. **COPY THE TOKEN** immediately
4. Paste into form field #2

**Token Format:** Long string (40+ characters)

---

### ✅ Step 3: Dev.to API Key

**URL:** https://dev.to/settings/extensions

**Click Sequence:**
1. Find **"API key"** section
2. Click **"Generate API Key"** (green button)
3. **COPY THE KEY**
4. Paste into form field #3

**Token Format:** 20-30 characters (letters + numbers)

---

### ✅ Step 4: Bitbucket App Password

**URL:** https://bitbucket.org/account/settings/app-passwords/

**Click Sequence:**
1. Click **"Create app password"** (blue button)
2. Fill in:
   - **Label:** `EifaSoft Automation`
3. **Check these permissions:**
   - Under **Repositories:** ☑ Read, ☑ Write
   - Under **Account:** ☑ Read
4. Click **"Create"** (blue button)
5. **COPY THE PASSWORD** (won't show again!)
6. Paste into form field #4

**Password Format:** Uppercase letters + numbers (16-20 chars)

---

## ⚠️ IMPORTANT WARNINGS

### Tokens Show ONLY ONCE!
- **GitLab:** Disappears after you refresh
- **Bitbucket:** Shows once, then gone forever
- **Medium & Dev.to:** Can regenerate if lost

### Copy Immediately!
Have Notepad or password manager ready BEFORE you click generate.

---

## 🎯 After Completing All 4 Steps:

1. Click **"🎉 Generate .env File"** button
2. Download the `.env` file
3. Move it to: `e:\Projects\eifasoft\eifasoft-v2\.env`
4. Run automation: `.\run-all-automations.ps1`

---

## 🆘 If You Get Stuck

**Token rejected?**
- Check for extra spaces before/after
- Ensure no typos when copying
- Try regenerating if still failing

**Can't find the page?**
- Make sure you're logged in
- Use desktop site (not mobile)
- Check URLs above

**Wrong format?**
- GitLab: Must start with `glpat-`
- Medium: Very long string (40+ chars)
- Dev.to: Medium length (20-30 chars)
- Bitbucket: Uppercase only, no special chars

---

## 💡 Pro Tips

1. **Open all 4 URLs first** in separate tabs
2. **Use password manager** to store tokens
3. **Don't rush** - accuracy over speed
4. **Test one token at a time** if having issues

---

## ✅ Success Checklist

After completing the form:

- [ ] All 4 status indicators show "✓ Complete"
- [ ] Progress bar at 100%
- [ ] Downloaded `.env` file
- [ ] File saved to correct location
- [ ] Ready to run automation scripts!

---

**Good luck! You've got this! 🚀**
