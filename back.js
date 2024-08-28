function encriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco= document.getElementById("muñeco");
    
    let textocifrado = texto
     .replace(/a/gi,"aka")
     .replace(/e/gi,"enter")
     .replace(/i/gi,"imes")
     .replace(/o/gi,"ober")
     .replace(/u/gi,"ufat");

    if (texto.length !=0) {
        document.getElementById("texto").value = textocifrado;
        titulomensaje.textContent="Texto encriptado con exito.";
        parrafo.textContent="";
        muñeco.src="./img/encriptado.png";
    } else {
        muñeco.src="./img/muñeco.png";
        titulomensaje.textContent="Ningun Mensaje Fue Encontrado.";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar.";
        alert("Debes ingresar algun texto");
    }

}

function desencriptar (){
 let texto = document.getElementById("texto").value;
 let titulomensaje = document.getElementById("titulo-mensaje");
 let parrafo = document.getElementById("parrafo");
 let muñeco= document.getElementById("muñeco");
 
   let textocifrado = texto
     .replace(/aka/gi,"a")
     .replace(/enter/gi,"e")
     .replace(/imes/gi,"i")
     .replace(/ober/gi,"o")
     .replace(/ufat/gi,"u");
    if (texto.length !=0) {
        document.getElementById("texto").value = textocifrado;
        titulomensaje.textContent="Texto desencriptado con exito.";
        parrafo.textContent="";
        muñeco.src="./img/desencriptado.png";
    } else {
        muñeco.src="./img/muñeco.png";
        titulomensaje.textContent="Ningun Mensaje Fue Encontrado.";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar.";
        alert("Debes ingresar algun texto");
    }

}
function copiar() {

    let contenido = document.getElementById("texto").value;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}
document.addEventListener('DOMContentLoaded', () => {
    const btncopiar = document.querySelector(".btn-copiar");
    if (btncopiar) {
        btncopiar.addEventListener("click", copiar);
    } else {
        console.error("Botón copiar no encontrado");
    }
})

