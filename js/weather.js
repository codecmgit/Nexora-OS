async function getWeather(){
    try{
        const response =
        await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=22.57&longitude=88.36&current_weather=true"
        );
        const data = await response.json();
        document.getElementById("weather")
        .innerText =
        `${data.current_weather.temperature}°C`;
    }catch(error){
        document.getElementById("weather")
        .innerText = "Unavailable";
    }
}
getWeather();