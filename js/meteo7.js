const Weathers = new Array(
							'img/icon_weather/sun0.svg',
							'img/icon_weather/cloud1.svg',
							'img/icon_weather/voil2.svg',
							'img/icon_weather/cloud3.svg',
							'img/icon_weather/cloud4.svg',
							'img/icon_weather/couvert5.svg',
							'img/icon_weather/brouillard6.svg',
							'img/icon_weather/brouillard7.svg',
							'img/icon_weather/pluie10.svg',
							'img/icon_weather/pluie11.svg',
							'img/icon_weather/pluie12.svg',
							'img/icon_weather/pluie13.svg',
							'img/icon_weather/pluie14.svg',
							'img/icon_weather/pluie15.svg',
							'img/icon_weather/bruine16.svg',
							'img/icon_weather/neige20.svg',
							'img/icon_weather/neige21.svg',
							'img/icon_weather/neige22.svg',
							'img/icon_weather/pn30.svg',
							'img/icon_weather/pn31.svg',
							'img/icon_weather/pn32.svg',
							'img/icon_weather/orage.svg',
							'img/icon_weather/oragegrele.svg',
							);








function load_meteo7(obj){
	let gets=[]
	for (let i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}	
	
	var url = "https://api.meteo-concept.com/api/forecast/daily?token=MON_TOKEN&insee=62498";
	fetch(url)
		.then(response => response.json())
		.then(json => {
			console.log(json)
			for (let i = 1; i < (json.forecast.length-6); i++) {
				
				
				let datetimeContent = document.createElement('span');
				datetimeContent.setAttribute('class', 'date');
				datetimeContent.textContent = json.forecast[i].datetime.substring(8, 10) 
											+ json.forecast[i].datetime.substring(4, 8)
											+ json.forecast[i].datetime.substring(2, 4);

				let containerTempMinMax = document.createElement('div');
				containerTempMinMax.setAttribute('class', 'temp_minmax_container');

				let weather = document.createElement('img');
				weather.setAttribute('class', 'WeatherIcons');
				let codeWeather = json.forecast[i].weather;
					if (codeWeather == '0' ){
						weather.setAttribute('src', Weathers[0]);
					}
					if (codeWeather == '1' ){
						weather.setAttribute('src', Weathers[1]);
					}
					if (codeWeather == '2' ){
						weather.setAttribute('src', Weathers[2]);
					}
					if (codeWeather == '3' ){
						weather.setAttribute('src', Weathers[3]);
					}
					if (codeWeather == '4' ){
						weather.setAttribute('src', Weathers[4]);
					}
					if (codeWeather == '5' ){
						weather.setAttribute('src', Weathers[5]);
					}
					if (codeWeather == '6' ){
						weather.setAttribute('src', Weathers[6]);
					}
					if (codeWeather == '7' ){
						weather.setAttribute('src', Weathers[7]);
					}
					if (codeWeather == '10' || 
						codeWeather == '40' || 
						codeWeather == '43' ||
						codeWeather == '46'){
						weather.setAttribute('src', Weathers[8]);
					}
					if (codeWeather == '11' || 
						codeWeather == '41' || 
						codeWeather == '44' || 
						codeWeather == '47'){
						weather.setAttribute('src', Weathers[9]);
					}
					if (codeWeather == '12' || 
						codeWeather == '42' || 
						codeWeather == '45' || 
						codeWeather == '48'){
						weather.setAttribute('src', Weathers[10]);
					}
					if (codeWeather == '13' ){
						weather.setAttribute('src', Weathers[11]);
					}
					if (codeWeather == '14' ){
						weather.setAttribute('src', Weathers[12]);
					}
					if (codeWeather == '15' ){
						weather.setAttribute('src', Weathers[13]);
					}
					if (codeWeather == '16' ){
						weather.setAttribute('src', Weathers[14]);
					}
					if (codeWeather == '20' || 
						codeWeather == '63' || 
						codeWeather == '66'){
						weather.setAttribute('src', Weathers[15]);
					}
					if (codeWeather == '21' || 
						codeWeather == '64' || 
						codeWeather == '67'){
						weather.setAttribute('src', Weathers[16]);
					}
					if (codeWeather == '22' || 
						codeWeather == '65' || 
						codeWeather == '68'){
						weather.setAttribute('src', Weathers[17]);
					}
					if (codeWeather == '30' || 
						codeWeather == '70' || 
						codeWeather == '73' || 
						codeWeather == '76'){
						weather.setAttribute('src', Weathers[18]);
					}
					if (codeWeather == '31' || 
						codeWeather == '71' || 
						codeWeather == '74' || 
						codeWeather == '77'){
						weather.setAttribute('src', Weathers[19]);
					}
					if (codeWeather == '32' || 
						codeWeather == '72' || 
						codeWeather == '75' || 
						codeWeather == '78'){
						weather.setAttribute('src', Weathers[20]);
					}
					if (codeWeather == '100' || 
						codeWeather == '101' || 
						codeWeather == '102' || 
						codeWeather == '103' || 
						codeWeather == '104' || 
						codeWeather == '105' ||
						codeWeather == '106' || 
						codeWeather == '107' || 
						codeWeather == '108'  ){
						weather.setAttribute('src', Weathers[21]);
					}
					if (codeWeather > 109 && codeWeather < 139 ) {
						weather.setAttribute('src', Weathers[22]);
					}


				let tempMax = document.createElement('span');
				let tempMin = document.createElement('span');
				tempMax.setAttribute('class', 'maxTemp');
				tempMin.setAttribute('class', 'minTemp');
				tempMax.textContent = json.forecast[i].tmax + '°C'
				tempMin.textContent = json.forecast[i].tmin + '°C';

				tempMinValue.push(json.forecast[i].tmin);


				let tempDay = document.getElementById('tempMinMaxDay');
				tempDay.textContent = json.forecast[0].tmax + '°C  | ' + json.forecast[0].tmin + '°C'



				meteoContainer.appendChild(datetimeContent);
				meteoContainer.appendChild(containerTempMinMax);
				containerTempMinMax.appendChild(weather);
				containerTempMinMax.appendChild(tempMax);
				containerTempMinMax.appendChild(tempMin);
				

				
		    // let temperature = document.createElement('div');
		    // temperature.textContent = json.forecast[i].tmax;
		   
			}
			
getPlants();
			
			})

}

