const apiKey="9584736b15d8f9c202f026e76e10c7aa";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search_layout input");
const searchbtn=document.querySelector(".search_layout button");
const weatherIcon=document.querySelector(".weather_icon");

async function checkweather(city_name){
   const response=await fetch(apiUrl+city_name+`&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather_information").style.display="none";
    }
    else{
        var data=await response.json();

        console.log(data);
     
        document.querySelector(".city_name").innerHTML=data.name;
        document.querySelector(".temperater").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind_speed").innerHTML=data.wind.speed+"km/h";
     
     
        if(data.weather[0].main=="Clouds"){
          weatherIcon.src="https://4.bp.blogspot.com/-22AkJ4RfDx8/U9y_noGiRSI/AAAAAAAAjf4/SeSbXunubXQ/s800/tenki_mark05_kumori.png";
        }
        else if(data.weather[0].main=="Clear"){
          weatherIcon.src="https://3.bp.blogspot.com/-mkrBojCjnlo/UNbgcX6oLbI/AAAAAAAAJPI/8NlgXtOmOkM/s1600/mark_tenki_hare_kumori.png"
        }
        else if(data.weather[0].main=="Rain"){
          weatherIcon.src="https://2.bp.blogspot.com/-04yGTd8fSnA/U9y_m5vpsrI/AAAAAAAAjfw/nVqHQN_t9g4/s800/tenki_mark03_gouu.png"
        }
        else if(data.weather[0].main=="Drizzle"){
          weatherIcon.src="https://2.bp.blogspot.com/-PIKheQW6KOE/U9y_oHUP3DI/AAAAAAAAjf8/E5p4wk0xunE/s800/tenki_mark06_kurmoriame.png"
        }
        else if(data.weather[0].main=="Mist"){
         weatherIcon.src="https://3.bp.blogspot.com/-cxYF1nh7jgQ/WOdEAeCvVEI/AAAAAAABDng/JSPTXndnhJEL5qh67Zq5N9Tz12X6svdMQCLcB/s800/yama_kiri.png"
        }
        document.querySelector(".weather_information").style.display="block";
        document.querySelector(".error").style.display="nonev"; 
    }

    

}

searchbtn.addEventListener("click",()=>{
   checkweather(searchBox.value);
})