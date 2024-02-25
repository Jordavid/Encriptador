

function cifrar(){
    var text1 = document.getElementById('cifrarTexto');
    var textResult = text1.value;
    console.log(textResult);

    /*Verifica si  el input está vacío*/
    if(textResult == ''){
        alert('Campo requerido');
    }else{
        /*Verificar si el texto contiene letras mayúsculas o caracteres especiales*/
        if(/[A-Z]/.test(textResult) || /[^a-zA-A0-9\s]/.test(textResult)){
            alert('No se aceptan letras mayusculas, acentos ni caracteres especiales.');
        } else{
            // Remplaza la vocal por otra palabra
            var palabra = textResult.replace(/a/g,'ai');
            palabra = palabra.replace(/e/g, 'enter');
            palabra = palabra.replace(/i/g, 'imes');
            palabra = palabra.replace(/o/g, 'ober');
            palabra = palabra.replace(/u/g, 'ufat');

            console.log(palabra);

            var mensajeC = document.getElementById('descifrarTexto');
            mensajeC.value=palabra;
            limpiarText();
        }
    }

    
    return;
}

function descifrar(){
    var text1 = document.getElementById('cifrarTexto');
    var textResult = text1.value;
    console.log(textResult);

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

            console.log(palabra);

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
    } else{
        alert('No hay texto que copiar');
    }
    
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

function cifrarT(){
    cifrar();
}

function descifrarT(){
    descifrar();
}

