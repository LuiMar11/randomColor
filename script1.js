let colorPicker;
const defaultColor = '#FFFFFF';

window.addEventListener('load', startup, false);

function startup() {
  colorPicker = document.querySelector('#color');
  colorPicker.value = defaultColor;
  colorPicker.addEventListener('input', updateFirst, false);
  colorPicker.select();
  generarNuevoColor();
}

function updateFirst(event) {
  hex = document.getElementById('hex');
  hex.innerHTML = event.target.value;
}

function generarNuevoColor() {
  colorPicker = document.querySelector('#color');
  colorPicker.value = defaultColor;
  document.getElementById('porcentaje').innerHTML = '';
  document.getElementById('hex').innerHTML = '';
  var simbolos, color;
  simbolos = '0123456789ABCDEF';
  color = '#';

  for (var i = 0; i < 6; i++) {
    color = color + simbolos[Math.floor(Math.random() * 16)];
  }
  elem = document.getElementById('randomColor');
  elem.style.background = color;
  hexa = document.getElementById('hexa');
  hexa.innerHTML = color;
}

function hexToRGB(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return { r, g, b };
}

function comparar() {
  color1 = document.getElementById('hexa').textContent;
  color2 = document.getElementById('hex').textContent;
  var rgb1 = hexToRGB(color1);
  var rgb2 = hexToRGB(color2);

  var diffR = Math.abs(rgb1.r - rgb2.r);
  var diffG = Math.abs(rgb1.g - rgb2.g);
  var diffB = Math.abs(rgb1.b - rgb2.b);

  var totalDiff = (diffR + diffG + diffB) / 3;
  var porcentaje = 100 - (totalDiff / 255) * 100;

  document.getElementById('porcentaje').innerHTML =
    'Tienen un ' + porcentaje.toFixed(2) + '% de parecido';
}
