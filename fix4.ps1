$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$c = $c.Replace('bg-gray-800 rounded-xl p-4 text-center', 'bg-gray-700 rounded-xl p-4 text-center border border-gray-600')
$c = $c.Replace('text-xs text-gray-300 font-semibold uppercase tracking-wide mb-1">Gap to FIRE', 'text-xs text-gray-300 font-semibold uppercase tracking-wide mb-2">Gap to FIRE')
$c = $c.Replace('text-xs text-gray-300 font-semibold uppercase tracking-wide mb-1">Time to FIRE', 'text-xs text-gray-300 font-semibold uppercase tracking-wide mb-2">Time to FIRE')
$c = $c.Replace('text-2xl font-bold text-white">{result.gap <= 0 ? "Done!" : fmt(result.gap)}', 'text-2xl font-bold text-white mt-1">{result.gap <= 0 ? "Done!" : fmt(result.gap)}')
$c = $c.Replace('text-2xl font-bold text-white">{result.gap <= 0 ? "Now!" :', 'text-2xl font-bold text-white mt-1">{result.gap <= 0 ? "Now!" :')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)