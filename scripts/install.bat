@echo off
echo ========================================
echo   Portfolio Installation Script
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install

echo.
echo [2/3] Checking images folder...
if exist "public\images\profile.jpeg" (
    echo ✓ Images folder is ready
) else (
    echo ⚠ Images might be missing. Run: xcopy images public\images\ /E /I /Y
)

echo.
echo [3/3] Setup complete!
echo.
echo ========================================
echo   Ready to Start!
echo ========================================
echo.
echo To run development server:
echo   npm run dev
echo.
echo Then open: http://localhost:3000
echo.
echo ========================================
pause

