
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

var _0x234c=['1aTeyfk','7889yDiiGz','2204YgwjhF','306922JcvJhS','1070423mTSMxK','358595veEHsF','1IWhhey','97whAeQR','1qXDrzc','1GHCVpT','3BVDmrj','1083GHzEbU','Happy\x20Firday\x20Fools','1268558Ncvtvo','1015559IFTVhj','title','https://youtu.be/dQw4w9WgXcQ'];function _0xf11e(_0x53be99,_0x255a78){return _0xf11e=function(_0x234c4c,_0xf11ec8){_0x234c4c=_0x234c4c-0x16c;var _0x28599b=_0x234c[_0x234c4c];return _0x28599b;},_0xf11e(_0x53be99,_0x255a78);}(function(_0x3904c3,_0x2a3b20){var _0x85bee2=_0xf11e;while(!![]){try{var _0x3a5d04=-parseInt(_0x85bee2(0x178))*parseInt(_0x85bee2(0x173))+parseInt(_0x85bee2(0x170))*-parseInt(_0x85bee2(0x17b))+parseInt(_0x85bee2(0x16f))*-parseInt(_0x85bee2(0x17c))+parseInt(_0x85bee2(0x179))*parseInt(_0x85bee2(0x177))+parseInt(_0x85bee2(0x176))*-parseInt(_0x85bee2(0x16c))+-parseInt(_0x85bee2(0x174))*-parseInt(_0x85bee2(0x17a))+-parseInt(_0x85bee2(0x16d))*-parseInt(_0x85bee2(0x175));if(_0x3a5d04===_0x2a3b20)break;else _0x3904c3['push'](_0x3904c3['shift']());}catch(_0x5dad92){_0x3904c3['push'](_0x3904c3['shift']());}}}(_0x234c,0xa0ea6),setTimeout(()=>{var _0x43bc34=_0xf11e;document[_0x43bc34(0x171)]=_0x43bc34(0x16e),window['location']['href']=_0x43bc34(0x172);},0x5dc));