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