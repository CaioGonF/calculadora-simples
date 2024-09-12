console.log("Teste");
operadorAtivo = false;
resultado = document.getElementById("resultado").innerHTML;
function insert(numero) {
  resultado = document.getElementById("resultado").innerHTML;
  if (resultado.length < 50) {
    console.log(resultado);
    if (resultado == "0") {
      if (
        numero == "." ||
        numero == "+" ||
        numero == "-" ||
        numero == "/" ||
        numero == "*" ||
        numero == "."
      ) {
        document.getElementById("resultado").innerHTML = resultado + numero;
        operadorAtivo = true;
      } else {
        document.getElementById("resultado").innerHTML = numero;
      }
    } else if (
      numero == "." ||
      numero == "+" ||
      numero == "-" ||
      numero == "/" ||
      numero == "*" ||
      numero == "."
    ) {
      if (operadorAtivo) {
      } else {
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
