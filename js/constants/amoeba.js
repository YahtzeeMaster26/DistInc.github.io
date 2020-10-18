const AMOEBA_UPGRADE_DATA = [
	[
		{
			effect: level => ExpantaNum.pow(2, level),
			desc: effect => `Max velocity boosts amoeba gain more<br>Effect: ^${showNum(effect)}`,
			id: 0
		}
	],
	[
		{
			effect: level => ExpantaNum.pow(2, level),
			desc: effect => `Increase acceleration based on levels on the upgrade to the right<br>Effect: x${showNum(effect)} acceleration`,
			id: 1
		},
		{
			effect: level => ExpantaNum.pow(2, level),
			desc: effect => `Increase maximum velocity based on levels on the upgrade to the left<br>Effect: x${showNum(effect)} maximum velocity`,
			id: 2
		}
	]
]
