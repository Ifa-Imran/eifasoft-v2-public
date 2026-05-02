# ⚡ 5-Minute Credential Setup - Express Guide

## 🎯 Goal
Configure all API credentials in **5 minutes or less** so you can run the automation scripts.

---

## 📦 What You Need
- Web browser (Chrome/Edge/Firefox)
- Password manager or text editor
- This guide

---

## ⏱️ The 5-Minute Sprint

### Minute 1: GitLab Token
```
1. Open: https://gitlab.com/-/profile/personal_access_tokens
2. Click: "Add new token"
3. Name: EifaSoft Automation
4. Scopes: api, write_repository, read_user
5. Create & Copy token
6. Paste into .env file: GITLAB_TOKEN=glpat-YOUR_TOKEN
```

**Done?** ✅ Move on!

---

### Minute 2: Medium Token
```
1. Open: https://medium.com/me/settings/security
2. Scroll to: "Integration tokens"
3. Click: "Generate token"
4. Copy the token
5. Paste into .env: MEDIUM_API_KEY=YOUR_TOKEN
```

**Done?** ✅ Keep going!

---

### Minute 3: Dev.to Key
```
1. Open: https://dev.to/settings/extensions
2. Find: "API key" section
3. Click: "Generate API Key"
4. Copy the key
5. Paste into .env: DEV_TO_API_KEY=YOUR_KEY
```

**Done?** Almost there!

---

### Minute 4: Bitbucket Password
```
1. Open: https://bitbucket.org/account/settings/app-passwords/
2. Click: "Create app password"
3. Label: EifaSoft Automation
4. Permissions: Repositories (Write), Account (Read)
5. Create & Copy password
6. Paste into .env: BITBUCKET_APP_PASSWORD=YOUR_PASSWORD
```

**Done?** Last step!

---

### Minute 5: Verify & Test
```
1. Open .env file
2. Check all 4 credentials are there
3. Save file
4. Run test command
```

**Test Command:**
```bash
python scripts/automate-gitlab-import.py
```

If it works: **🎉 SUCCESS!**  
If error: Check troubleshooting below

---

## 🔧 Quick Troubleshooting

### Error: "401 Unauthorized"
**Fix:** Token is wrong or missing  
**Action:** Regenerate token, copy entire string

### Error: "Module not found"
**Fix:** Missing Python dependencies  
**Action:** Run `pip install requests python-dotenv`

### Error: ".env file not found"
**Fix:** File doesn't exist  
**Action:** Run `Copy-Item .env.example .env`

---

## 📁 Your .env File Should Look Like:

```bash
# GitLab Configuration
GITLAB_TOKEN=glpat-A1B2C3D4E5F6G7H8I9J0
GITLAB_USERNAME=eifasoft-technologies

# Medium Configuration
MEDIUM_API_KEY=1a2b3c4d5e6f7g8h9i0j...
MEDIUM_PUBLICATION_ID=

# Dev.to Configuration
DEV_TO_API_KEY=abc123def456ghi789
DEV_TO_USERNAME=eifasoft

# Bitbucket Configuration
BITBUCKET_USERNAME=eifasoft-technologies
BITBUCKET_APP_PASSWORD=A1B2C3D4E5F6G7H8

# Optional
GOOGLE_ANALYTICS_ID=
AHREFS_API_KEY=
```

---

## 🚀 After Configuration

Run the full automation:
```bash
.\run-all-automations.ps1
```

**Expected Output:**
- ✅ 64 GitLab repositories created
- ✅ 64 GitBook pages generated
- ✅ 64 Medium articles ready
- ✅ Complete tracking system

---

## 💡 Pro Tips

### Speed Hacks
1. **Open all 4 URLs in separate tabs first**
2. **Use password manager auto-fill**
3. **Don't read instructions carefully** (just follow steps above)
4. **Come back for details later**

### Quality vs Speed
- **Fast setup** (this guide): Get tokens quickly
- **Detailed setup** (other guides): Understand security implications
- **Both work!** Choose based on your style

### If You Get Stuck
- Check `API-VISUAL-GUIDE.md` for screenshots
- Read `API-CREDENTIALS-SETUP.md` for detailed help
- Run interactive helper: `setup-credentials.ps1`

---

## 🎯 Minimum Viable Product

**If you're REALLY short on time (2 minutes):**

Just get **GitLab token**:
```bash
GITLAB_TOKEN=glpat-YOUR_TOKEN
```

Then run:
```bash
python scripts/automate-gitlab-import.py
```

**Result:** 64 backlinks on GitLab (DA 95) ✅

Add other platforms when you have time!

---

## ✅ Success Checklist

After 5 minutes, you should have:

- [ ] `.env` file exists
- [ ] At least 1 credential configured
- [ ] Scripts run without authentication errors
- [ ] First platform backlinks created

**Perfect setup:** All 4 credentials configured  
**Good enough:** GitLab only (expand later)

---

## 📞 Need Help?

**Quick fixes:**
1. Check for typos in tokens
2. Ensure no spaces before/after token
3. Verify correct scopes selected
4. Try regenerating token

**More help:**
- `API-CREDENTIALS-SETUP.md` - Detailed guide
- `API-VISUAL-GUIDE.md` - Screenshots
- `setup-credentials.ps1` - Interactive helper

---

## 🎉 Ready to Automate?

Once credentials are set:

```bash
# Run everything
.\run-all-automations.ps1

# Or individual scripts
python scripts/automate-gitlab-import.py
python scripts/automate-gitbook-generator.py
python scripts/automate-medium-articles.py
python scripts/automate-backlink-tracker.py
```

**Time invested:** 5 minutes  
**Backlinks created:** 384+  
**SEO value:** Priceless  

**Let's go! 🚀**
