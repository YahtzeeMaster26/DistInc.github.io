function exportModes() {
	alert(`Yout export is:\n\n${JSON.stringify(modesSelected)}`)
}

function importModes() {
	try {
		const thing = JSON.parse(prompt("Enter your modes export"))

		if (!Array.isArray(thing)) {
			alert("Invalid import")
			return
		}

		modesSelected = []
		for (const i in thing) if (MODES[thing[i]]) modesSelected.push(thing[i])
	} catch (_) {
		alert("Invalid import")
	}
}
