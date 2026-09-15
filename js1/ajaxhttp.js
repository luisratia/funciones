function descargaArchivo() {
// Obtener la instancia del objeto XMLHttpRequest
if(window.XMLHttpRequest) {
peticion_http = new XMLHttpRequest();
}
else if(window.ActiveXObject) {
peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
}
return peticion_http;
}

