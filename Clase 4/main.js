let numero = parseInt(prompt("ingrese el número al cual desea agregar IVA"));
let multiplicacion = (numero * 0.21);
let resultado = 0;
let espacio = " " ;


function sumar(numero1, numero2) {
    resultado = numero1 + numero2;
}
sumar(numero, multiplicacion)

alert("el resultado es " + resultado);
document.write("solicitaste ver el valor con iva de " + numero + espacio);

document.write(espacio + "tu resultado es " + resultado);