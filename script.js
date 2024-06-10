// ejercicio1
const ej1 = document.getElementById("ej1");
let ejArray = []; 
ej1.addEventListener("click",()=>{
    for (let i = 1; i<=10; i++){
        if(i!== 5){
            let multEj1 = i*5;
            ejArray.push(multEj1);
        }
    }

    let mensaje = `La tabla de multiplicar del 5, excluyendo el 5, es: ${ejArray.join(", ")}`

    alert(mensaje)

})


// ejercicio 2
const ej2 = document.getElementById("ej2");

ej2.addEventListener("click",()=>{
    let n1 = parseInt(prompt("Ingrese numero 1"));
    let n2 = parseInt(prompt("Ingrese numero 2"));

    if (typeof n1 === 'number' && typeof n2 === 'number' ){
        if(n1 > n2){
            alert("El numero: " + n1 + " es el numero mayor");
        } else if (n1<n2){
            alert (`El numero: ${n2} es el numero mayor`);
        } else if (n1 == n2){
            alert (`Ambos numeros son iguales`)
        }
    }
    else{
        alert ("Valor o valores ingresados incorrectos")
    }
})

//ejercicio 3


const numEj3 = document.getElementById("ej3");
numEj3.addEventListener("click",()=>{
    
    const numElegidoj3 = parseInt(prompt("Ingrese un numero:"))
    if (numElegidoj3 %2 === 0){
        alert(`El numero ${numElegidoj3} es PAR`)
    } else {
        alert (`El numero ${numElegidoj3} es IMPAR`)
    }

})


//ejercicio 4

const numEj4 = document.getElementById("ej4")
const cantNumEj4 = [];

numEj4.addEventListener("click",()=>{
    let cantNumEj4Ingresado = parseInt(prompt("Ingrese cantidad de numeros (maximo 10) que querrá ingresar: "))
    if (cantNumEj4Ingresado <= 10) {        
        for(let i = 0; i<=(cantNumEj4Ingresado - 1); i++){
            let numEj4Eleg = parseInt(prompt("Ingrese un numero: "))
            cantNumEj4.push(numEj4Eleg);
        }
        let eleccionEj4 = parseInt(prompt("Elija si quiere (1)-Sumar o (2)-Multiplicar"))
        if(eleccionEj4 == 1 || eleccionEj4 == 2){
            if (eleccionEj4 == 1){
                let suma = 0;
                for (let i = 0; i<cantNumEj4.length; i ++ ){
                    suma += cantNumEj4[i];
                }
                alert(`El resultado de la suma es: ${suma}`)
            } else {
                let multiplicacion = 1;
                for(let i=0; i<cantNumEj4.length; i++){
                    multiplicacion *= cantNumEj4[i];
                }
                alert(`El resultado de su producto es: ${multiplicacion}`)
            }
       } else {
        alert("Ha elegido una opcion invalida")
       }
    } else {
        alert("Ha ingresado un valor incorrecto o mayo a 10")
    }
})
