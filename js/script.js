const result = document.querySelector("#msg");
const copybtn = document.querySelector("#btn-copy");
const btndecrypt = document.querySelector("#btn-dec");
const btnencrypt = document.querySelector("#btn-enc");
const msj = document.querySelector("#input-text")
const noMsg = document.querySelector(".no-msg");
const postMsg = document.querySelector(".post-msg");

function switchdisplay(){
  noMsg.style.display = "none";
  postMsg.style.display = "flex";
}

btnencrypt.addEventListener("click", function () {
  let payload = msj.value.toLowerCase()
  result.value = encriptar(payload);
  switchdisplay()
  msj.value = ""
});

btndecrypt.addEventListener("click", function () {
  let payload = msj.value.toLowerCase()
  result.value = desencriptar(payload);
  switchdisplay()
  msj.value=""
});

copybtn.addEventListener("click", function () {
  navigator.clipboard.writeText(result.value);
});

function encriptar(msj) {
  let encripted = msj
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufar");
  return encripted;
}

function desencriptar(msj) {
  let decripted = msj
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufar", "u");
  return decripted;
}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
