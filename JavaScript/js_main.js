function validador() {
  if (
    ((ascii >= 65 && ascii <= 90) ||
      ascii === 209 ||
      ascii === 32 ||
      ascii === 10) &&
    letra === letra.toLowerCase()
  ) {
  }

  return ((ascii >= 65 && ascii <= 90) ||
    ascii === 209 ||
    ascii === 32 ||
    ascii === 10) &&
    letra === letra.toLowerCase()
    ? esValido && true
    : esValido && false;
}

function Encriptar() {
  let cadena = document.getElementById("int-txt").value;

  // console.log(cadena)

  // if(patron.test(cadena)){

  let cadenaEncript = "";
  let ascii = "";
  let esValido = true;

  for (letra of cadena) {
    ascii = letra.toUpperCase().charCodeAt(0);

    // esValido = ((ascii>=65 && ascii<=90 || ascii === 209 || ascii === 32 || ascii === 10) && (letra === letra.toLowerCase())) ? esValido && true : esValido && false
    esValido =
      (192 > ascii || 221 < ascii || ascii === 209) &&
      letra === letra.toLowerCase()
        ? esValido && true
        : esValido && false;

    // console.log(letra + " " + esValido)

    if (!esValido) break;

    switch (letra) {
      case "a":
        cadenaEncript = cadenaEncript + "ai";
        break;

      case "e":
        cadenaEncript = cadenaEncript + "enter";
        break;

      case "i":
        cadenaEncript = cadenaEncript + "imes";
        break;

      case "o":
        cadenaEncript = cadenaEncript + "ober";
        break;

      case "u":
        cadenaEncript = cadenaEncript + "ufat";
        break;

      default:
        cadenaEncript = cadenaEncript + letra;
    }
  }

  // console.log(esValido)
  // console.log(cadenaEncript.length)

  if (esValido && cadenaEncript.length != 0) {
    let salidas = document.getElementById("Salidas");
    let cn_msg = document.getElementById("cn_msg");
    let sn_msg = document.getElementById("sn_msg");
    let btnCopy = document.getElementById("btn-copiar");

    salidas.style.display = "inline";
    salidas.classList.remove("Salidas-sn-msg")

    sn_msg.style.display = "none";

    cn_msg.setAttribute(
      "style",
      "font-family: 'Inter'; font-style: normal; font-weight: 400; font-size: 24px; line-height: 150%; color: #495057;"
    );

    cn_msg.innerHTML = cadenaEncript;

    // cn_msg.style.display = 'inline'

    cn_msg.style.display = "block";
    btnCopy.style.display = "inline";
  } else {
    // console.log("Incorrecto")
    if (cadena === "") {
      // console.log("VACIO")
      let salidas = document.getElementById("Salidas");
      let cn_msg = document.getElementById("cn_msg");
      let sn_msg = document.getElementById("sn_msg");
      let btnCopy = document.getElementById("btn-copiar");

      salidas.style.display = "grid";
      salidas.classList.add("Salidas-sn-msg")

      cn_msg.style.display = "none";
      cn_msg.innerHTML = "";
      btnCopy.style.display = "none";

      sn_msg.style.display = "block";
    } else {
      alert("El texto contiene caracteres invalidos!!!");
    }
  }
}

function Desencriptar() {
  let cadena = document.getElementById("int-txt").value;

  let cadenaDesncript = "";
  let ascii = "";
  let esValido = true;
  let contador = 0;

  for (letra of cadena) {
    ascii = letra.toUpperCase().charCodeAt(0);

    // esValido = ((ascii>=65 && ascii<=90 || ascii === 209 || ascii === 32 || ascii === 10) && (letra === letra.toLowerCase())) ? esValido && true : esValido && false
    esValido =
      (192 > ascii || 221 < ascii || ascii === 209) &&
      letra === letra.toLowerCase()
        ? esValido && true
        : esValido && false;

    // console.log(letra + " " + esValido)

    if (!esValido) break;

    if (contador === 0) {
      cadenaDesncript =
        letra != "a" &&
        letra != "e" &&
        letra != "i" &&
        letra != "o" &&
        letra != "u"
          ? cadenaDesncript + letra
          : cadenaDesncript + "";

      if (letra === "a") {
        cadenaDesncript = cadenaDesncript + "a";
        contador = 1;
      }
      if (letra === "e") {
        cadenaDesncript = cadenaDesncript + "e";
        contador = 4;
      }
      if (letra === "i") {
        cadenaDesncript = cadenaDesncript + "i";
        contador = 3;
      }
      if (letra === "o") {
        cadenaDesncript = cadenaDesncript + "o";
        contador = 3;
      }
      if (letra === "u") {
        cadenaDesncript = cadenaDesncript + "u";
        contador = 3;
      }
    } else {
      contador -= 1;
    }
  }

  // console.log(cadenaDesncript)

  if (esValido && cadenaDesncript.length != 0) {
    // let msg = document.getElementById("Mensaje");
    let cn_msg = document.getElementById("cn_msg");
    let sn_msg = document.getElementById("sn_msg");
    let btnCopy = document.getElementById("btn-copiar");

    sn_msg.style.display = "none";

    cn_msg.setAttribute(
      "style",
      "font-family: 'Inter'; font-style: normal; font-weight: 400; font-size: 24px; line-height: 150%; color: #495057;"
    );

    cn_msg.innerHTML = cadenaDesncript;

    cn_msg.style.display = "block";
    btnCopy.style.display = "inline";
  } else {
    // console.log("Incorrecto")
    if (cadena === "") {
      // console.log("VACIO")
      let cn_msg = document.getElementById("cn_msg");
      let sn_msg = document.getElementById("sn_msg");
      let btnCopy = document.getElementById("btn-copiar");

      btnCopy.style.display = "none";
      cn_msg.style.display = "none";
      cn_msg.style.display = "none";
      cn_msg.innerHTML = "";

      sn_msg.style.display = "block";
    } else {
      alert("El texto contiene caracteres invalidos!!!");
    }
  }
}

function Copiar() {
  let cn_msg = document.getElementById("cn_msg");

  var seleccion = document.createRange();
  seleccion.selectNodeContents(cn_msg);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  var res = document.execCommand("copy");
  window.getSelection().removeRange(seleccion);
}

// String.fromCharCode(200)
