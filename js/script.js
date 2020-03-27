/*API FOR COVID 19 DATA*/


var api_url_global_stats = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php"
var api_url_algeria_stats = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=algeria"
var api_url_algeria_wilaya = "https://api.healthdz.com/covid19/now"



async function getCovidGlobalStats(){
		const response = await fetch(api_url_global_stats, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "95164ec703msh88844cc1f0d8036p1ea4dfjsnf5e6e08f6b94"
			}
		})

		const data =await response.json();
		const{total_cases,total_deaths,total_recovered,statistic_taken_at} = data
		

		document.getElementById('number0').textContent = statistic_taken_at;
		document.getElementById('number1').textContent = total_cases;
		document.getElementById('number2').textContent = total_deaths;
		document.getElementById('number3').textContent = total_recovered;
		

}


async function getCovidAlgeriaStats(){
		const response = await fetch(api_url_algeria_stats, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key": "95164ec703msh88844cc1f0d8036p1ea4dfjsnf5e6e08f6b94"
			}
		})

		const data1 =await response.json();
		const {latest_stat_by_country} = data1;
		const data = latest_stat_by_country[0];
		document.getElementById('number4').textContent = data.total_cases;
		document.getElementById('number5').textContent = data.total_deaths;
		document.getElementById('number6').textContent = data.total_recovered;
		

}






getCovidGlobalStats();
getCovidAlgeriaStats();












/*FOR MOBILE NAVBAR*/


var mobileNavbar = document.getElementsByClassName("mobile-navbar")[0];
var width = Math.max(window.screen.width, window.innerWidth);




document.getElementById("sandwish-button").addEventListener("click", function(){

	if (mobileNavbar.style.display == "none") {

	mobileNavbar.style.display = "block";
	}
	else{
		mobileNavbar.style.display = "none";
	}

	

})














/** For Adding wilayas **/






async function getCovidAlgeriaStatsWilaya(){
	const response = await fetch(api_url_algeria_wilaya);
	const data2 =await response.json();
	console.log(data2);
	for (var i=0;i < data2.length;i++){
		createwilaya(data2[i]);
	}
}

getCovidAlgeriaStatsWilaya();



























function createwilaya(wilaya){

	table= document.getElementsByClassName("main-container__stats-wilaya__table")[0];

	classtable=["fr-case","confirmed-case","active-case","hospital-case","deaths-case","recovers-case","males-case","females-case"];

	valuetable =[wilaya.fr,wilaya.confirmed,wilaya.active,wilaya.in_hospital,wilaya.deaths,wilaya.recovers,wilaya.males,wilaya.females];

	tr = document.createElement("tr");
	for (i=0;i<classtable.length;i++){
		td=createrowwilaya(classtable[i],valuetable[i]);
		tr.appendChild(td);
	}
	table.appendChild(tr);


}

function createrowwilaya(classname,value){
	td = document.createElement("td");
	td.setAttribute("class", "wilaya__table-element td-element "+classname);
	td.textContent=value;
	return td;
}





