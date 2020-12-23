keys_number = [0,1,2,3,4,5,6,7,8,9];
//Lo mismo pero en caracteres tipo string
keys_number_str = keys_number.map(key_number => (key_number).toString());
//Incorporando la , y el Backspace (Borrar)
keys_number_str.push(",");
keys_number_str.push("Backspace");


//Evento
document.getElementById("money").addEventListener("keyup", context => {

    // Este criterio es para que no se coloquen caracteres distintos a los numericos
    if (!keys_number_str.includes(context.key)){

        if(context.key != "ArrowRight" && context.key != "ArrowLeft" && context.key != "ArrowUp" && context.key != "ArrowDown"){
            var copy_value = context.target.value.split("");
            var index = copy_value.indexOf(context.key);
            copy_value.splice(index, 1);
            context.target.value = copy_value.join('');
            
        }
    }
    else {

        entero = context.target.value.split(",")[0];
        entero = entero.replace(/\D/g, "");
        decimal = context.target.value.split(",")[1];

        //Parte decimal
        var j = (entero.length > 3) ? entero.length % 3 : 0;
        entero = (j ? entero.substr(0, j) + "." : '') + entero.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ".")
        
        if (context.target.value.split("").filter(x => x == ",").length > 0){
            //String listo
            context.target.value = [entero, decimal].join(",");
        }
        else{
            //String listo
            context.target.value = entero

        }
    }
});