function verificar(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Os valores devem ser números.");
  }
}

export default verificar;
