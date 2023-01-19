keys_number = [0,1,2,3,4,5,6,7,8,9];
//Lo mismo pero en caracteres tipo string
keys_number_str = keys_number.map(key_number => (key_number).toString());
//Incorporando la , y el Backspace (Borrar)
keys_number_str.push(",");
keys_number_str.push("Backspace");


//Evento
document.getElementById("money").addEventListener("keyup", context => {

    // Este criterio es para que no se coloquen caracteres distintos a los numericos, en caso que se coloque se elimina inmediatamente
    if (!keys_number_str.includes(context.key)){
        // Ignorando si el key es de las teclas de navegacion
        if(context.key != "ArrowRight" && context.key != "ArrowLeft" && context.key != "ArrowUp" && context.key != "ArrowDown"){
            // Buscando y eliminando el caracter no deseado del valor del input
            var copy_value = context.target.value.split("");
            var index = copy_value.indexOf(context.key);
            copy_value.splice(index, 1);
            context.target.value = copy_value.join('');
        }
    }
    else {
        
        // Obteniendo la parte entera del monto
        entero = context.target.value.split(",")[0];
        // Eliminando todos los puntos de la parte entera
        entero = entero.replace(/\D/g, "");
        // Obteniendo la parte decimal
        decimal = context.target.value.split(",")[1];

        // Formateo de la parte entera: Se establece los puntos justificados de derecha a izquierda de los miles
        var j = (entero.length > 3) ? entero.length % 3 : 0;
        entero = (j ? entero.substr(0, j) + "." : '') + entero.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ".");

        // Si existe una coma (',' parte decimal) se formatea la parte entera y decimal, si no solo la parte entera 
        if (context.target.value.split("").filter(x => x == ",").length > 0){
            // Formateando la parte entera y decimal
            context.target.value = [entero, decimal].join(",");
        }
        else{
            // Formateando solo parte entera
            context.target.value = entero;
        }
    }
});