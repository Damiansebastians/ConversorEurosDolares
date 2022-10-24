
function divisa(){

    var euro=document.conversor.euros.value;
    
    var dolar=(euro/1.02).toFixed(2);

    document.write("<br><h1>Su monto a recibir en DOLARES es: " + dolar );
}