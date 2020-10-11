"us strict"
tmp.ngm = {
	rocketEff2: new Element("rocketEffNG-")
}

function updateNgmStuff() {
	document.getElementById("rocketEffNG-").innerText = ` and adding ${showNum(secondRocketEffect())} to maximum velocity.`
}

function secondRocketEffect() { // adds base max velocity
	return player.rockets.sqrt()
}
