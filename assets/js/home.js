let btrefresh = document.querySelector("#refresh");
let btContinuar = document.querySelector("#continuar");
let btLogout = document.querySelector("#logout");
let reiniciar;


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


function counter(){
    let  counter = 600
      
       reiniciar = setInterval(() => {
            counter--;
            document.getElementById("counter").innerHTML = counter;

            if (counter == 0){
                clearTimeout(counter);
                window.location.href = "/../index.html";
            }
           
        }, 1000);
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
        }
        
})

btContinuar.addEventListener("click", function(){
    window.location.href = "https://www.compass.uol/";
})
