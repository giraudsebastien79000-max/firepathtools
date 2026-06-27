$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$c = $c.Replace('bg-red-700 rounded-xl p-4 text-center', 'bg-gray-900 rounded-xl p-4 text-center border border-gray-700')
$c = $c.Replace('text-xs text-red-100 font-semibold uppercase tracking-wide mb-2">Gap to FIRE', 'text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Gap to FIRE')
$c = $c.Replace('text-xs text-red-100 font-semibold uppercase tracking-wide mb-2">Time to FIRE', 'text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Time to FIRE')
$c = $c.Replace('className="block text-sm font-medium text-gray-700 mb-1">Annual Expenses (CAD)', 'className="block text-sm font-semibold text-gray-900 mb-1">Annual Expenses (CAD)')
$c = $c.Replace('className="block text-sm font-medium text-gray-700 mb-1">Current Savings (CAD)', 'className="block text-sm font-semibold text-gray-900 mb-1">Current Savings (CAD)')
$c = $c.Replace('className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution (CAD)', 'className="block text-sm font-semibold text-gray-900 mb-1">Monthly Contribution (CAD)')
$c = $c.Replace('className="block text-sm font-medium text-gray-700 mb-1">Annual Return:', 'className="block text-sm font-semibold text-gray-900 mb-1">Annual Return:')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)