//PROGRAMACION DE TRANSCION DE AMBOS FORMULARIOS
const sinUpButton = document.getElementById("signUp");//re3gistro
const sinIpButton = document.getElementById("signIn");
const container = document.getElementById("container");
const boost=document.getElementById("boost");
//evento click de mostar form registro 
signUpButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible";
}
);
//mostar contraseña
function mostarsenña(){
    var tipo = document.getElementById("seña");
    if(tipo.type == "password"){
        tipo.type = "text";
    } else{
        tipo.type = "password"
    }
}
