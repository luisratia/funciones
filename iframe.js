function iniciar(){
window.addEventListener('message', receptor, false);
}
function receptor(e){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='mensaje desde: '+e.origin+'<br>';
cajadatos.innerHTML+='mensaje: '+e.data;
}
window.addEventListener('load', iniciar, false);