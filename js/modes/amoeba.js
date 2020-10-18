function getAmoebaGain() {
	return tmp.maxVel.plus(1).logBase(10).pow(0.25).div(5).plus(1).pow(getAmoebaUpgEffect(0, 0)).minus(1)
}

function getAmoebaUpgCost(id, level) {
	switch (id) {
		case 0:
			return ExpantaNum.pow(10, ExpantaNum.pow(2, level)).times(5)
		case 1:
			return ExpantaNum.pow(10, level.pow(2)).times(25)
		case 2:
			return ExpantaNum.pow(10, level.pow(2)).times(25)
	}
}

function buyAmoebaUpg(row, col) {
	const id = AMOEBA_UPGRADE_DATA[row][col].id
	const cost = getAmoebaUpgCost(id, player.amoebas.upgrades[id])

	if (player.amoebas.amount.gte(cost)) {
		player.amoebas.upgrades[id] = player.amoebas.upgrades[id].plus(1)
		player.amoebas.amount = player.amoebas.amount.minus(cost)
	}
}

function amoebaUpgradeEffect(id, level) {
	switch (id) {
		case 0:
			return level.times(0.25).plus(1)
		case 1:
			return ExpantaNum.pow(level.div(5).plus(1), player.amoebas.upgrades[2].div(1.5))
		case 2:
			return ExpantaNum.pow(level.div(15).plus(1), player.amoebas.upgrades[1].times(1.25))
	}
}

const getAmoebaUpgEffect = (row, col) => tmp.amoebas.upgrades[row][col].effect

function updateAmoebaTemp() {
	tmp.amoebas = {}
	tmp.amoebas.upgrades = {}
	for (const i in AMOEBA_UPGRADE_DATA) {
		const row = AMOEBA_UPGRADE_DATA[i]
		tmp.amoebas.upgrades[i] = {}
		const tmpRow = tmp.amoebas.upgrades[i]
		
		for (const j in row) {
			const upgrade = row[j]
			const level = player.amoebas.upgrades[upgrade.id]
			tmpRow[j] = {}
			tmpUpg = tmpRow[j]
			
			tmpUpg.cost = getAmoebaUpgCost(upgrade.id, level)
			tmpUpg.effect = amoebaUpgradeEffect(upgrade.id, level)
			tmpUpg.desc = `${upgrade.desc(tmpUpg.effect)}<br>Level: ${showNum(level)}<br>Cost: ${showNum(tmpUpg.cost)} amoebas`
		}
	}
}

function amomebasUnlocked() {
	return getMinusId() > 0.5
}
