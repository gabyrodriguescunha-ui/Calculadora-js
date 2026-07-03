const prompt = require("prompt-sync")();

let a = Number(prompt("Digite um número: "));
let b = Number(prompt("Digite outro número: "));

function verificar(a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    throw new Error("Os valores devem ser números.");
  }
}
try {
  function soma(a, b) {
    verificar(a, b);
    return a + b;
  }

  function subtrair(a, b) {
    verificar(a, b);
    return a - b;
  }

  function multiplicar(a, b) {
    verificar(a, b);
    return a * b;
  }

  function dividir(a, b) {
    verificar(a, b);

    if (b === 0) {
      throw new Error("Não é possível dividir por zero.");
    }

    return a / b;
  }

  console.log("A soma é:", soma(a, b));
  console.log("A subtração é:", subtrair(a, b));
  console.log("A multiplicação é:", multiplicar(a, b));
  console.log("A divisão é:", dividir(a, b));
} catch (erro) {
  console.log("Erro:", erro.message);
}
