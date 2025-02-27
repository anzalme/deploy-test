function getWeather(){
    const get city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>`
        }
}