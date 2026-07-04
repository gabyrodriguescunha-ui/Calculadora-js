import promptSync from "prompt-sync";

import somar from "./somar.js";
import subtrair from "./subtrair.js";
import multiplicar from "./multiplicar.js";
import dividir from "./dividir.js";

const prompt = promptSync();

let a = Number(prompt("Digite um número: "));
let b = Number(prompt("Digite outro número: "));
function processar(a, b, callback) {
  return callback(a, b);
}

try {
  console.log("A soma é:", processar(a, b, somar));
  console.log("A subtração é:", processar(a, b, subtrair));
  console.log("A multiplicação é:", processar(a, b, multiplicar));
  console.log("A divisão é:", processar(a, b, dividir));
} catch (erro) {
  console.log("Erro:", erro.message);
}
