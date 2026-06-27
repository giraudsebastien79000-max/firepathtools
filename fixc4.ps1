$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx" -Raw
$c = $c.Replace('className="text-xs text-gray-500 mb-2">Default:', 'className="text-xs mb-2" style={{color:"#374151"}}>Default:')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-by-country-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)