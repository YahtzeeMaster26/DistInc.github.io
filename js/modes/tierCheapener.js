function updateTempTierCheapCost() {
	tmp.tierCheap.req = ExpantaNum.pow(1.5, player.tierCheap).ceil()
}

function getTierCheapEff() {
	return player.tierCheap.pow(1.5).times(0.2).plus(0.7)
}

function getTierCheapSecondEff() {
	return player.tierCheap.times(0.2).plus(1)
}

function updateTempTierCheap() {
	if (!tmp.tierCheap) tmp.tierCheap = {};
	updateTempTierCheapCost();
	tmp.tierCheap.can = player.tier.gte(tmp.tierCheap.req);
	tmp.tierCheap.layer = new Layer("tierCheap", tmp.tierCheap.can, "semi-forced");
	tmp.tierCheap.pow = new ExpantaNum(1);
	tmp.tierCheap.eff = getTierCheapEff();
	tmp.tierCheap.eff2 = getTierCheapSecondEff();
	if (!tmp.rankCheap.updateOnReset) tmp.rankCheap.updateOnReset = updateTempRankCheapCost;
}
