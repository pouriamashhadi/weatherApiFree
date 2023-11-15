


let citys=[
    // {
    //     id:'0',
    //     name: 'isfahan',
    //     country:'Iran',
    //     weather :'Rain',
    //     grade:'12',
    //     date:'Thursday',
    //     day:'12 Jan 2016',
    //     humidity:'12',
    //     wind:'20',
    //     img:'Isfahan.jpg',
    // },
    // {
    //     id:'1',
    //     name: 'mashhad',
    //     country:'Iran',
    //     weather :'Sun',
    //     grade:'20',
    //     date:'Thursday',
    //     day:'12 Jan 2016',
    //     humidity:'32',
    //     wind:'30',
    //     img:'mashhad.jpg',
    // },
    // {
    //     id:'2',
    //     name: 'shiraz',
    //     country:'Iran',
    //     weather :'Storm',
    //     grade:'-10',
    //     date:'Thursday',
    //     day:'12 Jan 2016',
    //     humidity:'10',
    //     wind:'15',
    //     img:'shiraz.jpg',
    // },
    // {
    //     id:'3',
    //     name: 'tehran',
    //     country:'Iran',
    //     weather :'Snow',
    //     grade:'16',
    //     date:'Thursday',
    //     day:'12 Jan 2016',
    //     humidity:'20',
    //     wind:'31',
    //     img:'tehran.jpg',
    // },
    // {
    //     id:'4',
    //     name: 'yazd',
    //     country:'Iran',
    //     weather :'Wind',
    //     grade:'12',
    //     date:'Thursday',
    //     day:'12 Jan 2016',
    //     humidity:'24',
    //     wind:'10',
    //     img:'yazd.jpg',
    // }
];


let defaultCity =["esfahan","yazd","mashhad","tehran","shiraz"]

