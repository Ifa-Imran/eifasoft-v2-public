# EifaSoft Windows Server Deployment Script
# Run this in PowerShell as Administrator on your server

Write-Host "=== EifaSoft Deployment Script ===" -ForegroundColor Cyan

# 1. Stop any existing Node processes
Write-Host "`n[1/5] Stopping existing Node processes..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# 2. Navigate to project directory
$projectPath = "C:\HostingSpaces\admin\eifasoft.com\wwwroot"
Write-Host "`n[2/5] Navigating to $projectPath..." -ForegroundColor Yellow
Set-Location $projectPath

# 3. Clean and rebuild
Write-Host "`n[3/5] Cleaning and rebuilding..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next
}
npm run build

# 4. Create web.config for IIS reverse proxy
Write-Host "`n[4/5] Creating IIS web.config..." -ForegroundColor Yellow
$webConfig = @"
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <remove fileExtension=".js" />
      <remove fileExtension=".mjs" />
      <remove fileExtension=".json" />
      <remove fileExtension=".css" />
      <remove fileExtension=".woff" />
      <remove fileExtension=".woff2" />
      <remove fileExtension=".svg" />
      <remove fileExtension=".webp" />
      <remove fileExtension=".xml" />
      <mimeMap fileExtension=".js" mimeType="application/javascript" />
      <mimeMap fileExtension=".mjs" mimeType="application/javascript" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".css" mimeType="text/css" />
      <mimeMap fileExtension=".woff" mimeType="font/woff" />
      <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
      <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
      <mimeMap fileExtension=".webp" mimeType="image/webp" />
      <mimeMap fileExtension=".xml" mimeType="text/xml" />
    </staticContent>
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode" />
    </handlers>
    <rewrite>
      <rules>
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server.js\/debug[\/]?" />
        </rule>
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}" />
        </rule>
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True" />
          </conditions>
          <action type="Rewrite" url="server.js" />
        </rule>
      </rules>
    </rewrite>
    <iisnode node_env="production" nodeProcessCommandLine="&quot;C:\Program Files\nodejs\node.exe&quot;" interceptor="&quot;%programfiles%\iisnode\interceptor.js&quot;" />
  </system.webServer>
</configuration>
"@
$webConfig | Out-File -FilePath "web.config" -Encoding UTF8

# 5. Start the Next.js server
Write-Host "`n[5/5] Starting Next.js server..." -ForegroundColor Yellow
Write-Host "Option A: Using PM2 (recommended)" -ForegroundColor Green
Write-Host "  npm install -g pm2"
Write-Host "  pm2 start npm --name 'eifasoft' -- start"
Write-Host "  pm2 save"
Write-Host ""
Write-Host "Option B: Direct start (for testing)" -ForegroundColor Green
Write-Host "  npm run start"

Write-Host "`n=== Deployment Complete ===" -ForegroundColor Cyan
Write-Host "Make sure IIS URL Rewrite module is installed!" -ForegroundColor Red
Write-Host "Download: https://www.iis.net/downloads/microsoft/url-rewrite" -ForegroundColor Yellow
