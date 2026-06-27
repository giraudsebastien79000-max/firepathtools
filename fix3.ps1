$c = Get-Content "C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx" -Raw
$old = '{result && (
              <div className="mt-8 space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-red-600 font-medium uppercase tracking-wide mb-1">Your FIRE Number</p>
                  <p className="text-4xl font-bold text-red-700">{fmt(result.fireNumber)}</p>
                  <p className="text-sm text-gray-500 mt-1">Based on 4% Safe Withdrawal Rate</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Gap to FIRE</p>
                    <p className="text-2xl font-bold text-gray-900">{result.gap <= 0 ? "Done!" : fmt(result.gap)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time to FIRE</p>
                    <p className="text-2xl font-bold text-gray-900">{result.gap <= 0 ? "Now!" : result.yearsToFire === 999 ? "Add contributions" : result.yearsToFire + "y " + result.monthsExtra + "m"}</p>
                  </div>
                </div>
              </div>
            )}'
$new = '{result && (
              <div className="mt-8 space-y-4">
                <div className="bg-red-600 rounded-xl p-6 text-center">
                  <p className="text-sm text-red-100 font-medium uppercase tracking-wide mb-1">Your FIRE Number</p>
                  <p className="text-4xl font-bold text-white">{fmt(result.fireNumber)}</p>
                  <p className="text-sm text-red-100 mt-1">Based on 4% Safe Withdrawal Rate</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-300 font-semibold uppercase tracking-wide mb-1">Gap to FIRE</p>
                    <p className="text-2xl font-bold text-white">{result.gap <= 0 ? "Done!" : fmt(result.gap)}</p>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-300 font-semibold uppercase tracking-wide mb-1">Time to FIRE</p>
                    <p className="text-2xl font-bold text-white">{result.gap <= 0 ? "Now!" : result.yearsToFire === 999 ? "Add contributions" : result.yearsToFire + "y " + result.monthsExtra + "m"}</p>
                  </div>
                </div>
              </div>
            )}'
$c = $c.Replace($old, $new)
[System.IO.File]::WriteAllText("C:\Users\Utilisateur\Desktop\firepathtools\app\fire-canada-calculator\client.tsx", $c, [System.Text.Encoding]::UTF8)