defaultCity.forEach(city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48f44ebe6ebb42236e1a254f4c43236c`)
    .then(res=>res.json())
    .then(date=>{
        console.log(date.weather[0].description)

        var nameWeatry="";

        switch (date.weather[0].description) {
            case "clear sky":
                nameWeatry="Sun";
                break;
            
            case "few clouds":
                nameWeatry="Sun";
                break;
                case "scattered clouds":
                    nameWeatry="Sun";
                break;
                case "broken clouds":
                    nameWeatry="Wind";
                break;
                case "shower rain":
                    nameWeatry="Rain";
                break;
                case "rain":
                    nameWeatry="Rain";
                break;
                case "thunderstorm":
                    nameWeatry="Storm";
                break;
                case "snow":
                    nameWeatry="Snow";
                break;
                case "mist":
                    nameWeatry="Storm";
                break;

                default:
                    nameWeatry="Sun";
                    break;
        

        }
        

        const timeElapsed = Date.now();
const today = new Date(timeElapsed);

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


        let newCity={
            id:date.id,
            name: date.name,
            country:'Iran',
            weather :nameWeatry,
            grade:date.wind.deg,
            date: days[today.getDay()],
            day:today.toLocaleDateString(),
            humidity:date.main.humidity,
            wind:date.wind.gust,
            img:'null.jpg',
        }
        citys.push(newCity)
        return true
    })
    .then(date =>{
        
        strCity="";
    citys.forEach(function(city){
        strCity+= createCity(city);
    
    });
    boxCitys.innerHTML="";
    boxCitys.innerHTML=strCity;
    loodingDiv.style = " width: 0%;";
    looding.classList.add('hidden');
   
    }
        
    )

}); 




let icon2={
    Wind:'icon/2/wind.svg', // باد
    Snow:'icon/2/cloud-snow.svg', // برف
    Storm:'icon/2/cloud-lightning.svg', // طوفان
    Sun:'icon/2/sun.svg',// آفتاب
    Rain:'icon/2/cloud-drizzle.svg', // باران
}

let icon1={
    Wind:'icon/1/Wind.svg', // باد
    Snow:'icon/1/Snow.svg', // برف
    Storm:'icon/1/Storm.svg', // طوفان
    Sun:'icon/1/Sun.svg',// آفتاب
    Rain:'icon/1/Rain.svg', // باران
}





let $= document;
let iptSearch = $.querySelector('#iptSearch');
let boxCitys= $.querySelector('.boxCitys');
let looding = $.querySelector('.looding');
let loodingDiv = $.querySelector('.looding div');
let strCity="";
let boxShowShow = $.querySelector('.boxShow');
let boxSearchApp = $.querySelector('.searchApp');


looding.classList.remove('hidden');
    
setTimeout(function(){
    loodingDiv.style = " width: 100%;";
  },20);





iptSearch.addEventListener('keyup' , function(e){

    if(e.keyCode==13){


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${iptSearch.value.toLocaleLowerCase()}&appid=48f44ebe6ebb42236e1a254f4c43236c`)
        .then(res=>res.json())
        .then(date=>{
            console.log(date.wind.deg)
    
            var nameWeatry="";
    
            switch (date.weather[0].main) {
                case "clear sky":
                    nameWeatry="Sun";
                    break;
                
                case "few clouds":
                    nameWeatry="Sun";
                    break;
                    case "scattered clouds":
                        nameWeatry="Sun";
                    break;
                    case "broken clouds":
                        nameWeatry="Wind";
                    break;
                    case "shower rain":
                        nameWeatry="Rain";
                    break;
                    case "rain":
                        nameWeatry="Rain";
                    break;
                    case "thunderstorm":
                        nameWeatry="Storm";
                    break;
                    case "snow":
                        nameWeatry="Snow";
                    break;
                    case "mist":
                        nameWeatry="Storm";
                    break;
            
    
            }
    
            const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    
            let newCity={
                id:date.id,
                name: date.name,
                country:'Iran',
                weather :nameWeatry,
                grade:date.wind.deg,
                date: days[today.getDay()],
                day:today.toLocaleDateString(),
                humidity:date.main.humidity,
                wind:date.wind.gust,
                img:'null.jpg',
            }
            citys.push(newCity)
            return true
        })
        .then(date =>{
            
            strCity="";
        citys.forEach(function(city){
            strCity+= createCity(city);
        
        });
        boxCitys.innerHTML="";
        boxCitys.innerHTML=strCity;
        loodingDiv.style = " width: 0%;";
        looding.classList.add('hidden');
       
        }
            
        )
    

    }
    
    boxCitys.innerHTML="";
   
    looding.classList.remove('hidden');
    
    setTimeout(function(){
        loodingDiv.style = " width: 100%;";
      },20);
    
    setTimeout(function(){

        strCity="";
        citys.forEach(function(city){
        
            if(city.name.toLocaleLowerCase().indexOf(iptSearch.value.toLocaleLowerCase()) != "-1"  ){
                strCity+= createCity(city);
                console.log(city ,iptSearch.value.toLocaleLowerCase() )
            }
    
        });

        if(strCity==""){
            strCity="<spam>The city does not exist by default!! Search and add the city using \"Enter\".</spam>"
        }

        boxCitys.innerHTML=strCity;
        
        loodingDiv.style = " width: 0%;";
        looding.classList.add('hidden');
       
  
      },1000);
    
})


function createCity(city){

return `<div class='city' onclick='showCity(\"${city.id}\")'><div class='icon'><img src='${icon2[city.weather]}' /></div><div class='name'>${city.name} <samp>${city.country}</samp></div><div class='grade'>${city.grade}°</div></div>`
}


function showCity(id){
   
   
   boxSearchApp.classList.add('hidden');

    var city = citys.filter(function(city){
        if(city.id == id){
            return city;
        }
    });
   
  
    
    boxShowShow.querySelector('.name').innerHTML=` ${city[0].name} <samp>/ ${city[0].country}</samp>`
    boxShowShow.querySelector('.grade').innerHTML= city[0].grade+"°" ;
    boxShowShow.querySelector('.grade').innerHTML= city[0].grade+"°" ;
   
    boxShowShow.querySelector('.img').setAttribute('src',icon1[city[0].weather]);
    boxShowShow.querySelector('.wind').innerHTML="Humidity"+city[0].humidity;
    boxShowShow.querySelector('.humidity').innerHTML="Wind"+city[0].wind+"Km";
    boxShowShow.classList.remove('hidden');


}

function back(){
    boxSearchApp.classList.remove('hidden');
    boxShowShow.classList.add('hidden');
}