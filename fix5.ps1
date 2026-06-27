$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$c = $c.Replace('bg-gray-700 rounded-xl p-4 text-center border border-gray-600', 'bg-red-700 rounded-xl p-4 text-center')
$c = $c.Replace('text-xs text-gray-300 font-semibold uppercase tracking-wide mb-2">Gap to FIRE', 'text-xs text-red-100 font-semibold uppercase tracking-wide mb-2">Gap to FIRE')
$c = $c.Replace('text-xs text-gray-300 font-semibold uppercase tracking-wide mb-2">Time to FIRE', 'text-xs text-red-100 font-semibold uppercase tracking-wide mb-2">Time to FIRE')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)