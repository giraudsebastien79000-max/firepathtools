$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$c = $c.Replace('text-sm font-semibold text-gray-900 mb-1">Annual Expenses (CAD)', 'text-sm font-bold text-gray-800 mb-1">Annual Expenses (CAD)')
$c = $c.Replace('text-sm font-semibold text-gray-900 mb-1">Current Savings (CAD)', 'text-sm font-bold text-gray-800 mb-1">Current Savings (CAD)')
$c = $c.Replace('text-sm font-semibold text-gray-900 mb-1">Monthly Contribution (CAD)', 'text-sm font-bold text-gray-800 mb-1">Monthly Contribution (CAD)')
$c = $c.Replace('text-sm font-semibold text-gray-900 mb-1">Annual Return:', 'text-sm font-bold text-gray-800 mb-1">Annual Return:')
$c = $c.Replace('"text-xl font-bold text-gray-900 mb-6">More FIRE Calculators', '"text-xl font-bold text-gray-900 mb-6">More FIRE Calculators')
$c = $c.Replace('bg-red-50', 'bg-red-100')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)