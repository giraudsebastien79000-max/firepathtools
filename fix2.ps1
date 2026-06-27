$content = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$content = $content -replace 'bg-red-50 border border-red-200 rounded-xl p-6 text-center', 'bg-red-600 rounded-xl p-6 text-center'
$content = $content -replace 'text-sm text-red-600 font-medium uppercase tracking-wide mb-1">Your FIRE Number', 'text-sm text-red-100 font-medium uppercase tracking-wide mb-1">Your FIRE Number'
$content = $content -replace 'text-4xl font-bold text-red-700">{fmt\(result\.fireNumber\)}', 'text-4xl font-bold text-white">{fmt(result.fireNumber)}'
$content = $content -replace 'text-sm text-gray-500 mt-1">Based on 4%', 'text-sm text-red-100 mt-1">Based on 4%'
$content = $content -replace 'bg-gray-50 rounded-xl p-4 text-center', 'bg-gray-100 rounded-xl p-4 text-center'
$content = $content -replace 'text-xs text-gray-500 uppercase tracking-wide mb-1">Gap to FIRE', 'text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Gap to FIRE'
$content = $content -replace 'text-xs text-gray-500 uppercase tracking-wide mb-1">Time to FIRE', 'text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1">Time to FIRE'
$content = $content -replace 'text-2xl font-bold text-gray-900">{result\.gap <= 0 \? "Done!" : fmt\(result\.gap\)}', 'text-2xl font-bold text-gray-900">{result.gap <= 0 ? "Done!" : fmt(result.gap)}'
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $content, [System.Text.Encoding]::UTF8)