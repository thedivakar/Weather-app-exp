const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultcontainer = document.getElementById("result");
const apiresult = document.getElementById("api");
const coresult = document.getElementById("co");
const no2result = document.getElementById("no2");
const o3result = document.getElementById("o3");
const pm2result = document.getElementById("pm2");
const pm10result = document.getElementById("pm10");
const so2result = document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value; 
    const url = 'https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd495a4527emshbc85f3e7803ca2ap1fd275jsn5761f5d05618',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};
    fetch(url,options)
        .then(response=>response.json())
        .then(resultcontainer=>{
            let readings = result.data[0];
            console.log(readings);
            aqiResult.textContent=readings.aqi;
            coResult.textContent=readings.co;
            no2Result.textContent=readings.no2;
            o3Result.textContent=readings.o3;
            pm2Result.textContent=readings.pm2;
            pm10Result.textContent=readings.pm10;
            so2Result.textContent=readings.so2;
            result.style.display = 'flex'
        })
});