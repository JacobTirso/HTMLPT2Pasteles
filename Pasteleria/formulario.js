function cotizacion(){
    cubiertapastel = document.forms["cubiertap"].elements["cubierta"];
    for (i=0; i<cubiertapastel.length; i++) {
        valor = cubiertapastel[i].checked;
            if (valor == true) {
                elegido = cubiertapastel[i].value;
            }
        
    }
    alert(elegido);

}

