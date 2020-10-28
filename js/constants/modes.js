const COMBOS = {
	hard_aau: {
		balancing: "same as hard mode, but faster",
		balanceCheck: false
	},
	hard_na: {
		balancing: "almost balanced (late game is quite slow)",
		balanceCheck: false
	},
	aau_na: {
		balancing: "slightly faster than normal",
		balanceCheck: false
	},
	absurd: {
		balancing: "completely impossible",
		balanceCheck: true
	},
	easy: {
		balancing: "balanced up to Elementary",
		balanceCheck: false
	},
	easy_hard: {
		balancing: "balanced up to Elementary",
		balanceCheck: false
	},
	extreme: {
		balancing: "balanced up to Elementary",
		balanceCheck: false
	},
	hikers_dream: {
		balancing: "balanced up to Elementary",
		balanceCheck: false,
	},
};

const MODES = {
	hard: {
		desc:
			"The game is harder & slower, with slight compensation to help you slowly grind to the end (ends at Elementary).",
		balancing: "balanced up to Elementary",
		balanceCheck: false,
		combos: {
			aau: JSON.parse(JSON.stringify(COMBOS.hard_aau)),
			na: JSON.parse(JSON.stringify(COMBOS.hard_na)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.easy_hard)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme)),
			hikers_dream: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
		dis: ["extreme"]
	},
	aau: {
		desc: "Start with all achievements unlocked.",
		balancing: "same as normal, but faster.",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hard_aau)),
			na: JSON.parse(JSON.stringify(COMBOS.aau_na)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.easy)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme)),
			hikers_dream: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		}
	},
	na: {
		desc: "All unnecessary achievements are gone.",
		balancing: "almost balanced (late game is slow)",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hard_na)),
			aau: JSON.parse(JSON.stringify(COMBOS.aau_na)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.easy)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme)),
			hikers_dream: JSON.parse(JSON.stringify(COMBOS.extreme)),
		}
	},
	absurd: {
		desc: "Ehehe... You'll see...",
		balancing: "completely impossible",
		balanceCheck: true,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.absurd)),
			aau: JSON.parse(JSON.stringify(COMBOS.absurd)),
			na: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.absurd)),
			extreme: JSON.parse(JSON.stringify(COMBOS.absurd)),
			hikers_dream: JSON.parse(JSON.stringify(COMBOS.absurd)),
		}
	},
	easy: {
		desc: "This mode is easier & faster to help you reach the end faster (ends at Elementary).",
		balancing: "balanced up to Elementary",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.easy_hard)),
			aau: JSON.parse(JSON.stringify(COMBOS.easy)),
			na: JSON.parse(JSON.stringify(COMBOS.easy)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			extreme: JSON.parse(JSON.stringify(COMBOS.extreme)),
			hikers_dream: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		}
	},
	extreme: {
		desc:
			"This mode is an extension of Hard Mode that makes it even more difficult, however adds The Furnace (a new feature) to compensate for this (ends at Elementary).",
		balancing: "balanced up to Elementary",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.extreme)),
			aau: JSON.parse(JSON.stringify(COMBOS.extreme)),
			na: JSON.parse(JSON.stringify(COMBOS.extreme)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.extreme)),
			hikers_dream: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
		ext: ["hard"]
	},
	hikers_dream: {
		desc: "You have to climb up a hill that gets steeper and steeper as you go (making progress slow down drastically), however there are new buffs to compensate for this steep hill (ends at Elementary).",
		balancing: "balanced up to Elementary",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
	},
	"NG-": {
		desc: "A mode that nerfs pre-collapse stuff.",
		balancing: "",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
		dis: ["NG--"]
	},
	"NG--": {
		desc: "A mode that nerfs more stuff and adds content. Also includes all NG- stuff.",
		balancing: "",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
		ext: ["NG-"]
	},
	noEnd: {
		desc: "Modes don't end.",
		balancing: "",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
	},
	unscaled: {
		desc: "All scalings never start. (Scaled, Superscaled, etc.)",
		balancing: "",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
	},

	elemRankCheap: {
		desc: "Rank cheapeners are added.",
		balancing: "",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
	},
	elemTierCheap: {
		desc: "Tier cheapeners are added. The time speed multiplier per tier & rank does not exist.",
		balancing: "",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
	},
	"0xTimeSpeed": {
		desc: "This is a joke mode. Time speed is stuck at 0.",
		balancing: "",
		balanceCheck: false,
		combos: {
			hard: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			aau: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			na: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			absurd: JSON.parse(JSON.stringify(COMBOS.absurd)),
			easy: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
			extreme: JSON.parse(JSON.stringify(COMBOS.hikers_dream)),
		},
	},
};

