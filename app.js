let rango_seleccion = 10
let numero_secreto = 0;
let intentos = 0;
let lista_numeros = [];

valores_iniciales();

function valores_iniciales(){
    asignar_valor_elemento ("h1","BIENVENIDO AL JUEGO");
    asignar_valor_elemento ("p",`Ingresa un número del 1 al ${rango_seleccion}`);
    numero_secreto = generar_numero_aleatorio(rango_seleccion);
    intentos = 1;
    rango = rango_seleccion;
}

function asignar_valor_elemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
}

function generar_numero_aleatorio(rango_seleccion){

    let numero_aleatorio = parseInt(Math.floor(Math.random()*rango_seleccion)+1);
    console.log (numero_aleatorio);
    console.log (lista_numeros);

    if (lista_numeros.length === rango_seleccion){
        return asignar_valor_elemento("p","Lo siento, todos los números han sido sorteados");
        }    
    else if (lista_numeros.includes(numero_aleatorio)){
        return generar_numero_aleatorio(rango_seleccion);
    }else{
        lista_numeros.push(numero_aleatorio);
        return numero_aleatorio;
    }   
}


function verificar_intento(){
    let numero_ingresado = parseInt(document.getElementById("valorUsuario").value);

    if (numero_secreto === numero_ingresado){
        asignar_valor_elemento ("p",`Felicidades, acertaste el número secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numero_secreto > numero_ingresado){
            asignar_valor_elemento ("p","Lo lamento, el número secreto es mayor");
        }else{
            asignar_valor_elemento ("p","Lo lamento, el número secreto es menor");
        }
        vaciar_caja();
    }
    intentos++;
    return;
}

function vaciar_caja(){
    document.getElementById("valorUsuario").value = "";
    return;
}

function reiniciar_juego(){
    vaciar_caja();
    valores_iniciales();
    document.getElementById("reiniciar").setAttribute("disabled",true);

}