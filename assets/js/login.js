let usuario = document.querySelector(".principal__login-input-usuario")
let senha = document.querySelector(".principal__login-input-senha")
let btContinuar = document.querySelector(".principal__login-button")

//LocalStorage
let acesso = {
        usuario: "admin", senha: "admin",
}

function logar(){

    if(usuario.value == "admin" && senha.value == "admin"){
        // localStorage.setItem("acesso", true);
        localStorage.setItem("acesso", JSON.stringify(acesso));

        window.location.href = "../assets/pages/home.html";

    }else{
        document.getElementById("erro").style.visibility = "visible";
        document.getElementById("input_usuario").style.border = "1px solid #E9B425"
        document.getElementById("input_senha").style.border = "1px solid #E9B425"
        
    }
}

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