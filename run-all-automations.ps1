# Cross-Platform Backlink Automation - Quick Start Script
# This script runs all automation tools in the correct sequence

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  EifaSoft Backlink Automation System" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env file exists
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  WARNING: .env file not found!" -ForegroundColor Yellow
    Write-Host "Please copy .env.example to .env and fill in your API credentials." -ForegroundColor Yellow
    Write-Host ""
    $continue = Read-Host "Do you want to continue anyway? (y/n)"
    if ($continue -ne 'y') {
        Write-Host "Exiting..." -ForegroundColor Red
        exit
    }
}

# Install required packages if needed
Write-Host "📦 Checking dependencies..." -ForegroundColor Green
try {
    Import-Module requests -ErrorAction Stop
    Import-Module python-dotenv -ErrorAction Stop
    Write-Host "✅ All dependencies installed" -ForegroundColor Green
} catch {
    Write-Host "Installing required Python packages..." -ForegroundColor Yellow
    pip install requests python-dotenv
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Automation Pipeline" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$startTime = Get-Date

# Step 1: GitLab Import
Write-Host "[1/4] 🔄 GitLab Repository Import..." -ForegroundColor Green
python scripts/automate-gitlab-import.py
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ GitLab import completed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ GitLab import failed. Check error messages above." -ForegroundColor Red
}
Write-Host ""

# Step 2: GitBook Generation
Write-Host "[2/4] 📚 GitBook Documentation Generation..." -ForegroundColor Green
python scripts/automate-gitbook-generator.py
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ GitBook documentation generated!" -ForegroundColor Green
} else {
    Write-Host "❌ GitBook generation failed. Check error messages above." -ForegroundColor Red
}
Write-Host ""

# Step 3: Medium Articles
Write-Host "[3/4] 📝 Medium Article Creation..." -ForegroundColor Green
python scripts/automate-medium-articles.py
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Medium articles created!" -ForegroundColor Green
} else {
    Write-Host "❌ Medium article generation failed. Check error messages above." -ForegroundColor Red
}
Write-Host ""

# Step 4: Backlink Tracker
Write-Host "[4/4] 📊 Backlink Tracking System Setup..." -ForegroundColor Green
python scripts/automate-backlink-tracker.py
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Backlink tracking system ready!" -ForegroundColor Green
} else {
    Write-Host "❌ Backlink tracker setup failed. Check error messages above." -ForegroundColor Red
}
Write-Host ""

# Calculate elapsed time
$endTime = Get-Date
$elapsedTime = $endTime - $startTime

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Automation Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "⏱️  Total Time: $($elapsedTime.Minutes) minutes $($elapsedTime.Seconds) seconds" -ForegroundColor Yellow
Write-Host ""
Write-Host "📁 Output Directories:" -ForegroundColor White
Write-Host "   • gitbook-documentation/" -ForegroundColor Cyan
Write-Host "   • medium-articles/" -ForegroundColor Cyan
Write-Host "   • backlink-tracking/" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 Next Steps:" -ForegroundColor White
Write-Host "   1. Review generated files in output directories" -ForegroundColor Yellow
Write-Host "   2. Upload GitBook folder to gitbook.com" -ForegroundColor Yellow
Write-Host "   3. Publish Medium articles (follow UPLOAD_GUIDE.md)" -ForegroundColor Yellow
Write-Host "   4. Update backlink tracker with live URLs" -ForegroundColor Yellow
Write-Host ""
Write-Host "📚 For detailed instructions, see:" -ForegroundColor White
Write-Host "   CROSS-PLATFORM-BACKLINK-AUTOMATION.md" -ForegroundColor Cyan
Write-Host ""
