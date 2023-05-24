function encriptarEntero(num) {
    // Convertir el número en una cadena de texto
    let strNum = num.toString();
  
    // Obtener los dígitos individuales
    let digito1 = parseInt(strNum[0]);
    let digito2 = parseInt(strNum[1]);
    let digito3 = parseInt(strNum[2]);
    let digito4 = parseInt(strNum[3]);
  
    // Encriptar los dígitos
    digito1 = (digito1 + 7) % 10;
    digito2 = (digito2 + 7) % 10;
    digito3 = (digito3 + 7) % 10;
    digito4 = (digito4 + 7) % 10;
  
    // Intercambiar los dígitos
    let temp = digito1;
    digito1 = digito3;
    digito3 = temp;
  
    temp = digito2;
    digito2 = digito4;
    digito4 = temp;
  
    // Componer el número encriptado y retornarlo
    let encriptado = parseInt(digito1.toString() + digito2.toString() + digito3.toString() + digito4.toString());
    return encriptado;
  }
  function desencriptarEntero(num) {
    // Convertir el número en una cadena de texto
    let strNum = num.toString();
  
    // Obtener los dígitos individuales
    let digito1 = parseInt(strNum[0]);
    let digito2 = parseInt(strNum[1]);
    let digito3 = parseInt(strNum[2]);
    let digito4 = parseInt(strNum[3]);
  
    // Intercambiar los dígitos de nuevo al orden original
    let temp = digito1;
    digito1 = digito3;
    digito3 = temp;
  
    temp = digito2;
    digito2 = digito4;
    digito4 = temp;
  
    // Desencriptar los dígitos
    digito1 = (digito1 + 3) % 10;
    digito2 = (digito2 + 3) % 10;
    digito3 = (digito3 + 3) % 10;
    digito4 = (digito4 + 3) % 10;
  
    // Componer el número desencriptado y retornarlo
    let desencriptado = parseInt(digito1.toString() + digito2.toString() + digito3.toString() + digito4.toString());
    return desencriptado;
  }
  function esNumeroCuatroDigitos(variable) {
    if (typeof variable === 'number' && Number.isInteger(variable) && variable >= 1000 && variable <= 9999) {
      return true;
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

    // Obtener referencia al campo de entrada
    const numeroInput1 = document.getElementById('numeroInput1');
    const numeroInput2 = document.getElementById('numeroInput2');
    const contenido1 = document.getElementById('contenido1');
    const copiarBoton1 = document.getElementById('copiarBoton1')
    const contenido2 = document.getElementById('contenido2');
    const copiarBoton2 = document.getElementById('copiarBoton2')
    // Agregar un evento de escucha al campo de entrada1
    numeroInput1.addEventListener('input', function() {
      // Obtener el valor ingresado
      const numero = parseInt(numeroInput1.value);
      const Element = document.createElement("h3");
        if (esNumeroCuatroDigitos(numero)){
            Element.textContent = encriptarEntero(numero);
            const contenido1 = document.getElementById('contenido1');
            const copiarBoton1 = document.getElementById('copiarBoton1')

        }else{
            Element.textContent = "ingrese numero entero de cuatro digitos";

        }
        // Agregar el elemento h1 al documento HTML
        const contenidoDiv = document.getElementById("contenido1");
        contenidoDiv.innerHTML = '';
        contenidoDiv.appendChild(Element);

    });
    copiarBoton1.addEventListener('click', function() {
        const textoEncriptado = contenido1.textContent;
        copiarTextoAlPortapapeles(textoEncriptado);
    });

    // Agregar un evento de escucha al campo de entrada2
    numeroInput2.addEventListener('input', function() {
        // Obtener el valor ingresado
        const numero = parseInt(numeroInput2.value);
        const Element = document.createElement("h3");
        
          if (esNumeroCuatroDigitos(numero)){
              Element.textContent = desencriptarEntero(numero);
          }else{
              Element.textContent = "ingrese numero entero de cuatro digitos";
          }
          // Agregar el elemento h1 al documento HTML
          const contenidoDiv = document.getElementById("contenido2");
          contenidoDiv.innerHTML = '';
          contenidoDiv.appendChild(Element);
  
      });
  
      copiarBoton2.addEventListener('click', function() {
        const textoEncriptado = contenido2.textContent;
        copiarTextoAlPortapapeles(textoEncriptado);
    });