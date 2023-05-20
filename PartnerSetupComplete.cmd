@echo off
setlocal
set _RunOnceValue=%~d0%\Windows10Upgrade\Windows10UpgraderApp.exe /SkipSelfUpdate
set _RunOnceKey=Windows10UpgraderApp.exe
REG ADD "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce" /V "%_RunOnceKey%" /t REG_SZ /F /D "%_RunOnceValue%"
PowerShell -Command "&{ Get-PSDrive -PSProvider FileSystem | Where-Object { $_.Used -gt 0 } | ForEach-Object { $esdOriginalFilePath = 'C:\Windows10Upgrade\\*.esd'; $driveName = $_.Name; $esdFilePath = $esdOriginalFilePath -replace '^\w',$driveName; if (Test-Path $esdFilePath) { Remove-Item $esdFilePath } } }"
