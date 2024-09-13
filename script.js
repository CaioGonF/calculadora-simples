operadorAtivo = false;
resultado = document.getElementById("resultado").innerHTML;

function insert(numero) {
  resultado = document.getElementById("resultado").innerHTML;

  if (resultado.length < 50) {
    console.log(resultado);

    // Se o resultado for "0", apenas substituímos o valor se o número não for um operador
    if (resultado == "0") {
      if (
        numero == "+" ||
        numero == "-" ||
        numero == "/" ||
        numero == "*" ||
        numero == "."
      ) {
        if (numero == "." && resultado.includes(".")) return; // Verifica se já tem ponto
        document.getElementById("resultado").innerHTML = resultado + numero;
        operadorAtivo = true;
      } else {
        document.getElementById("resultado").innerHTML = numero;
      }
    } else if (
      numero == "+" ||
      numero == "-" ||
      numero == "/" ||
      numero == "*" ||
      numero == "."
    ) {
      if (
        numero == "." &&
        resultado
          .split(/[\+\-\*\/]/)
          .pop()
          .includes(".")
      ) {
        return; // Impede a inserção de mais de um ponto por número
      }

      if (!operadorAtivo) {
        document.getElementById("resultado").innerHTML = resultado + numero;
        operadorAtivo = true;
      }
    } else {
      document.getElementById("resultado").innerHTML = resultado + numero;
      operadorAtivo = false;
    }
  } else {
    alert("Você atingiu o máximo de caracteres");
  }
}

function reset() {
  document.getElementById("resultado").innerHTML = "0";
}

function apagar() {
  resultado = document.getElementById("resultado").innerHTML;
  if (resultado.length <= 1) {
    document.getElementById("resultado").innerHTML = "0";
  } else {
    document.getElementById("resultado").innerHTML = resultado.substring(
      0,
      resultado.length - 1
    );
  }
}

function calcular() {
  resultado = document.getElementById("resultado").innerHTML;
  resultadoFinal = eval(resultado);
  document.getElementById("resultado").innerHTML = parseFloat(
    resultadoFinal.toFixed(4)
  );
}
