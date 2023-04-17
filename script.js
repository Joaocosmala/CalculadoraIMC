
function calcular(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var resultado = (peso / (altura * altura));
    var resultado = resultado.toFixed(1);

    document.getElementById("resultado").innerHTML = "O resultado é:  " + resultado;
}