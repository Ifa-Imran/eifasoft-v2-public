@echo off
REM Production Server Startup Script for EifaSoft v2

echo ========================================
echo   EifaSoft Technologies - Production Server
echo ========================================
echo.

REM Set production environment
set NODE_ENV=production
set PORT=3000

echo Starting production server...
echo Environment: %NODE_ENV%
echo Port: %PORT%
echo.

REM Start the server
node server.js

pause
