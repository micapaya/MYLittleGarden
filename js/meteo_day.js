function load_meteo_day(obj){
	let gets=[]
	for (let i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}	
	
	let url = "https://api.meteo-concept.com/api/forecast/nextHours?token=MON_TOKEN&insee=62498";
	fetch(url)
		.then(response => response.json())
		.then(json => {
			console.log(json);
			const tempdayContainer = document.getElementById('tempDay');
			let Daytemp = json.forecast[0].temp2m;
			let currentTempDay = document.createElement('div');
			currentTempDay.setAttribute('id', 'temp');
			currentTempDay.textContent = Daytemp + '°C';


			tempdayContainer.appendChild(currentTempDay);



			
		})
}	