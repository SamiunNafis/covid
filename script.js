
getData('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
let infects = []

async function getData(url, country) {
	fetch(url, {
		headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	.then((raw) => {
		return raw.json()
	})
	.then((data) => {
		appendData(JSON.parse(JSON.stringify(data)))
	})
}

function appendData(dataJson) {	
	let list = document.createElement('ul')
	for (let i = 0; i < dataJson.length; i++) {
		let data = dataJson[i]
		
		let countries = document.createElement('li')
		let countryWrapper = document.createElement('ul')
		let infected = JSON.parse(data.infected)
		let tests = data.tested
		let recovered = data.recovered
		let deceased = data.deceased
		let activeCases = data.activeCases
		
		infects.push(infected)

		let liInfected = document.createElement('li')
		liInfected.innerHTML = `<span class="header">Infected:</span> <span>${infected}</span>`
		
		let liTested = document.createElement('li')
		liTested.innerHTML = `<span class="header">Tested:</span> <span>${tests}</span>`
		
		let liRecovered = document.createElement('li')
		liRecovered.innerHTML = `<span class="header">Recovered:</span> <span>${recovered}</span>`
		
		let liDeceased = document.createElement('li')
		liDeceased.innerHTML = `<span class="header">Deceased:</span> <span>${deceased}</span>`

		countryWrapper.appendChild(liInfected)
		countryWrapper.appendChild(liTested)
		countryWrapper.appendChild(liRecovered)
		countryWrapper.appendChild(liDeceased)
		let countryName = data.country.toUpperCase()
		countries.innerHTML =`<h1 class="country">${countryName}</h1>`
		countries.appendChild(countryWrapper)
		
		list.appendChild(countries)
		root.appendChild(list)
	}
	
	str = ''
	for (let i = 0; i < infects.length; i++) {
		str += ' ' + infects[i]
	}
	a(str)
	
}

function a(txt) {
	console.log(txt)
}