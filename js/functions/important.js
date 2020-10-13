function loadGame() {
	let ls = localStorage.getItem("dist-inc" + betaID);
	loaded = true;
	if (!((ls || "x") == "x")) {
		let data = JSON.parse(atob(ls));
		player = transformToEN(data, DEFAULT_START);
		player.tab = DEFAULT_START.tab;
		player.optionsTab = DEFAULT_START.optionsTab;
	}
	let all = JSON.parse(
		atob(
			localStorage.getItem("dist-inc-saves" + betaID)
				? localStorage.getItem("dist-inc-saves" + betaID)
				: btoa(JSON.stringify([]))
		)
	);
	if (player.modes.includes("absurd"))
		if (!confirm("Are you sure you want to continue playing in Absurd Mode?")) {
			let s = transformToEN(DEFAULT_START);
			if (all.indexOf(null) > -1) s.savePos = all.indexOf(null) + 1;
			else s.savePos = all.length + 1;
			if (s.savePos > MAX_SAVES) s.savePos = MAX_SAVES;
			player = transformToEN(s)
			player.modes = []
			localStorage.setItem("dist-inc" + betaID, btoa(JSON.stringify(ENString(player))));
			if (
				(all.includes(null) || all[player.savePos - 1] === undefined || all[player.savePos - 1].savePos == player.savePos) &&
				all.length >= player.savePos
			)
				all[player.savePos - 1] = ENString(player);
			else all.push(ENString(player));
			localStorage.setItem("dist-inc-saves" + betaID, btoa(JSON.stringify(all)));
			reload();
		}
	let c = 1;
	for (let i = 0; i < all.length; i++)
		if (all[i] !== null) {
			if (all[i].saveID == player.saveID && i < MAX_SAVES) c = i + 1;
			if (i >= MAX_SAVES) all[i] = undefined;
		}
	localStorage.setItem("dist-inc-saves" + betaID, btoa(JSON.stringify(all)));
	player.savePos = c;
	modeLoad([]);
	setupHTML();
	if (modeActive("hikers_dream")) {
		updateTempHikersDream();
		calcInclines();
	}
	if (getMinusId() > 0.5) RANK_DESCS[5] = "increase the acceleration and maximum velocity by 35% for each rank up."
	interval = setInterval(function () {
		simulateTime();
	}, 50);
}

function onVersionChange() {
	return;
}

function simulateTime() {
	let time = nerfOfflineProg(new ExpantaNum(getCurrentTime()).sub(player.time!==undefined?player.time:getCurrentTime()));
	if (time.isNaN()) time = new ExpantaNum(0) 
	player.time = getCurrentTime();
	gameLoop(time.div(1000));
}

function modeLoad(resetted) {
	if (player.modes.some(x => Object.keys(MODE_VARS).includes(x))) {
		player.modes
			.filter(x => Object.keys(MODE_VARS).includes(x))
			.forEach(x =>
				(function () {
					let data = MODE_VARS[x];
					for (let i = 0; i < Object.keys(data).length; i++) {
						if (player[Object.keys(data)[i]] === undefined || resetted.includes(Object.keys(data)[i]))
							player[Object.keys(data)[i]] = deepCopy(Object.values(data)[i]);
					}
					player = MODE_EX[x](player);
				})()
			);
	}
}

function checkNaN() {
	if (player.distance.isNaN()) {
		exportSave()
		alert("We have detected a NaN Error in your save! We have exported it to your clipboard (although it may be broken), and will hard reset the game to remove this bug as soon as possible. Please go to the discord (in the options menu) and tell someone about what happened, and hopefully your save can be salvaged. We apologize for this error.")
		hardReset(true)
	}
}