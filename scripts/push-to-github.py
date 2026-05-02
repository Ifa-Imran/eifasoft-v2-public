#!/usr/bin/env python3
"""
Push GitHub backlink files to repository using GitHub API
"""

import subprocess
import sys

REPO_URL = "https://github.com/eifasoft-technologies/open-source-guides.git"
GITHUB_USERNAME = "imran@eifasoft.com"
GITHUB_TOKEN = "Qwerty123@#$%^&"  # Note: This appears to be a password, not a token

def main():
    print("🚀 Pushing to GitHub repository...")
    print("=" * 80)
    
    # Method 1: Try with credential embedding in URL
    auth_url = REPO_URL.replace("https://", f"https://{GITHUB_USERNAME}:{GITHUB_TOKEN}@")
    
    try:
        print("Attempting to push with embedded credentials...")
        result = subprocess.run(
            ["git", "push", "-f", auth_url, "main"],
            capture_output=True,
            text=True,
            cwd=r"e:\Projects\eifasoft\eifasoft-v2\github-backlinks"
        )
        
        if result.returncode == 0:
            print("✅ SUCCESS! Files pushed to GitHub!")
            print(result.stdout)
            return True
        else:
            print("❌ Push failed:")
            print(result.stderr)
            
    except Exception as e:
        print(f"❌ Error: {e}")
    
    # If failed, provide manual instructions
    print("\n" + "=" * 80)
    print("⚠️  MANUAL PUSH REQUIRED")
    print("=" * 80)
    print("\nPlease run these commands manually:")
    print("\n1. Navigate to folder:")
    print("   cd e:\\Projects\\eifasoft\\eifasoft-v2\\github-backlinks")
    print("\n2. Remove existing remote:")
    print("   git remote remove origin")
    print("\n3. Add new remote with credentials:")
    print(f"   git remote add origin {REPO_URL}")
    print("\n4. Push to GitHub:")
    print("   git push -u origin main")
    print("\nWhen prompted for credentials:")
    print(f"  Username: {GITHUB_USERNAME}")
    print(f"  Password: {GITHUB_TOKEN}")
    print("\nOR use Git Credential Manager:")
    print("   git config --global credential.helper wincred")
    print("   git push -u origin main")
    
    return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
