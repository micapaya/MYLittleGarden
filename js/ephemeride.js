function load_eph (obj){
	let gets=[]
	for (let i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}	
	
	var url = "https://api.meteo-concept.com/api/ephemeride/1?token=MON_TOKEN&insee=62498";
	fetch(url)
		.then(response => response.json())
		.then(json => {

			console.log(json)
			let moonPhaseContainer = document.createElement('div');
			moonPhaseContainer.setAttribute('id', 'moon_phase');
			moonPhaseContainer.textContent = json.ephemeride.moon_phase;

			let SunriseContainer = document.createElement('div');
			SunriseContainer.setAttribute('id', 'sunrise');
			SunriseContainer.textContent = 'aurore : ' + json.ephemeride.sunrise;


			let SunsetContainer = document.createElement('div');
			SunsetContainer.setAttribute('id', 'sunset');
			SunsetContainer.textContent = 'crépuscule : ' + json.ephemeride.sunset;
			
			

			ephemerideContainer.appendChild(moonPhaseContainer);
			ephemerideContainer.appendChild(SunriseContainer);
			ephemerideContainer.appendChild(SunsetContainer);

		})
}