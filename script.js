function encriptarNumero(numero) {
  // Convertir el número en una cadena de texto y asegurar que tenga 4 dígitos
  let strNumero = numero.toString().padStart(4, '0');

  // Obtener los dígitos individuales
  let digito1 = parseInt(strNumero[0]);
  let digito2 = parseInt(strNumero[1]);
  let digito3 = parseInt(strNumero[2]);
  let digito4 = parseInt(strNumero[3]);

  // Encriptar los dígitos
  digito1 = (digito1 + 7) % 10;
  digito2 = (digito2 + 7) % 10;
  digito3 = (digito3 + 7) % 10;
  digito4 = (digito4 + 7) % 10;

  // Intercambiar los dígitos
  [digito1, digito3] = [digito3, digito1];
  [digito2, digito4] = [digito4, digito2];

  // Componer el número encriptado y retornarlo
  let numeroEncriptado = parseInt(digito1.toString() + digito2.toString() + digito3.toString() + digito4.toString());
  return numeroEncriptado;
}

function desencriptarNumero(numero) {
  // Convertir el número en una cadena de texto y asegurar que tenga 4 dígitos
  let strNumero = numero.toString().padStart(4, '0');

  // Obtener los dígitos individuales
  let digito1 = parseInt(strNumero[0]);
  let digito2 = parseInt(strNumero[1]);
  let digito3 = parseInt(strNumero[2]);
  let digito4 = parseInt(strNumero[3]);

  // Intercambiar los dígitos de nuevo al orden original
  [digito1, digito3] = [digito3, digito1];
  [digito2, digito4] = [digito4, digito2];

  // Desencriptar los dígitos
  digito1 = (digito1 + 3) % 10;
  digito2 = (digito2 + 3) % 10;
  digito3 = (digito3 + 3) % 10;
  digito4 = (digito4 + 3) % 10;

  // Componer el número desencriptado y retornarlo
  let numeroDesencriptado = parseInt(digito1.toString() + digito2.toString() + digito3.toString() + digito4.toString());
  return numeroDesencriptado;
}

function esNumeroCuatroDigitos(numero) {
  if (typeof numero === 'number' && Number.isInteger(numero) && numero >= 0 && numero <= 9999) {
    return numero.toString().length <= 4;
  } else {
    return false;
  }
}

function copiarTextoAlPortapapeles(texto) {
  const elementoTemporal = document.createElement('textarea');
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  document.execCommand('copy');
  document.body.removeChild(elementoTemporal);
}

// Obtener referencia al campo de entrada y otros elementos
const numeroInputEncriptar = document.getElementById('numeroInputEncriptar');
const contenidoEncriptado = document.getElementById('contenidoEncriptado');
const copiarBotonEncriptar = document.getElementById('copiarBotonEncriptar');
const numeroInputDesencriptar = document.getElementById('numeroInputDesencriptar');
const contenidoDesencriptado = document.getElementById('contenidoDesencriptado');
const copiarBotonDesencriptar = document.getElementById('copiarBotonDesencriptar');

// Agregar un evento de escucha al campo de entrada para encriptar
numeroInputEncriptar.addEventListener('input', function() {
  // Obtener el valor ingresado
  const numero = parseInt(numeroInputEncriptar.value);
  const resultado = document.createElement('h3');

  if (esNumeroCuatroDigitos(numero)) {
    resultado.textContent = encriptarNumero(numero);
  } else {
    resultado.textContent = 'Ingrese un número entero de cuatro dígitos';
  }

  contenidoEncriptado.innerHTML = '';
  contenidoEncriptado.appendChild(resultado);
});

copiarBotonEncriptar.addEventListener('click', function() {
  const textoEncriptado = contenidoEncriptado.textContent;
  copiarTextoAlPortapapeles(textoEncriptado);
});

// Agregar un evento de escucha al campo de entrada para desencriptar
numeroInputDesencriptar.addEventListener('input', function() {
  // Obtener el valor ingresado
  const numero = parseInt(numeroInputDesencriptar.value);
  const resultado = document.createElement('h3');

  if (esNumeroCuatroDigitos(numero)) {
    resultado.textContent = desencriptarNumero(numero);
  } else {
    resultado.textContent = 'Ingrese un número entero de cuatro dígitos';
  }

  contenidoDesencriptado.innerHTML = '';
  contenidoDesencriptado.appendChild(resultado);
});

copiarBotonDesencriptar.addEventListener('click', function() {
  const textoDesencriptado = contenidoDesencriptado.textContent;
  copiarTextoAlPortapapeles(textoDesencriptado);
});
