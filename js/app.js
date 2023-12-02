let input=document.getElementById('input');
let News=document.getElementById('NewsDisplay')
input.addEventListener('keyup',function(){
    getData(this.value);
})
async function getData(a){
    let data=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    if (data.ok && 400 != data.status) {
        let x=await data.json();
        displayCurrent(x.location, x.current)
        displayAnather(x.forecast.forecastday)
    }
    
}
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function displayCurrent(a,t){
    var e = new Date(t.last_updated.replace(" ", "T"));
    let design=`
    <div class="card-items-head w-100 " style="background-color: rgba(0, 0, 0, 0.3)">
                        <div class="d-flex justify-content-between align-items-center" style="height:40px; padding-top:10px">
                            <p id="first-day">${days[e.getDay()]}</p>
                            <p id="date">${e.getDate()+" "+monthNames[e.getMonth()]}</p>
                        </div>
                    </div>
                    <div >
                        <p style="padding-left:10px" id="city">${a.name}</p>
                        <div class="d-flex justify-content-between w-75 my-4">
                            <div class="degree mx-3" style="font-size:50px; font-weight:600;">
                                <span id="first-temp">${t.temp_c}</span><sup>o</sup>C
                            </div>
                            <img id="condition-icon" src="${t.condition.icon}" style="width:70px;height:70px;margin-top:15px">
                        </div>
                        <span class="mx-3 text-info my-2 " id="first-text">${t.condition.text}</span>
                        <div class="mx-3 my-4">
                            <span class="mx-2 ">
                                <img src="../img/img/icon-umberella.png">
                                <span class="text-muted">20%</span>
                            </span>
                            <span class="mx-2 ">
                                <img src="../img/img/icon-wind (1).png">
                                <span class="text-muted">18km/h</span>
                            </span>
                            <span class="mx-2 ">
                                <img src="../img/img/icon-compass.png">
                                <span class="text-muted">East</span>
                            </span>
                        </div>
                        
                    </div>
    
    `
document.getElementById('first-child').innerHTML=design
}
function displayAnather(a){
    let desgn2='';
    for(var i=1;i<a.length;i++){
        desgn2+=`
        <div class="card-items bg-specail text-white" style="width:50%" >
                            <div class="card-items-head " style="background-color: rgba(0, 0, 0, 0.3)">
                                <div class="text-center" style="height:40px; padding:0px 10px; padding-top:10px">
                                    <p id="second-day">${days[new Date(a[i].date.replace(" ", "T")).getDay()]}</p>
                                </div>
                            </div>
                            <div class="text-center py-5">
                                <img id="second-image" src="${a[i].day.condition.icon}" style="width:50px; heigth:50px;">
                                <div class="degree mx-3 my-2" style="font-size:25px; font-weight:600;">
                                    <span >${a[i].day.maxtemp_c}</span><sup>o</sup>C
                                </div>
                                <span>
                                    <span >${a[i].day.mintemp_c}</span><sup>o</sup>
                                </span>
                                <p class="text-info my-3">${a[i].day.condition.text}</p>
                            </div>
                        </div>
        `
    }
    document.getElementById('second-child').innerHTML=desgn2
     
}
getData('USA')

var nav_link=document.querySelectorAll('.nav-item')
nav_link.forEach(x=>{
    x.addEventListener('click',()=>{
        restStyle();
        x.classList.add('active-link');
    })
})

function restStyle(){
    nav_link.forEach(x=>{
        x.classList.remove('active-link')
    })
}


// async function getDataNews(){
// await  fetch('https://newsdata.io/api/1/news?apikey=pub_33765a159c2c86757deed74558c504938a0df&country=au,us')
// .then(res => res.json())
// .then(out =>{
//     if(!out.status=="error"){
//         displayNews(out.results);
//         console.log('Checkout this JSON! ', out)
//     }else{
//         News.innerHTML="<div class='alert alert-danger m-auto w-50'>Rate limit exceeded, Please try again later</div>"
//         console.log("jkdshfksd");
//     }
//     })
// .catch(err => { throw err });
// }
// function displayNews(arr){
//     let container="";
//     for(let i=0;i<arr.length;i++){
//         container+=`
//         <div class="col-md-3">
//                         <div class="Card" >
//                         <div class="overflow-hidden">
//                             <img alt="" style="height:200px" src=${arr[i].image_url?arr[i].image_url:"data:image/png;base64,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"} class="card-img-top" alt="...">
//                         </div>
//                             <div class="card-body">
//                                 <h6 class="text-muted">${arr[i].pubDate}</h6>
//                                 <h6>Author. ${arr[i].source_id}</h6>
//                                 <h5 class="card-title"> ${truncateString(arr[i].title, 40)}</h5>
//                                 <p class="card-text">${truncateString(arr[i].description, 80)}</p>
                                
//                             </div>
//                         </div>
//                     </div>
//         `
//     }
//     News.innerHTML=container;
// }
function truncateString(inputString, maxLength) {
    if (inputString.length <= maxLength) {
      return inputString;
    } else {
      return inputString.slice(0, maxLength) + " ...";
    }
}
// getDataNews();

async function newsDetails(id){
    await  fetch('https://newsdata.io/api/1/news?apikey=pub_33765a159c2c86757deed74558c504938a0df&country=au,us')
    .then(res => res.json())
    .then(out =>{
        // displayNews(out.results[id]);
        for (let index = 0; index < out.results.length; index++) {
            if(out.results[index].article_id==id){
                console.log(out.results[index]);
            }
        }
    });
}
newsDetails("6d09a6ea5c1cd65428bd20aacf1c135f")