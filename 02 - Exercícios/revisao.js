// Exercício 1

let nome = "Alexandre";

let maiusculas = nome.toUpperCase(); 
let minusculas = nome.toLowerCase();
let inverso = nome.split('').reverse('').join('');
let AE = nome.replace("A" && "a", "e");

// Exercício 2

let a = 15;
let b = 5;

let soma = a + b;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let maior = a > b;

// Exercício 3

let idade = 70;

if(idade >= 18){
    console.log("Maior de idade")
}
else if(idade >= 65){
    console.log("Idosa")
}
else{
    console.log("Menor de idade")
}

// Exercício 4

for(i=0; i<=100; i++){
    console.log(i)
}

// Exercício 5

function dobro(x){          //dobro
    return numero = x * 2;
}
console.log(dobro(5));

function triplo(x){         //triplo
    return numero = x * 3;
}
console.log(triplo(5));

function quadrado(x){       //quadrado
    return numero = x ** 2;
}
console.log(quadrado(5));

// Exercicio 6

let numeros = [10, 20, 30, 40, 50];
numeros.push(60);
numeros.pop();
