let nombre = "Daniel";
let edad = 17;

function crearMsj(nombre, edad) {
  return `Hola ${nombre}, tienes ${edad} años.`;
}

export function mostrarMensaje(nombre, edad) {
  const mensaje = crearMsj(nombre, edad);
  console.log(mensaje);
}

mostrarMensaje(nombre, edad);
