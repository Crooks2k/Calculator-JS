//funcion para añadir el valor del numero clickeado a resultado.
function numeros(valor){
    document.getElementById("resultado").value += valor //seleccion del id del input
}

//funcion para dar el resultado =
function operacion(){
    const opera = document.getElementById("resultado").value //seleccionamos el id resultado
    if (opera == 0){ //Este codigo se ejecutara y saldra un mensaje de error si el usuario no digita nada
        document.getElementById("resultado").value = "Syntax Error"
    }
    else{ //este codigo se ejecutara si se introduce alguna operacion
        document.getElementById("resultado").value = eval(opera)
    }
}

//funcion para resetear la calculadora
function reset(){
    document.getElementById("resultado").value = ""
}

//funcion para borrar un solo espacio
function clearspace(){
    const clearspacedata = document.getElementById("resultado").value
    document.getElementById("resultado").value = clearspacedata.substr(0, clearspacedata.length -1);
}

//valor de pi
const pi = 3.14159265359