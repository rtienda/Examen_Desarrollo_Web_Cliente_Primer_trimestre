window.onload;

setTimeout(transicion,3000);
setTimeout(renosAccion,3200);


function transicion(){
    // document.getElementById("cuerpo").style.background="transparent";
    document.getElementById("cuerpo").classList.toggle('clase');

    document.getElementById("Box1").style.visibility="visible";
    document.getElementById("windowId").style.visibility="visible";
}

function renosAccion(){
    document.getElementById("renoIzq").classList.toggle('renoIzquierdaMovil');
    document.getElementById("renoDch").classList.toggle('renoDerechaMovil');
}