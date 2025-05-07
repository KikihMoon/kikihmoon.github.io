function calcular(operacao) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado;
    
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                resultado = "Erro: Divisão por zero!";
            } else {
                resultado = num1 / num2;
            }
            break;
    }
    
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
