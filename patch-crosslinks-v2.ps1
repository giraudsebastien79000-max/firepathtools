# patch-crosslinks-v2.ps1
# 4 edits :
#  1. france/page.tsx   : "almost half of Spain's" -> "nearly 40% below Spain's"
#  2. portugal/page.tsx : ajout entree France dans le tableau Related
#  3. thailand/page.tsx : ajout entree France dans le tableau Related
#  4. spain/page.tsx    : ajout carte <Link> France avant la carte what-is-a-fire-number
# Garde-fous : skip si deja patche, ERROR si ancre absente, verification finale Select-String.

$ErrorActionPreference = "Stop"
$base = "C:\Users\Utilisateur\Desktop\firepathtools\app\blog"

function Patch-File {
    param($Path, $Anchor, $NewText, $AlreadyMark, $Label)
    if (-not (Test-Path $Path)) { Write-Host "ERROR fichier introuvable : $Label" -ForegroundColor Red; return }
    $c = [System.IO.File]::ReadAllText($Path)
    if ($c.Contains($AlreadyMark)) { Write-Host "SKIP deja patche : $Label" -ForegroundColor Yellow; return }
    if (-not $c.Contains($Anchor)) { Write-Host "ERROR anchor absente : $Label" -ForegroundColor Red; return }
    $c = $c.Replace($Anchor, $NewText)
    [System.IO.File]::WriteAllText($Path, $c, [System.Text.Encoding]::UTF8)
    Write-Host "OK patche : $Label" -ForegroundColor Green
}

$nl = [Environment]::NewLine

$franceFile   = Join-Path $base "retire-in-france\page.tsx"
$portugalFile = Join-Path $base "retire-in-portugal\page.tsx"
$thailandFile = Join-Path $base "retire-in-thailand\page.tsx"
$spainFile    = Join-Path $base "retire-in-spain\page.tsx"

# --- Edit 1 : France, correction du texte comparatif ---
Patch-File -Path $franceFile `
    -Anchor "almost half of Spain's" `
    -NewText "nearly 40% below Spain's" `
    -AlreadyMark "nearly 40% below Spain's" `
    -Label "france : correction 'nearly 40% below'"

# --- Edits 2 et 3 : entree France dans les tableaux Related (Portugal + Thailand) ---
$spainEntry  = "{ title: 'Retire in Spain: The Complete FIRE Guide', href: '/blog/retire-in-spain', desc: 'The non-lucrative visa, wealth tax by region, and budgets city by city.' },"
$franceEntry = "            { title: 'Retire in France: The Complete FIRE Guide', href: '/blog/retire-in-france', desc: 'The visitor visa, the US-France tax treaty advantage, and budgets city by city.' },"

Patch-File -Path $portugalFile `
    -Anchor $spainEntry `
    -NewText ($spainEntry + $nl + $franceEntry) `
    -AlreadyMark "/blog/retire-in-france" `
    -Label "portugal : ajout entree France"

Patch-File -Path $thailandFile `
    -Anchor $spainEntry `
    -NewText ($spainEntry + $nl + $franceEntry) `
    -AlreadyMark "/blog/retire-in-france" `
    -Label "thailand : ajout entree France"

# --- Edit 4 : carte France sur la page Spain, inseree avant la carte what-is-a-fire-number ---
$spainAnchor = '<Link href="/blog/what-is-a-fire-number"'

$franceCardLines = @(
    '<Link href="/blog/retire-in-france" className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600">',
    '              <h3 className="text-lg font-bold text-white mb-1">',
    '                Retire in France: The Complete FIRE Guide',
    '              </h3>',
    '              <p className="text-gray-400 text-sm">',
    '                The visitor visa, the US-France tax treaty advantage, and budgets city by city.',
    '              </p>',
    '            </Link>',
    '            '
)
$franceCard = ($franceCardLines -join $nl)

Patch-File -Path $spainFile `
    -Anchor $spainAnchor `
    -NewText ($franceCard + $spainAnchor) `
    -AlreadyMark "/blog/retire-in-france" `
    -Label "spain : ajout carte France"

# --- Verification independante (jamais confiance au seul OK) ---
Write-Host ""
Write-Host "===== VERIFICATION =====" -ForegroundColor Cyan
$v1 = (Select-String -Path $franceFile   -Pattern "nearly 40% below Spain's" -SimpleMatch).Count
$v2 = (Select-String -Path $portugalFile -Pattern "/blog/retire-in-france" -SimpleMatch).Count
$v3 = (Select-String -Path $thailandFile -Pattern "/blog/retire-in-france" -SimpleMatch).Count
$v4 = (Select-String -Path $spainFile    -Pattern "/blog/retire-in-france" -SimpleMatch).Count
Write-Host "france   - 'nearly 40% below Spain's' : $v1 (attendu >= 1)"
Write-Host "portugal - '/blog/retire-in-france'   : $v2 (attendu >= 1)"
Write-Host "thailand - '/blog/retire-in-france'   : $v3 (attendu >= 1)"
Write-Host "spain    - '/blog/retire-in-france'   : $v4 (attendu >= 1)"
if ($v1 -ge 1 -and $v2 -ge 1 -and $v3 -ge 1 -and $v4 -ge 1) {
    Write-Host "VERIFICATION PASSEE - lancer git diff --stat puis committer" -ForegroundColor Green
} else {
    Write-Host "VERIFICATION ECHOUEE - ne pas committer" -ForegroundColor Red
}
