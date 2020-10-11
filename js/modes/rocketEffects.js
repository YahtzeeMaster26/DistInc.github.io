"us strict"
tmp.ngm = {
	rocketEff2: new Element("rocketEffNG-")
}

function secondRocketEffect() { // adds base max velocity
	return player.rockets.pow(getMinusNerf("secondaryEffectExponent"))
}
