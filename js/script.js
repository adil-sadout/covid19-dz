var api_url_global_stats = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php"
// var api_url_algeria_stats = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=algeria"
var api_url_algeria_stats2 = "https://corona.lmao.ninja/countries/algeria"



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
getCovidGlobalStats();

// async function getCovidAlgeriaStats(){
// 		const response = await fetch(api_url_algeria_stats, {
// 			"method": "GET",
// 			"headers": {
// 				"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
// 				"x-rapidapi-key": "95164ec703msh88844cc1f0d8036p1ea4dfjsnf5e6e08f6b94"
// 			}
// 		})

// 		const data1 =await response.json();
// 		const {data} = data1
// 		console.log(data.covid19Stats[104]);
// 		document.getElementById('number4').textContent = data.covid19Stats[104].confirmed;
// 		document.getElementById('number5').textContent = data.covid19Stats[104].deaths;
// 		document.getElementById('number6').textContent = data.covid19Stats[104].recovered;
		

// }

async function getCovidAlgeriaStats(){
		const response = await fetch(api_url_algeria_stats2)

		const data1 =await response.json();

		const {cases,deaths,recovered} = data1;
		document.getElementById('number4').textContent = cases;
		document.getElementById('number5').textContent = deaths;
		document.getElementById('number6').textContent = recovered;
		

}









getCovidAlgeriaStats();

