function validarTudo() {
    var texto = document.getElementById("texto").value;
    var carater = document.getElementById("carater").value;
    var tamMin = document.getElementById("tamMin").value;

    var resultado = '';

    if (verificaChar(texto, carater)) {
        resultado += "Caráter '" + carater + "' encontrado em \"" + texto + "\"<br>";
    } else {
        resultado += "Caráter '" + carater + "' NÃO encontrado em \"" + texto + "\"<br>";
    }

    if (verificaTamanho(texto, tamMin)) {
        resultado += "Tamanho de \"" + texto + "\" é maior que " + tamMin + "<br>";
    } else {
        resultado += "Tamanho de \"" + texto + "\" NÃO é maior que " + tamMin + "<br>";
    }

    if (verificaMaiuscula(texto)) {
        resultado += "A string \"" + texto + "\" começa por maiúscula<br>";
    } else {
        resultado += "A string \"" + texto + "\" NÃO começa por maiúscula<br>";
    }

    resultado += "Contagem de caracteres: " + countChars(texto) + "<br>";
    
    document.getElementById("resultadoVal").innerHTML = resultado;
}

function verificaChar(string, char) {
    return string.indexOf(char) !== -1;
}

function verificaTamanho(string, tamanhoMin) {
    return string.length > tamanhoMin;
}

function verificaMaiuscula(string) {
    return string[0] === string[0].toUpperCase();
}

function countChars(string) {
    var counts = {};
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        counts[char] = (counts[char] || 0) + 1;
    }
    var result = '';
    for (var char in counts) {
        result += char + '-' + counts[char] + ' ';
    }
    return result.trim();
}
