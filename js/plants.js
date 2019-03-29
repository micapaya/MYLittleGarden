let Alerts = new Array();
let UniqueAlerts = []; 

function getPlants(obj){
	let gets=[]
	for (let i in obj){
		gets.push(i+"="+encodeURIComponent(obj[i]))
	}	
	let url = "../json/plants.json"
	fetch(url)
		.then(response => response.json())
		.then(json => {
			console.log(json)

			for (let index = 0; index < json.length ; index++) {
	
					
					for (let a = 0 ; a < tempMinValue.length ; a++){
							
							
							

						if ( tempMinValue[a] < json[index].tempMini){
							Alerts.push(json[index].name);
							Alerts.forEach(function(string){
								if ( UniqueAlerts.indexOf(string) !== -1){ // un ndex de -1 signifie qu'il n'est pas présent dans l'array 
							  	// console.log(string + " is not unique ! Don't push it in new array !");
							  } else {
							  	UniqueAlerts.push(string);
							  }
							})

							console.log(UniqueAlerts);


							let alert1 = document.getElementById('alertOneContent');
							alert1.textContent = "Attention, alerte météo : " + UniqueAlerts[0];

							let alert2 = document.getElementById('alertTwoContent');
							alert2.textContent = "Attention, alerte météo : " + UniqueAlerts[1];

							let alert3 = document.getElementById('alertThreeContent');
							alert3.textContent = "Attention, alerte météo : " + UniqueAlerts[2];
							

							}

						}

					}


											
			}

					
		)

	}



