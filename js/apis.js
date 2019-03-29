


const meteoContainer = document.getElementById('meteo_content');
const ephemerideContainer = document.getElementById('ephemeride');
const jours = new Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');
let tempMinValue = new Array(); //renvoyé par api
let tempMinValuePlant = new Array(); //renvoyé par bdd



function date_heure(id)
{
        date = new Date;
        j = date.getDate();
        jour = date.getDay();
        
        h = date.getHours();
	        if(h<10)
		        {
		        h = "0"+h;
		        }
        m = date.getMinutes();
	        if(m<10)
		        {
		        m = "0"+m;
		        }
        s = date.getSeconds();
	        if(s<10)
		        {
		        s = "0"+s;
		        }

        document.getElementById('day').textContent = jours[jour];
        document.getElementById('hours').textContent = h;
        document.getElementById('minutes').textContent = m;
        document.getElementById('secunds').textContent = s;
        setTimeout('date_heure("'+id+'");','1000');
        return true;
}

function init()   {   
                                            
	
	load_meteo_day();
	load_meteo7();
	load_eph();
	date_heure();
	

}
init();




