function iniciar(){
var boton=document.getElementById('boton');
boton.addEventListener('click', enviar, false);
}
function enviar(){
var nombre=document.getElementById('nombre').value;
var iframe=document.getElementById('iframe');
iframe.contentWindow.postMessage(nombre, '*');
}
window.addEventListener('load', iniciar, false);