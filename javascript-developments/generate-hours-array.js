var hora1 = 17;
var hora2 = 4;
var hora_prueba = 4; 

var tira_horas = [];
tira_horas.push(hora1);

console.log("Horas", hora1, hora2);

while(hora1 != hora2){
  hora1++;
  if(hora1 == 24){
    hora1=0;
  }
  tira_horas.push(hora1);
}
console.log(tira_horas);

if (tira_horas.includes(hora_prueba)){
  console.log("Muy bien");
}
else{
  console.log("No lo logro");
}

