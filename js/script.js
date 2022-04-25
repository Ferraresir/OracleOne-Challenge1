var text = document.querySelector("#input-text");
var result = document.querySelector("#msg");
var copybtn = document.querySelector("#btn-copy");
var btnencrypt = document.querySelector(".btn-cod");
var btndecrypt = document.querySelector(".btn-dec");
var msj = document.querySelector("#input-text").value;

btndecrypt.addEventListener("click", function () {
  var msj = document.querySelector("#input-text").value;
  console.log(desencriptar(msj));
});

btnencrypt.addEventListener("click", function () {
  var msj = document.querySelector("#input-text").value;
  result.value = encriptar(msj);
  console.log(encriptar(msj));
});

copybtn.addEventListener("click", function () {
  navigator.clipboard.writeText(result.value);
});

function encriptar(msj) {
  var encripted = msj
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufar");
  return encripted;
}

function desencriptar(msj) {
  var decripted = msj
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufar", "u");
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
