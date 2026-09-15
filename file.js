function iniciar(){
cajadatos=document.getElementById('cajadatos');
var boton=document.getElementById('boton');
boton.addEventListener('click', crear, false);
var boton2=document.getElementById('boton2');
//boton2.addEventListener('click', escribirarchivo, false);
window.webkiRequestFileSystem(window.PERSISTENT, 2*1024*1024, creardd, errores);
}
function creardd(sistema) {
dd=sistema.root;
}
function crear(){
var nombre=document.getElementById('entrada').value;
if(nombre!=''){dd.getDirectory(nombre, {create: true, exclusive: false}, mostrar, errores);}
}
function mostrar(entrada){
//document.getElementById('entrada').value='';
cajadatos.innerHTML='Entrada Creada!<br>';
cajadatos.innerHTML+='Nombre: '+entrada.name+'<br>';
cajadatos.innerHTML+='Ruta: '+entrada.fullPath+'<br>';
cajadatos.innerHTML+='Sistema: '+entrada.filesystem.name;
}

function escribirarchivo(){
var nombre=document.getElementById('entrada').value;
dd.getFile(nombre, {create: true, exclusive: false},function(entrada){entrada.createWriter(escribircontenido, errores);
}, errores);
}
function escribircontenido(fileWriter) {
var texto=document.getElementById('texto').value;
fileWriter.onwriteend=exito;
var blob=new WebKitBlobBuilder();
blob.append(texto);
fileWriter.write(blob.getBlob());
}
function exito(){
document.getElementById('entrada').value='';
document.getElementById('texto').value='';
cajadatos.innerHTML='Hecho!';
}


function errores(e){
alert('Error: '+e.code);
}
window.addEventListener('load', iniciar, false);
