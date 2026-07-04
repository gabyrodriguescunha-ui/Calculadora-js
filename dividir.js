import verificar from "./verificar.js";

function dividir(a, b) {
  verificar(a, b);

  if (b === 0) {
    throw new Error("Não é possível dividir por zero.");
  }

  return a / b;
}

export default dividir;
