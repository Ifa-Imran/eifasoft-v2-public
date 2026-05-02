# 🔑 Interactive API Credential Setup Helper
# This script guides you through obtaining and configuring API credentials

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  API Credentials Setup Helper" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env file exists
if (-not (Test-Path ".env")) {
    Write-Host "❌ .env file not found! Creating from template..." -ForegroundColor Yellow
    Copy-Item .env.example .env
    Write-Host "✅ .env file created" -ForegroundColor Green
} else {
    Write-Host "✅ .env file found" -ForegroundColor Green
}

Write-Host ""
Write-Host "This helper will guide you through obtaining API credentials." -ForegroundColor White
Write-Host "You'll need to visit each platform's website to generate tokens." -ForegroundColor White
Write-Host ""
Write-Host "⏱️  Estimated time: 20-30 minutes total" -ForegroundColor Yellow
Write-Host ""

# Ask user if they want to proceed
$proceed = Read-Host "Ready to begin? (y/n)"
if ($proceed -ne 'y') {
    Write-Host "Exiting... Run this script again when ready." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 1: GitLab Personal Access Token" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Instructions:" -ForegroundColor Green
Write-Host "1. Go to: https://gitlab.com/-/profile/personal_access_tokens" -ForegroundColor White
Write-Host "2. Click 'Add new token'" -ForegroundColor White
Write-Host "3. Name: EifaSoft Backlink Automation" -ForegroundColor White
Write-Host "4. Select scopes: api, write_repository, read_user" -ForegroundColor White
Write-Host "5. Click 'Create personal access token'" -ForegroundColor White
Write-Host "6. COPY THE TOKEN IMMEDIATELY (won't show again!)" -ForegroundColor Yellow
Write-Host ""

$openGitLab = Read-Host "Open GitLab token page in browser? (y/n)"
if ($openGitLab -eq 'y') {
    Start-Process "https://gitlab.com/-/profile/personal_access_tokens"
}

$gitlabToken = Read-Host "Enter your GitLab Personal Access Token (or press Enter to skip)"
if ($gitlabToken) {
    # Update .env file with GitLab token
    $envContent = Get-Content .env -Raw
    $envContent = $envContent -replace 'GITLAB_TOKEN=.*', "GITLAB_TOKEN=$gitlabToken"
    $envContent | Set-Content .env -NoNewline
    Write-Host "✅ GitLab token saved!" -ForegroundColor Green
} else {
    Write-Host "⏭️  Skipping GitLab for now" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press Enter to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 2: Medium Integration Token" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Instructions:" -ForegroundColor Green
Write-Host "1. Go to: https://medium.com/me/settings/security" -ForegroundColor White
Write-Host "2. Scroll to 'Integration tokens' section" -ForegroundColor White
Write-Host "3. Click 'Generate token'" -ForegroundColor White
Write-Host "4. Name: EifaSoft Automation" -ForegroundColor White
Write-Host "5. COPY THE TOKEN" -ForegroundColor Yellow
Write-Host ""

$openMedium = Read-Host "Open Medium settings in browser? (y/n)"
if ($openMedium -eq 'y') {
    Start-Process "https://medium.com/me/settings/security"
}

$mediumToken = Read-Host "Enter your Medium Integration Token (or press Enter to skip)"
if ($mediumToken) {
    $envContent = Get-Content .env -Raw
    $envContent = $envContent -replace 'MEDIUM_API_KEY=.*', "MEDIUM_API_KEY=$mediumToken"
    $envContent | Set-Content .env -NoNewline
    Write-Host "✅ Medium token saved!" -ForegroundColor Green
} else {
    Write-Host "⏭️  Skipping Medium for now" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press Enter to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 3: Dev.to API Key" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Instructions:" -ForegroundColor Green
Write-Host "1. Go to: https://dev.to/settings/extensions" -ForegroundColor White
Write-Host "2. Scroll to 'API key' section" -ForegroundColor White
Write-Host "3. Click 'Generate API Key'" -ForegroundColor White
Write-Host "4. COPY THE KEY" -ForegroundColor Yellow
Write-Host ""

$openDevTo = Read-Host "Open Dev.to settings in browser? (y/n)"
if ($openDevTo -eq 'y') {
    Start-Process "https://dev.to/settings/extensions"
}

$devtoKey = Read-Host "Enter your Dev.to API Key (or press Enter to skip)"
if ($devtoKey) {
    $envContent = Get-Content .env -Raw
    $envContent = $envContent -replace 'DEV_TO_API_KEY=.*', "DEV_TO_API_KEY=$devtoKey"
    $envContent | Set-Content .env -NoNewline
    Write-Host "✅ Dev.to key saved!" -ForegroundColor Green
} else {
    Write-Host "⏭️  Skipping Dev.to for now" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press Enter to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 4: Bitbucket App Password" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Instructions:" -ForegroundColor Green
Write-Host "1. Go to: https://bitbucket.org/account/settings/app-passwords/" -ForegroundColor White
Write-Host "2. Click 'Create app password'" -ForegroundColor White
Write-Host "3. Label: EifaSoft Automation" -ForegroundColor White
Write-Host "4. Permissions: Repositories (Write), Account (Read)" -ForegroundColor White
Write-Host "5. Click 'Create'" -ForegroundColor White
Write-Host "6. COPY THE PASSWORD (won't show again!)" -ForegroundColor Yellow
Write-Host ""

$openBitbucket = Read-Host "Open Bitbucket settings in browser? (y/n)"
if ($openBitbucket -eq 'y') {
    Start-Process "https://bitbucket.org/account/settings/app-passwords/"
}

$bitbucketPassword = Read-Host "Enter your Bitbucket App Password (or press Enter to skip)"
if ($bitbucketPassword) {
    $envContent = Get-Content .env -Raw
    $envContent = $envContent -replace 'BITBUCKET_APP_PASSWORD=.*', "BITBUCKET_APP_PASSWORD=$bitbucketPassword"
    $envContent | Set-Content .env -NoNewline
    Write-Host "✅ Bitbucket password saved!" -ForegroundColor Green
} else {
    Write-Host "⏭️  Skipping Bitbucket for now" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press Enter to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Configuration Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Read the updated .env file and show what's configured
$finalEnv = Get-Content .env | Where-Object { $_ -match '^[A-Z]' }

Write-Host "Current configuration in .env file:" -ForegroundColor White
Write-Host ""

$configured = 0
$total = 0

$platforms = @{
    "GITLAB_TOKEN" = "GitLab"
    "GITLAB_USERNAME" = "GitLab Username"
    "MEDIUM_API_KEY" = "Medium"
    "DEV_TO_API_KEY" = "Dev.to"
    "BITBUCKET_USERNAME" = "Bitbucket Username"
    "BITBUCKET_APP_PASSWORD" = "Bitbucket Password"
}

foreach ($line in $finalEnv) {
    foreach ($key in $platforms.Keys) {
        if ($line -match "^$key=") {
            $total++
            $value = ($line -split '=', 2)[1]
            if ($value -and $value -notmatch '^your_|placeholder|_HERE') {
                Write-Host "✅ $($platforms[$key]): Configured" -ForegroundColor Green
                $configured++
            } else {
                Write-Host "⏳ $($platforms[$key]): Not configured" -ForegroundColor Yellow
            }
        }
    }
}

Write-Host ""
Write-Host "Progress: $configured out of 6 credentials configured" -ForegroundColor Cyan
Write-Host ""

if ($configured -ge 1) {
    Write-Host "🎉 Great! You're ready to run some automations!" -ForegroundColor Green
    Write-Host ""
    
    if ($configured -ge 1) {
        Write-Host "You can now run:" -ForegroundColor White
        Write-Host "  python scripts/automate-gitlab-import.py" -ForegroundColor Cyan
    }
    
    if ($configured -ge 3) {
        Write-Host "  python scripts/automate-medium-articles.py" -ForegroundColor Cyan
        Write-Host "  python scripts/automate-backlink-tracker.py" -ForegroundColor Cyan
    }
    
    Write-Host ""
    Write-Host "For detailed instructions, see:" -ForegroundColor White
    Write-Host "  API-CREDENTIALS-SETUP.md" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host "⚠️  No credentials configured yet." -ForegroundColor Yellow
    Write-Host "Please configure at least one platform to proceed." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Need help? Read:" -ForegroundColor White
    Write-Host "  API-CREDENTIALS-SETUP.md" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 Tip: Keep this helper script handy for future reference!" -ForegroundColor Yellow
Write-Host ""
