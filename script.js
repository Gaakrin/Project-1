
function openFB(){
    var url="https://www.facebook.com/playnewworld";
    window.open(url, "_blank");
}
function openDB(){
    var url="https://br.nwdb.info/";
    window.open(url, "_blank");
}
function openMP(){
    var url="https://nwmarketprices.com/16";
    window.open(url, "_blank");
}
function calcular() {
var valor1 = document.getElementById("caixa1").value;
var valor2 = document.getElementById("caixa2").value;
var resultado;

if (valor1 == "" || valor2 == ""){
    document.getElementById("null").style.visibility = "visible";
    document.getElementById("erro").style.visibility = "hidden"; 
    document.getElementById("resultado").style.visibility = "hidden";
    setTimeout (function(){
    document.getElementById("null").style.visibility = "hidden";
    }, 3000);

}else if (isNaN(valor1) || isNaN(valor2)){
    document.getElementById("erro").style.visibility = "visible"; 
    document.getElementById("resultado").style.visibility = "hidden"; 
    document.getElementById("null").style.visibility = "hidden";
    setTimeout (function(){
    document.getElementById("erro").style.visibility = "hidden";
    }, 3000);

}else if (valor1 < valor2){
    resultado = (valor2-valor1)/valor1*100;

}else{
    resultado = (valor1-valor2)/valor2*100;
    
    }
    document.getElementById("resultado").textContent = "A diferença de dano é de " + resultado.toFixed(2) + "%";
    document.getElementById("resultado").style.visibility = "visible"; 
    document.getElementById("erro").style.visibility = "hidden"; 
    document.getElementById("null").style.visibility = "hidden";
    setTimeout (function(){
    document.getElementById("resultado").style.visibility = "hidden";
    }, 3000);
}