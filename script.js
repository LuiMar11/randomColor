function hexToRGB(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  console.log({ r, g, b });
  return { r, g, b };
}

function calcularDiferencia(color1, color2) {
  // Convertir los colores a valores RGB
  var rgbColor1 = hexToRGB(color1);
  var rgbColor2 = hexToRGB(color2);

  // Calcular la diferencia absoluta entre los componentes RGB
  var diferenciaR = Math.abs(rgbColor1.r - rgbColor2.r);
  var diferenciaG = Math.abs(rgbColor1.g - rgbColor2.g);
  var diferenciaB = Math.abs(rgbColor1.b - rgbColor2.b);

  // Calcular la suma de las diferencias
  var sumaDiferencias = diferenciaR + diferenciaG + diferenciaB;

  // Calcular el porcentaje de parecido
  var maxDiferencia = 255 * 3; // La máxima diferencia posible para 3 componentes RGB
  var porcentajeParecido =
    ((maxDiferencia - sumaDiferencias) / maxDiferencia) * 100;

  return porcentajeParecido.toFixed(0); // Redondear el resultado a 2 decimales
}

// Ejemplo de uso
var color1 = '#ff0000'; // rojo
var color2 = '#ff9999'; // un tono de rojo más claro
console.log(
  'Porcentaje de parecido:',
  calcularDiferencia(color1, color2) + '%'
);
