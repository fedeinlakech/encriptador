let output = document.querySelector("#output");

let botonEncriptar = document.querySelector(".boton-encriptar");
let botonDesencriptar = document.querySelector(".boton-desencriptar");
let botonCopiar = document.querySelector(".boton-copiar");

let antesEncriptar = document.querySelector(".antes-encriptar");
let despuesEncriptar = document.querySelector(".despues-encriptar");


function encriptar(texto) {
    let reemplazo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < reemplazo.length; i++) {
        texto = texto.replaceAll(reemplazo[i][0], reemplazo[i][1]);
    }
    return texto;
}

function desencriptar(texto) {
    let reemplazo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < reemplazo.length; i++) {
        texto = texto.replaceAll(reemplazo[i][0], reemplazo[i][1]);
    }
    return texto;
}

botonEncriptar.addEventListener("click", () => {
    let datosIngreso = document.querySelector("#input");
    let textoDesencriptado = encriptar(datosIngreso.value);
    despuesEncriptar.style.display = "block";
    antesEncriptar.style.display = "none";
    output.value = textoDesencriptado;
})

botonDesencriptar.addEventListener("click", () => {
    let datosIngreso = document.querySelector("#input");
    let textoEncriptado = desencriptar(datosIngreso.value);
    output.value = textoEncriptado;
})

botonCopiar.addEventListener("click", () => {
    let copyText = output;
    copyText.select();
    document.execCommand("copy");
    alert("contenido copiado al portapapeles")    
})