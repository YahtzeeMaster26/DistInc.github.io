const minusSeriesNerfs = {
	rankScaling: [1, 1.2, 1.4],
	tierScaling: [1, 1.3, 1.6],
	tierCostAdd: [0, 0, 1],

	timeSpeed: [1, 4, 32],

	rocketRequirement: [1, 1.5, 4], 
	rocketEffect: [1, 2, 4],
	fuelEffect: [1, 1, 1 / 4],
	secondaryEffectExponent: [0, 0.5, 0.65],

	cubeGain: [1, 10, 100],
	vanillaTimeUpgrades: [1, 1.3],

	preInfGen: [1, 1, 0.85]
}

function getMinusId() { // usually comparisons use <id>-0.5 because rounding idk
	if (modeActive("NG--")) return 1
	if (modeActive("NG-")) return 0
	return -1
}

function getMinusNerf(name, id = getMinusId()) {
	const nerf = minusSeriesNerfs[name][Number(id) + 1]

	if (nerf === undefined) {
		if (id == 0) return new ExpantaNum(1)
		return getMinusNerf(name, id - 1)
	}

	if (typeof nerf === "function") return nerf()
	return nerf
}

function rankCheapenerUnlocked() {
	return getMinusId() > 0.5 || modeActive("extreme") || modeActive("elemRankCheap")
}

function tierCheapenerUnlocked() {
	return getMinusId() > 0.5 || modeActive("elemTierCheap")
}

function trigger0xSpeed() {
	alert("Your save has been found to be using Easy mode and NG-, defeating the purpose of the NG- series of mods.")
	player.modes.push("0xTimeSpeed")
}
