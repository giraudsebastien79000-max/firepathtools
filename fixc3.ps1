$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx" -Raw
$c = $c.Replace('"text-2xl mb-1">{c.flag}', '"text-2xl mb-1" style={{fontSize:"1.5rem"}}>{c.flag}')
$c = $c.Replace('"text-xs text-gray-500 mb-2">Default:', '"text-xs mb-2" style={{color:"#374151"}}>Default:')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)