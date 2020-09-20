
function asignarNota(valor) {
    var cont = valor,
    cont1 = cont + 1;
   var demoId = document.querySelector('#bloque'+ cont);
   demoId.setAttribute ('style','display:none');
   var demoId2 = document.querySelector('#bloque'+ cont1);
   demoId2.removeAttribute ('style','display:none');
   demoId2.setAttribute ('style','display:block');
}
function SSvalue(severity) {
    document.getElementById("ssvalue").innerHTML = severity + "Bs";
}