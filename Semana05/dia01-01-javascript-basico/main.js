// COMENTARIOS

// console.log('¡Hola Javascript desde un archivo externo!')

/*
  Esto
  es
  un
  comentario
  de
  múltiples
  líneas
*/

// TIPOS DE DATOS

// https://developer.mozilla.org/es/docs/Web/JavaScript
// https://lenguajejs.com/javascript/

// PRIMITIVOS: 
//   * Number (Números), String (cadena de texto), Boolean (true, false)
//   * undefined, null, BigInt, Symbol, ...

// NUMBERS, para js los enteros, decimales, son Numbers

console.log(20)
console.log(12.50)
console.log(-56)

console.log(typeof 20)     // number
console.log(typeof 12.50)  // number
console.log(typeof -56)    // number

// STRING o Cadenas de texto

console.log('Sebastian')
console.log("Sebastian")
console.log('Sebastian\'s')

console.log(typeof 'Sebastian')     // string
console.log(typeof "Sebastian")     // string
console.log(typeof 'Sebastian\'s')  // string

// BOOLEAN -> Verdadero(true) o False(false)

console.log(true)
console.log(false)

console.log(typeof true) // boolean

// UNDEFINED, lo asigna Javascript

let nombre // No hemos asignado un valor a la variable

console.log(nombre)         // undefined
console.log(typeof nombre)  // undefined

// NULL, no tiene un valor una variable

// let apellido = undefined // ❌
let apellido = null

console.log(apellido)
console.log(typeof apellido) // object❓ No usemos el typeof para verificar si el null en su lugar usemos el === Ej. apellido === null

// BigInt (Tipo de dato primitivo)
// Symbol (Tipo de dato primitivo)


// VARIABLES Y CONSTANTES

// Nos sirven para guardar datos en memoria y reutilizarlos o modificarlos durante el tiempo que nuestro programa se esté ejecutando.

// ECMASCRIPT 6 === ES6
// const, para valores fijos
// let, se usa cuando el valor cambia

// ECMASCRIPT 5 === ES5
// var -> Forma de declarar una variable pero no es recomendable su uso actualmente ❌

// CONST -> ES6 (Si es recomendable usar actualmente)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 17  // Estamos usando el estilo camelCase. Hay otros PascalCase, snake_case, kebab-case
const PI = 3.14
const nombre2 = "Victor"

// edad = 33 // ❌ Uncaught TypeError: Assignment to constant variable.
// edad-de-mi-hijo = 33 // ❌ Uncaught SyntaxError: Invalid left-hand side in assignment

console.log(edad)
console.log(edad)

// LET -> ES5 (Si es recomendable usar actualmente)

let edad2 = 35 // Nota: no es obligatorio inicializarlo

edad2 = 89    // Lo sobreescribe con el mismo tipo, number
edad2 = "36" // Lo sobreescribe con un tipo de dato nuevo, string
edad2 = true
edad2 = 87

console.log(edad2)
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(edad2 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2) // 0.5
console.log(1 % 2) // El residuo es 1 => Operador para obtener el residuo de una división
console.log(2 ** 3) // Dos elevado al cubo -> 8
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADOR DE ASIGNACIÓN (=)

const genero = 'femenino'

console.log(genero)

// OPERADORES DE COMPARACIÓN

// Operador de igualdad no estricta (==)
// Devuelve un valor boolean (true o false)
// Este operador no toma en cuenta el tipo de dato al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true ❓
console.log(1 != '1') // false ❓

// Operador de igualdad estricta (===)
// Devuelve un valor boolean (true o false)
// Este operador toma en cuenta el tipo de dato y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false ✅
console.log(1 !== '1') // true ✅

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // false -> AND (Se tienen que cumplir los dos lados de la comparación)
console.log(true && true) // true -> AND (Se tienen que cumplir los dos lados de la comparación)

console.log(true || true) // true -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)
console.log(true || false) // true -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)
console.log(false || true) // true -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)
console.log(false || false) // false -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)

console.log(!false) // true -> Negación (Transforma el valor a su contrario)

// OPERACIÓN DE CADENA (CONCATENACIÓN)

const saludo = 'Hola'
const nombreCompleto = 'Victor Villazón'
const miEdad = 39

// Hola, Victor Villazón. Tienes 39 años.
console.log(saludo + nombreCompleto + miEdad) // HolaVictor Villazón39 ❓
console.log(saludo + " " + nombreCompleto + ". Tienes " + miEdad + ' años.')

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// 2. Retornar true si un numero es menor que 40 sino devolver false
const unNumero = 28
console.log('EJERCICIO 2:', unNumero < 40)

// 3. Retornar True si un numero es menor que 60 sino devolver False
console.log('EJERCICIO 3:', 88 < 60)

// 4. Retornar True si un numero es par sino devolver False
console.log('EJERCICIO 4:', 8 % 2 === 0)

// 5. Retornar True si un numero es impar sino devolver
console.log('EJERCICIO 5:', 7 % 2 !== 0)

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura

const base = 10
const altura = 15
const area = (base * altura) / 2
console.log('EJERCICIO 6:', area)

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// CONDICIONALES (IF)

if (true) {
  // Bloque: Se ejecuta este bloque si la condición es verdadera 
}

const numero = 35

const esPar = numero % 2 === 0 // Devuelve un boolean (true o false)

if (esPar) {
  console.log('CONDICIONALES (IF)', 'Este número es par')
}

// CONDICIONALES (IF, ELSE)

if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si la condición es falsa
}

if (esPar) {
  console.log('CONDICIONALES (IF, ELSE)', 'Este número es par')
} else {
  console.log('CONDICIONALES (IF, ELSE)', 'Este número es impar')
}

// CONDICIONALES (IF, ELSE IF, ELSE)

if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (true) {
  // Se ejecuta este bloque si esta condición es verdadera
} else if (true) {
  // Se ejecuta este bloque si esta condición es verdadera
} else {
  // Se ejecuta este bloque si ninguna condición se cumple
}

let hero = 'Spiderman'

if (hero === 'Batman') {
  console.log('Hola soy Bruce')
} else if (hero === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (hero === 'Ironman') {
  console.log('Hola soy Tony')
} else { // opcional
  console.log('No eres un heroe aun :(')
}

// CONDICIONALES (SWITCH)

hero = 'Batman'

switch (hero) {
  case 'Batman':
    console.log('Hola soy Bruce')
    break
  case 'Spiderman':
    console.log('Hola soy Peter')
    break
  case 'Ironman':
    console.log('Hola soy Tony')
    break
  default: // Opcional
    console.log('No eres un heroe aun :(')
}

// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

// for (INICIALIZADOR; CONDICION; CONTADOR) { BLOQUE DE LOGICA }

for(let i = 0; i < 10; i = i + 1) {
  console.log('FOR', i)
}

// i = i + 1 -> ES EQUIVALENTE A i++ (contador)

for(let i = 0; i < 10; i++) {
  console.log('FOR2', i)
}

// WHILE

let j = 0 // INCIALIZADOR

while (j < 10) {
  console.log('WHILE', j)

  j++ // CONTADOR -> Cuidado con crear un bucle infinito si no agregan esta línea
}

// DO WHILE

let k = 0

do {
  console.log('DO-WHILE', k)

  k++
} while (k < 10)

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const edadPersona = 39

if (edadPersona >= 18) {
  console.log('EJERCICIO 1', 'Mayor de edad')
} else {
  console.log('EJERCICIO 1', 'Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1

// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
