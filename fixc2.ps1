$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx" -Raw
$c = $c.Replace('"text-sm text-gray-500">{selected.highlight}', '"text-sm" style={{color:"#6B7280"}}>{selected.highlight}')
$c = $c.Replace('"text-xs text-gray-500">{c.symbol}{c.monthlyCost.toLocaleString()}/mo', '"text-xs" style={{color:"#6B7280"}}>{c.symbol}{c.monthlyCost.toLocaleString()}/mo')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)