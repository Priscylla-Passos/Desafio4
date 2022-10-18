//variaveis e seleção de elementos

let btrefresh = document.querySelector("#refresh");
let btContinuar = document.querySelector("#continuar");
let btLogout = document.querySelector("#logout");
let popup = document.querySelector('#pop-up');
let reiniciar;

//funções cabeçalho - home
function mostrarHora(){
    let tempo = new Date();
    let hora = tempo.getHours();
    let minutos = tempo.getMinutes();

    if (hora < 10)
        hora = "0"+hora;
    if (minutos < 10)
        minutos = "0"+minutos;

    let tempoReal = hora+":"+minutos;

    document.getElementById("horario").innerHTML = tempoReal;
}

function iniciarTempo(){
    setInterval(mostrarHora, 1000);
    setInterval(mostrarData);
}

function mostrarData(){
    let ocasiao = new Date();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let ano = ocasiao.getFullYear();
    let mes = meses[ocasiao.getMonth()];
    let data = ocasiao.getDate();
    
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let dia = dias[ocasiao.getDay()];

    if (data < 10)
        data = "0"+data;

    document.getElementById("data").innerHTML = dia+", "+ data+" de "+mes+" de "+ano;
}

//variaveis e funções do clima - cabeçalho - home
 const cidade = document.querySelector("#cidade");
 const estado = document.querySelector("#estado");
 const temperatura = document.querySelector("#temperatura");
 const img = document.querySelector("#icone");
 const descricao = document.querySelector("#descricao");
 const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
 const API_KEY = 'b8f12326610be2e8c397b436b56f7464';
 const UNITS = 'metric';
 
 
 navigator.geolocation.getCurrentPosition(loadUrl);
 
 function loadUrl(pos) {
   let lat = pos.coords.latitude;
   let long = pos.coords.longitude;
   let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}&lang=pt_br`;
   fetchApi(url);
   let url_estado = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-12.9704&lon=-38.5124`;
   fetchApiEstado(url_estado);
    
 };
 
 async function fetchApi(url) {
    let response = await fetch(url);
    let { main, weather } = await response.json();
    let temperature = parseInt(main.temp);
    temperatura.innerText = `${temperature} ºC`;
   
    img.setAttribute("src", `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);

 }

 async function fetchApiEstado(url_estado) {
    let response = await fetch(url_estado);
    let { address } = await response.json();
    cidade.innerText = `${address.city}`; 
    estado.innerText =`${address.state}`;

   
   
   

 }

 
 //Funções do footer
function counter(){
    
    let  counter = 600;
      
       reiniciar = setInterval(() => {
            counter--;
            document.getElementById("counter").innerHTML = counter;

            if (counter == 0){
                clearInterval(reiniciar);
                confirmar();
            }
                  
        }, 1000);
}

function confirmar(){
    let texto = "Deseja permanecer Logado?";

    if (confirm(texto) == true){
        counter();
    }else{
        window.location.href = "/../index.html";
    }
}



btrefresh.addEventListener("click", function(){
    clearInterval(reiniciar);
    counter();
})

btLogout.addEventListener("click", function(){
    var resultado = confirm("Deseja realmente Sair ?");
        if (resultado == true) {
            localStorage.clear();
            window.location.assign("/index.html");   
        }else{
            clearInterval(reiniciar);
            counter();
        }
        
})

btContinuar.addEventListener("click", function(){
    window.location.href = "https://www.compass.uol/";
})

