//Variáveis e Seleção de elementos
let usuario = document.querySelector("#input_usuario")
let senha = document.querySelector("#input_senha")
let btContinuar = document.querySelector("#bt_continuar")

let acesso = [{
    
}]


//Funções

function digitar(){

    document.getElementById("erro").style.visibility = "hidden";
    document.getElementById("icone_usuario").style.marginLeft = "635px";
    document.getElementById("icone_senha").style.marginLeft = "635px";

}

function atualizar(){
    usuario.value = ""
    senha.value = ""
    document.getElementById("erro").style.visibility = "hidden";
    document.getElementById("input_usuario").style.border = "1px solid var(--branco)"
    document.getElementById("input_senha").style.border = "1px solid var(--branco)"
    document.getElementById("icone_usuario").style.marginLeft = "710px";
    document.getElementById("icone_senha").style.marginLeft = "710px";
}



//Eventos
btContinuar.addEventListener("click", function(){
       
    if(usuario.value != "" && senha.value != ""){
        acesso = {
            usuario: usuario.value,
            senha: senha.value,
        }

        localStorage.setItem("acesso", JSON.stringify(acesso));
                     
        window.location.href = "../assets/pages/home.html";

    }else{
        document.getElementById("erro").style.visibility = "visible";
        document.getElementById("input_usuario").style.border = "1px solid #E9B425"
        document.getElementById("input_senha").style.border = "1px solid #E9B425"
        
    }
})


