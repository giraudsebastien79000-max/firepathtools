$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$c = $c.Replace('className="block text-sm font-semibold text-gray-900 mb-1"', 'className="block text-sm font-bold mb-1" style={{color:"#111827"}}')
$c = $c.Replace('"text-xl font-bold text-gray-900 mb-6">More FIRE Calculators', '"text-xl font-bold mb-6" style={{color:"#111827"}}>More FIRE Calculators')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)