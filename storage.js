function iniciar(){
var boton=document.getElementById('grabar');
boton.addEventListener('click', nuevoitem, false);
mostrar();
}
function nuevoitem(){
var clave=(document.getElementById('clave').value).trim();
var valor=(document.getElementById('texto').value).trim();
if (valor!= '' && clave!=''){localStorage.setItem(clave,valor);
}else alert('Campo Vacio');
mostrar();
document.getElementById('clave').value='';
document.getElementById('texto').value='';
}
function mostrar(){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
for(var f=0;f<localStorage.length;f++){
var clave=localStorage.key(f);
var valor=localStorage.getItem(clave);
cajadatos.innerHTML+='<div>'+clave+' - '+valor+'<br><button onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
}
}

/*
function mostrar(){
var cajadatos=document.getElementById('cajadatos');
cajadatos.innerHTML='';
for(var f=0;f<localStorage.length;f++){
var clave=localStorage.key(f);
var valor=localStorage.getItem(clave);
cajadatos.innerHTML+='<div>d/dx('+clave+') = '+valor+'<div onclick="eliminar("'+clave+');">Eliminar</div></div>';
}
}
*/

function eliminar(clave){
if(confirm('Esta Seguro?')){ localStorage.removeItem(clave);
mostrar();
}
}

function eliminarTodo(){if(confirm('Esta Seguro?')){
localStorage.clear();
mostrar();
}
}
window.addEventListener('load', iniciar, false);