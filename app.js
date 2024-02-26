let campoEntrada = document.querySelector('#cifrarTexto');
let campoSalida = document.querySelector('#descifrarTexto');

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function cifrarT(){
    let text = cifrar(campoEntrada.value);
    campoSalida.value = text;
}

function cifrar(textoEncriptar){
    for(let i = 0; i < matriz_code.length; i++){
        if(textoEncriptar.includes(matriz_code[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    limpiarText();
    return textoEncriptar;
}

function descifrar(){
    var text1 = document.getElementById('cifrarTexto');
    var textResult = text1.value;

    if(textResult != ''){
        /*Verificar si el texto contiene letras mayúsculas o caracteres especiales*/
        if(/[A-Z]/.test(textResult) || /[^a-zA-A0-9\s]/.test(textResult)){
            alert('No se aceptan letras mayusculas, acentos ni caracteres especiales.');
        } else{
            var palabra = textResult.replace(/ai/g,'a');
            palabra = palabra.replace(/enter/g, 'e');
            palabra = palabra.replace(/imes/g, 'i');
            palabra = palabra.replace(/ober/g, 'o');
            palabra = palabra.replace(/ufat/g, 'u');

            var mensajeC = document.getElementById('descifrarTexto');
            mensajeC.value=palabra;
            limpiarText();
        }
    } else{
        alert('Campo requerido');
    }
        return;
}

function copiarText(){
    var text1 = document.getElementById('descifrarTexto');
    var textResult = text1.value;
    
    if(textResult !=''){
        /* Se obtine el texto del textarea */
        var content = document.getElementById('descifrarTexto');
        content.select();
        document.execCommand('copy');
        asignarTexto('p','Texto copiado al portapapeles');
        
       /* alert('Texto copiado al portapapeles');*/
    } else{
        alert('No hay texto que copiar');
    }
    return
}

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    
    // Se utiliza setTimeout para eliminar el texto luego de 2 de segundo
    setTimeout(function(){
        elementoHTML.innerHTML = '';
    }, 2000);
}

function limpiarText(){
    document.querySelector('#cifrarTexto').value='';
}


function descifrarT(){
    descifrar();
}
