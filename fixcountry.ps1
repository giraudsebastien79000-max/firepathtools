$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx" -Raw
$c = $c.Replace('className="text-xs text-gray-500 mb-2">{c.monthlyCost.toLocaleString()}</td>', 'className="text-sm text-gray-700">{c.monthlyCost.toLocaleString()}</td>')
$c = $c.Replace('"py-3 text-right text-gray-600">{c.symbol}{c.monthlyCost.toLocaleString()}', '"py-3 text-right" style={{color:"#374151"}}>{c.symbol}{c.monthlyCost.toLocaleString()}')
$c = $c.Replace('"py-3 text-right text-gray-600">{c.swr}%', '"py-3 text-right" style={{color:"#374151"}}>{c.swr}%')
$c = $c.Replace('text-gray-600 text-sm">Your FIRE number depends', 'text-sm" style={{color:"#374151"}}>Your FIRE number depends')
$c = $c.Replace('text-gray-600 text-sm">Most FIRE expats', 'text-sm" style={{color:"#374151"}}>Most FIRE expats')
$c = $c.Replace('text-gray-600 text-sm">EU countries offer', 'text-sm" style={{color:"#374151"}}>EU countries offer')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)