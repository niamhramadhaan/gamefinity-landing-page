$ErrorActionPreference = "Continue"
$port = 3002
$outFile = "$PSScriptRoot\dev-out.txt"
$errFile = "$PSScriptRoot\dev-err.txt"

Write-Host "Starting Next.js dev server on port $port..."

$proc = Start-Process `
  -FilePath "node" `
  -ArgumentList "node_modules/next/dist/bin/next", "dev", "-p", $port `
  -WorkingDirectory $PSScriptRoot `
  -PassThru `
  -NoNewWindow `
  -StandardOutputPath $outFile `
  -StandardErrorPath $errFile

Start-Sleep 8

if (Test-Path $outFile) {
  $out = Get-Content $outFile -Raw
  if ($out) { Write-Host "[stdout]`n$out" }
}

if (Test-Path $errFile) {
  $err = Get-Content $errFile -Raw
  if ($err) { Write-Host "[stderr]`n$err" }
}

if (-not $proc.HasExited) {
  Write-Host "Server running, PID: $($proc.Id)"
  Write-Host "URL: http://localhost:$port"

  try {
    $res = Invoke-WebRequest -Uri "http://localhost:$port" -UseBasicParsing -TimeoutSec 5
    Write-Host "HTTP Status: $($res.StatusCode)"
  } catch {
    Write-Host "Request error: $_"
  }
} else {
  Write-Host "Server exited with code: $($proc.ExitCode)"
}