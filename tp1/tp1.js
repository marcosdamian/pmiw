//Marcos Damian Gonzales PMIW COMISION 2 

let fondoojo = []; //arreglo ojo
let piso = [];// arreglo piso
//arreglos nahue
let camina = [];  
let gstyle = [];  
let camina2 = []; 
let tpose = [];   
//variable para mostrar que imagen se muestra del arreglo
let c1, g, c2, t;
let estadoP;
//contador del tiempo
let contadorGeneral;

let posX, posY; //posicion del personaje nahue
let contadorFreno; //contador para que se frene el personaje 

let estadoojo; //estado del ojo
let contadorojo; //contador del ojo
//velocidad (que tan rapido los frames) y contador de animacion y velocidad de movimiento (que tan rapido va el movimiento del objeto)
let velocidadAnimacion;
let contadorAnimacion;
let velocidadMovimiento;
//duracion de cada cosa piso y fondo
let duracionFondo;
let duracionPiso;

function preload() {

  for (let i = 0; i < 3; i++) {
    fondoojo.push(
      loadImage("/data/fondo" + (i + 1) + ".png")
    );
  }
  piso.push(loadImage("/data/piso.png"));
  cargarImagenes(1, 4, camina); //funcion carga imagenes y pone nombres de cada variable 
  cargarImagenes(4, 8, gstyle);
  cargarImagenes(8, 11, camina2);
  cargarImagenes(11, 12, tpose);
}


function setup() { //setup ponemos todos los datos con los que se iniciara cada cosa 
  createCanvas(800, 600);
  
  velocidadAnimacion = 8;
  contadorAnimacion = 0;
  velocidadMovimiento = 3;

  duracionFondo = 120;
  duracionPiso = 120;

  c1 = g = c2 = t = 0;
  estadoP = 0;

  contadorGeneral = 0;
  contadorFreno = 0;

  estadoojo = 0;
  contadorojo = 0;

  posX = 850;
  posY = 400;
}

function draw() {
background(0);
contadorGeneral++;
contadorAnimacion++;
  // controla cada cuanto cambia el frame de la animacion
if (contadorAnimacion >= velocidadAnimacion) {
    contadorAnimacion = 0;
  }

if (contadorGeneral < 300) { //si contador general es menor 300 ++
    contadorojo++;
    
if (contadorojo > 10) {
      estadoojo++;
      contadorojo = 0;

if (estadoojo > 2) {
        estadoojo = 0;
      }
    }
  } 
  
else {
estadoojo = 0;
  }

if (contadorGeneral < duracionFondo) {
    let posicionFondo = map(contadorGeneral,0,duracionFondo,700,-50);
    image(fondoojo[estadoojo],posicionFondo,0,900,600);
  } 
  
else {
    image(fondoojo[0],-50,0,900,600);
 }
 
    let posicionPiso;
    if (contadorGeneral < duracionPiso) { posicionPiso = map(contadorGeneral,0,duracionPiso,800,425);
} 
else {
    posicionPiso = 425;
  }
 
 //varios pisos
image(piso[0],posicionPiso,520,800,80);
image(piso[0],posicionPiso + 800,520,800,80);
image(piso[0],posicionPiso - 800,520,800,80);

//estados del personaje
  switch (estadoP) { 
  case 0://estado 0 camina
    image(camina[c1],posX,posY,70,140);
    posX -= velocidadMovimiento;
    
    if (contadorAnimacion == 0) {
      c1++;
      if (c1 > 2) {
      c1 = 0;
      }
    }
    if (posX <= 350) {  // cambia al estado 1 cuando llega a X = 350
      cambiarEstado(1);
    }

    break;
  case 1:
    image(gstyle[g],posX,posY,80,130);
    if (contadorAnimacion == 0) {
      g++;
      if (g > 3) {
      g = 0;
      }
    }
    contadorFreno++;
    if (eventoCambiaEstado()) {
      cambiarEstado(2);
    }
    break;
  case 2:
    image(camina2[c2],posX,posY,70,140);
    posX -= velocidadMovimiento;
    if (contadorAnimacion == 0) {
      c2++;
      if (c2 > 2) {
      c2 = 0;
      }
    }
    if (posX <= 80) {
      cambiarEstado(3);
    }
    break;
  case 3:
    image(tpose[t],posX,posY,160,150);
    posY -= 8;
    t = 0;
    if (posY < -150) { //evento
      contadorGeneral = 0;
      reset();
    }
    break;
  }
}
function keyPressed() {

  if (key == 'r' || key == 'R') { //teclado reiniciar
    contadorGeneral = 0;
    reset();
  }
}
