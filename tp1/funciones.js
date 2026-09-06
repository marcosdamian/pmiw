
function reset() {
  c1 = g = c2 = t = 0;
  posX = 850;
  posY = 400;
  cambiarEstado(0);
}


function cambiarEstado(nuevoEstado) {
  estadoP = nuevoEstado;
  contadorFreno = 0;
}


function cargarImagenes(INICIO, FIN, ARREGLO) {
  for (let i = INICIO; i < FIN; i++) {
    ARREGLO.push(
      loadImage("/data/nahue" + i + ".png")
    );
  }
}


function eventoCambiaEstado() {

  if (contadorFreno > 50) {
    return true;
  } else {
    return false;
  }
}
