$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$c = $c.Replace('bg-gray-100 rounded-xl p-4 text-center', 'bg-gray-900 rounded-xl p-4 text-center border border-gray-700')
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)