

var valor = "I"

function mudarTela()
{
    if (document.getElementById('imc').checked) {
        document.getElementById('div-retangulo').style = "display:none"
        document.getElementById('div-circulo').style = "display:none"
        document.getElementById('div-imc').style = ""
        valor = document.getElementById('imc').value
    }
    else if(document.getElementById('retangulo').checked){
        document.getElementById('div-imc').style = "display:none"
        document.getElementById('div-circulo').style = "display:none"
        document.getElementById('div-retangulo').style = ""
        valor = document.getElementById('retangulo').value
    }
    else if (document.getElementById('circulo').checked){
        document.getElementById('div-imc').style = "display:none"
        document.getElementById('div-retangulo').style = "display:none"
        document.getElementById('div-circulo').style = ""
        valor = document.getElementById('circulo').value
    }
}

function calcular()
{   
    var resultado
    var resp

    if (valor === "I")
    {
        var altura = parseFloat(document.getElementById('input-altura').value)
        var peso = parseFloat(document.getElementById('input-peso').value)
        resultado = peso/ Math.pow(altura, 2)
        resp = "O IMC é: "
    }
    else if (valor === "R")
    {
        var altura = parseFloat(document.getElementById('input-altura-retangulo').value)
        var base = parseFloat(document.getElementById('input-base').value)
        resultado = altura * base 
        resp = "A área do quadrado é: "
    }
    else if (valor === "C") 
    {
        var pi = Math.PI 
        var raio = parseFloat(document.getElementById('input-raio-circulo').value)
        resultado = pi*Math.pow(raio, 2)
        resp = "A área do círculo é: "
    }
    if (isNaN(resultado))
    {
        alert ("preencha todos os campos!")
    }
    else {
        alert( resp + resultado)
    }
}
function controlarValores( max , min , id)
{
    var input = document.getElementById(id)

    if (input.value > max)
    {
        input.value = ""
        input.value = max 
    }
    if (input.value < min && input.value != "")
    {
        input.value = ""
        input.value = min 
    }
}
