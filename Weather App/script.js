const apiKey="b1b2eee81c69ac540fb3b146076c9d79";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');

async function checkWeather(city){
    const response=await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display='none';
    }
    else{
        let data=await response.json();  
        
        document.querySelector('.temp').innerText=Math.round(data.main.temp)+'°C';
        document.querySelector('.city').innerText=data.name;
        document.querySelector('.humidity').innerText=data.main.humidity+'%';
        document.querySelector('.wind').innerText=data.wind.speed+' km/h';
    
        if(data.weather[0].main=="Clear"){
            document.querySelector('.weather-img').src='images/clear.png'
        }
        else if(data.weather[0].main=="Clouds"){
            document.querySelector('.weather-img').src='images/clouds.png'
        }
        else if(data.weather[0].main=="Drizzle"){
            document.querySelector('.weather-img').src='images/drizzle.png'
        }
        else if(data.weather[0].main=="Mist"){
            document.querySelector('.weather-img').src='images/mist.png'
        }
        else if(data.weather[0].main=="Rain"){
            document.querySelector('.weather-img').src='images/rain.png'
        }
        else if(data.weather[0].main=="Snow"){
            document.querySelector('.weather-img').src='images/snow.png'
        }
        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})