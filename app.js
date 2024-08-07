
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

-Debe funcionar solo con letras minúsculas
-No deben ser utilizados letras con acentos ni caracteres especiales
-Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada 
 para su versión original.
*/


var btnEncriptar=document.getElementById("idDesencriptado");
var taDesencriptado=document.getElementById("textAreaDesencriptado")
var txtTA1=document.getElementById("textArea");
var txtTA2=document.getElementById("textArea2");
var aux="";

taDesencriptado.style.display = "none";

///Cambio de section a textarea 
function cambioPantallaDesencriptado() {
    guardarLetras();
    btnEncriptar.style.display="none";
    taDesencriptado.style.display="block";
    

  }

  function desencriptarTXT(){
    desencriptar();
    btnEncriptar.style.display="none";
    taDesencriptado.style.display="block";
  }


////PLACEHOLDER DE TEXTAREA
const textarea=document.getElementById('textArea');
textarea.addEventListener('focus', () => {
    if (textarea.value === '') {
        textarea.placeholder = '';
    }
});
textarea.addEventListener('blur', () => {
    if (textarea.value === '') {
        textarea.placeholder = 'Ingrese un texto';
    }
});
////////////////////////////
document.getElementById('textArea').addEventListener('input', function(event) {
    let originalText = event.target.value;
    let validText = originalText.replace(/[^a-z\s]/g, '');

    // Verifica si se ingresaron caracteres inválidos
    if (originalText !== validText) {
        alert('No se deben ingresar mayúsculas o caracteres especiales');
    }

    // Actualiza el contenido del textarea con el texto validado
    event.target.value = validText;
})
///DESENCRIPTAR
function desencriptar(){
     // Obtiene el texto del textarea
     let texto = txtTA1.value;
     
            
     // Reemplaza las palabras por vocales usando expresiones regulares
     let textoRestaurado = texto;
     for (let palabra in restauraciones) {
         let regex = new RegExp(palabra, 'g');
         textoRestaurado = textoRestaurado.replace(regex, restauraciones[palabra]);
     }
     txtTA2.value=textoRestaurado;
}
//////

//////ENCRIPTAR Y DESENCRIPTAR
const reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};
const restauraciones = {};
        for (let vocal in reemplazos) {
            restauraciones[reemplazos[vocal]] = vocal;
        }
function guardarLetras(){
    let texto=txtTA1.value;
    let arrayLetras=texto.split('');
    let reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',

    };

    let arrayReemplazado = arrayLetras.map(letra => {
        return reemplazos[letra] || letra;
    });
    let textoReemplazado = arrayReemplazado.join('');

    txtTA2.value=textoReemplazado;

    
}

function copyToClipboard() {
    var textToCopy = document.getElementById("textArea2").value;
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Texto copiado');
    }).catch(function(error) {
        alert('No se pudo capturar el texto ', error);
    });
}

/*
    if (btnEncriptar.style.display==="none") {
        btnEncriptar.style.display="block";
        taDesencriptado.style.display="none";
    }else{
        taDesencriptado.style.display="block";
        btnEncriptar.style.display="none"; 
    }
*/