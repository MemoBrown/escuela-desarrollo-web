var user = parseInt(prompt('Escoge una opcion y desafia a la maquina.\n 1 es Piedra\n 2 es Papel\n 3 es Tijera'));

var computer = function aleatorio(minimo, maximo){
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var num = computer(1, 3);

function juego(){
  if(user === num){
    document.write('Empatados!! Intenta de nuevo');
  } else if(user === 1){
    if(num === 2){
      document.write('La computadora te ha vencido!')
    } else{
      document.write('Felicidades, ganaste!')
    }
  } else if(user === 2){
    if(num === 3){
      document.write('La computadora te ha vencido!')
    }else{
      document.write('Felicidades, ganaste!')
    }
  } else if(user === 3){
    if(num === 1){
      document.write('La computadora te ha vencido!')
    }else{
      document.write('Felicidades, ganaste!')
    }
  }else{
    document.write('Ese no es una opción, intenta de nuevo')
  }
}


juego();