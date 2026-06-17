# FirePath Tools — Document de référence Blog

## Articles publiés

| # | Titre | URL | Liens internes |
|---|-------|-----|----------------|
| 1 | What Is a FIRE Number | /blog/what-is-a-fire-number | 25x Rule, 4% Rule, Compound Interest |
| 2 | What Is the 4% Rule | /blog/what-is-the-4-percent-rule | Safe Withdrawal Rate, FIRE Number |
| 3 | What Is a Savings Rate | /blog/what-is-savings-rate | FIRE Number, Compound Interest |
| 4 | What Is Coast FIRE | /blog/what-is-coast-fire | FIRE Number, Compound Interest, Barista FIRE |
| 5 | What Is Compound Interest | /blog/what-is-compound-interest | FIRE Number, 4% Rule |
| 6 | What Is a Safe Withdrawal Rate | /blog/what-is-a-safe-withdrawal-rate | 4% Rule, FIRE Number |
| 7 | What Is the 25x Rule | /blog/what-is-the-25x-rule | FIRE Number, 4% Rule, Safe Withdrawal Rate |
| 8 | What Is Barista FIRE | /blog/what-is-barista-fire | Coast FIRE, 25x Rule, FIRE Number |
| 9 | What Is an Index Fund | /blog/what-is-an-index-fund | Compound Interest, Safe Withdrawal Rate, FIRE Number |

---

## Articles à écrire — par priorité

| Priorité | Sujet | URL cible | Pourquoi |
|----------|-------|-----------|----------|
| 🔥 1 | What Is Lean FIRE | /blog/what-is-lean-fire | Complément Barista + Fat FIRE, bon volume |
| 🔥 2 | What Is Fat FIRE | /blog/what-is-fat-fire | Complément Lean FIRE, audience qualifiée |
| 🔥 3 | What Is Financial Independence | /blog/what-is-financial-independence | Terme généraliste, volume énorme |
| 🔥 4 | What Is Sequence of Returns Risk | /blog/what-is-sequence-of-returns-risk | Complément Safe Withdrawal Rate |
| 🔥 5 | What Is a Roth IRA | /blog/what-is-a-roth-ira | US uniquement mais volume massif |
| 🔥 6 | What Is Dollar Cost Averaging | /blog/what-is-dollar-cost-averaging | Universel, complément Index Fund |
| 🔥 7 | What Is Net Worth | /blog/what-is-net-worth | Très cherché, universel |
| 🔥 8 | What Is a Stock Market | /blog/what-is-a-stock-market | Complément Index Fund, volume énorme |
| 🔥 9 | What Is Dividend Investing | /blog/what-is-dividend-investing | Alternative aux index funds, bon volume |
| 🔥 10 | What Is the FIRE Movement | /blog/what-is-the-fire-movement | Article pilier, volume très élevé |

---

## Checklist avant chaque article

- [ ] Sujet pas encore traité sur le site
- [ ] Volume de recherche vérifié sur Google
- [ ] Liens internes identifiés vers articles existants
- [ ] Angle humain décidé à l'avance
- [ ] Dossier nouveau — pas de mkdir en double
- [ ] Passages IA reformulés en langage naturel
- [ ] Disclaimer financier en bas de page

---

## Règles techniques

- Toujours WriteAllText UTF8 sans BOM
- Jamais écrire de code directement dans PowerShell
- Architecture : mkdir > $article = @'...'@ > WriteAllText > git add > git commit > git push
- Si "nothing to commit" ajouter un espace pour forcer git

---

## Commit history

| Commit | Article |
|--------|---------|
| b827b6b | Base site — 17 outils |
| 4aa3168 | What Is Compound Interest |
| 1e6c642 | What Is a Safe Withdrawal Rate |
| be23cbb | What Is the 25x Rule |
| a42f433 | What Is Barista FIRE |
| en cours | What Is an Index Fund |

---

## Affiliation — programmes identifiés

| Programme | Commission | Pays | Plateforme |
|-----------|------------|------|------------|
| Empower | jusqu'à $100/signup | US UK CA AU | Impact.com |
| eToro | jusqu'à $250 CPA | UK EU AU CA | Direct |
| Betterment | variable | US | Impact.com |
| Interactive Investor | variable | UK | Direct |
| Questrade | variable | Canada | Direct |
| Wise | par signup | International | Direct |