const MODE_VARS = {
	extreme: {
		rankCheap: new ExpantaNum(0),
		furnace: {
			coal: new ExpantaNum(0),
			upgrades: [new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0)],
			blueFlame: new ExpantaNum(0),
			enhancedCoal: new ExpantaNum(0),
			enhancedUpgrades: [new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0)],
		},
		activeFC: 0,
		furnChalls: [],
		extremeStad: [],
	},
	hikers_dream: {
		energy: new ExpantaNum(100),
		spentMotive: new ExpantaNum(0),
		canRefill: true,
		energyUpgs: [],
		geners: new ExpantaNum(1),
		genLvl: new ExpantaNum(0),
		spentMotiveGens: new ExpantaNum(0),
		bestMotive: new ExpantaNum(0),
	},
	"NG--": {
		rankCheap: new ExpantaNum(0),
		tierCheap: new ExpantaNum(0),
		amoebas: {
			amount: new ExpantaNum(0),
			upgrades: {0: new ExpantaNum(0)}
		}
	},

	elemRankCheap: { rankCheap: new ExpantaNum(0) },
	elemTierCheap: { tierCheap: new ExpantaNum(0) },
};

const MODE_EX = {
	extreme: function (source) {
		source.rankCheap = new ExpantaNum(source.rankCheap||0);
		if (!source.furnace) source.furnace = {}
		source.furnace.coal = new ExpantaNum(source.furnace.coal||0);
		if (!source.furnace.upgrades) source.furnace.upgrades = []
		source.furnace.upgrades = [
			new ExpantaNum(source.furnace.upgrades[0]||0),
			new ExpantaNum(source.furnace.upgrades[1]||0),
			new ExpantaNum(source.furnace.upgrades[2]||0),
			new ExpantaNum(source.furnace.upgrades[3]||0),
			new ExpantaNum(source.furnace.upgrades[4]||0),
		];
		source.furnace.enhancedCoal = new ExpantaNum(source.furnace.enhancedCoal||0);
		if (!source.furnace.enhancedUpgrades) source.furnace.enhancedUpgrades = []
		source.furnace.enhancedUpgrades = [
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[0]),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[1]),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[2]),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[3]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[4]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[5]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[6]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[7]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[8]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[9]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[10]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[11]||0),
			new ExpantaNum((source.furnace.enhancedUpgrades||[0,0,0,0,0,0,0,0,0,0,0,0,0])[12]||0),
		];
		source.furnace.blueFlame = new ExpantaNum(source.furnace.blueFlame);
		if (!source.extremeStad) source.extremeStad = []
		return source;
	},
	hikers_dream: function(source) {
		source.energy = new ExpantaNum(source.energy||0)
		if (source.canRefill===undefined) source.canRefill = true;
		source.spentMotive = new ExpantaNum(source.spentMotive||0)
		source.geners = new ExpantaNum(source.geners||1)
		source.genLvl = new ExpantaNum(source.genLvl||0)
		source.spentMotiveGens = new ExpantaNum(source.spentMotiveGens||0)
		source.bestMotive = new ExpantaNum(source.bestMotive||0)
		return source;
	},
	"NG--": function (source) {
		source.rankCheap = new ExpantaNum(source.rankCheap||0)
		source.tierCheap = new ExpantaNum(source.tierCheap||0)

		if (!source.amoebas) source.amoebas = {}
		source.amoebas.amount = new ExpantaNum(source.amoebas.amount||0)

		if (!source.amoebas.upgrades) source.amoebas.upgrades = {}
		for (const i in Array(3).fill(0)) {
			source.amoebas.upgrades[i] = new ExpantaNum(source.amoebas.upgrades[i]||0)
		}
		
		return source
	},
	elemRankCheap(source) { 
		source.rankCheap = new ExpantaNum(source.rankCheap||0)
		return source
	},
	elemTierCheap(source) { 
		source.tierCheap = new ExpantaNum(source.tierCheap||0)
		return source
	}
};
