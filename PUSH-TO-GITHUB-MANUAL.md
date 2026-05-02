# Manual GitHub Push Instructions

## ⚠️ IMPORTANT: Credential Issue

Your password contains special characters (`@#$%^&`) that interfere with Git authentication. You need to use one of these methods:

---

## Method 1: Use GitHub Personal Access Token (RECOMMENDED)

### Step 1: Create Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "EifaSoft Backlinks Upload"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN IMMEDIATELY** - you won't see it again!
7. Token will look like: `ghp_xxxxxxxxxxxxxxxxxxxx`

### Step 2: Push Using Token
```bash
cd e:\Projects\eifasoft\eifasoft-v2\github-backlinks

# Remove old remote
git remote remove origin

# Add new remote (we'll use credential prompt)
git remote add origin https://github.com/eifasoft-technologies/open-source-guides.git

# Configure Git to use credential manager
git config --global credential.helper wincred

# Push (will prompt for credentials)
git push -u origin main
```

When prompted:
- **Username:** `imran@eifasoft.com`
- **Password:** Paste your **Personal Access Token** (NOT your regular password)

---

## Method 2: Use Git Credential Manager (If Already Logged In)

```bash
cd e:\Projects\eifasoft\eifasoft-v2\github-backlinks

# Clear any cached credentials
git credential-manager erase

# Set up fresh credentials
git config --global credential.helper manager

# Push
git push -u origin main
```

This should open a browser window for GitHub authentication.

---

## Method 3: Use SSH Key (Most Reliable)

### Step 1: Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "imran@eifasoft.com"
```
Press Enter to accept default location.

### Step 2: Add SSH Key to GitHub
1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Or on Windows:
   ```bash
   type C:\Users\YOUR_USERNAME\.ssh\id_ed25519.pub
   ```

2. Go to: https://github.com/settings/keys
3. Click "New SSH key"
4. Paste your public key
5. Save

### Step 3: Change Remote to SSH
```bash
cd e:\Projects\eifasoft\eifasoft-v2\github-backlinks

# Remove HTTPS remote
git remote remove origin

# Add SSH remote
git remote add origin git@github.com:eifasoft-technologies/open-source-guides.git

# Push
git push -u origin main
```

---

## Quick Fix: Use PowerShell with Escaped Password

```powershell
cd e:\Projects\eifasoft\eifasoft-v2\github-backlinks

# Escape special characters in password
$PASSWORD = 'Qwerty123@``#``$``%``^``&'
$USERNAME = 'imran@eifasoft.com'
$REPO_URL = 'https://github.com/eifasoft-technologies/open-source-guides.git'

# Create authenticated URL
$AUTH_URL = $REPO_URL -replace 'https://', "https://$USERNAME`:$PASSWORD@"

# Push
git push -f $AUTH_URL main
```

---

## Verification

After successful push, you should see:
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to XX threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XX.XX MiB | XX.XX KiB/s, done.
Total XX (delta XX), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (XX/XX), done.
To https://github.com/eifasoft-technologies/open-source-guides.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Then visit: https://github.com/eifasoft-technologies/open-source-guides

You should see all 64 README folders!

---

## Need Help?

If none of these methods work:
1. Install GitHub Desktop: https://desktop.github.com
2. Log in with your credentials
3. Clone the repository
4. Copy all files from `github-backlinks/` to the cloned folder
5. Commit and push using GitHub Desktop GUI
