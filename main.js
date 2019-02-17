//Crea Array con []
const array1 = [5,9,15];
const array2 = ['pepe', 'maria', 'jose'];
const array3 = [22,35, 'lucho'];

//Construir mediante new:
const newArray1 = new Array(5,9,15);
const newArray2 = new Array('pepe', 'maria', 'jose');
const newArray3 = new Array(22,35,'lucho');

//* **Ejercicio** ¿ Qué diferencia hay entre `let e = [3]` y `let f = new Array(3)` ?
// Que e es un array con valor y posicion 0 y f es un array vacio con el valor de 3


// Global variables
const numberArrays = [1, 2, 3, 4, 5];
const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];
const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];

//**Ejercicio** Transformar el array de números 
//`const numberArrays = [1, 2, 3, 4, 5];` 
//multiplicando por 5 **( map )**
/*function multiplyNum(array){
  let newArray = array.map(num => num * 5);
  return newArray;
}
console.log(multiplyNum(numberArrays));*/

// Hace lo mismo que la funcion
//let newNumbers = numbersArrays.map(num => num * 5);


//**Ejercicio** Buscar el primer elemento mayor que 4 en el siguiente array
function hightNumber(array){
  let hight = array.find(num => num > 4);
  return hight;
}
console.log(hightNumber(numberArrays));

// Hace lo mismo que la funcion
let hight = numberArrays.find(num => num > 4);

//**Ejercicio** Buscar el primer elemento que empieze por eva en el array 
let result = miArray.find(word => word.toString().startsWith('eva'));
//let resutl = miArray.find(word => inNaN(word) && word.startsWith('eva'));
console.log(result);

//**Ejercicio** Hacer el sumatorio de un array numérico **( reduce )**:
let total = miArray.reduce((acum, num) => {
  if (typeof  num === 'Number') {
    return acum + num;
  }
  return acum;
})

//**Ejercicio** Contar el numero de elementos que son string en el siguiente array **(reduce)**:
const totalStrings = miArray.reduce((acum, el) => {
  if (isNaN(el)) {
    acum++;
  }
}, 0)


//**Ejercicio** Modificar array usando **push**.
//`const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a
//`['Manzanas', 'Peras', 'Castañas', 'Nueces']` 
arrayOriginal.push('Nueces');
console.log(arrayOriginal);


//**Ejercicio** Modificar array usando **concat**.
//`const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a
//`['Manzanas', 'Peras', 'Castañas', 'Nueces']`
let add = ['Nueces']
console.log(arrayOriginal.concat(add));


//**Ejercicio** Modificar array usando **splice**.
//`const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a
//`['Manzanas', 'Peras', 'Nueces']` 
arrayOriginal.splice(2,1,'Nueces');
console.log(arrayOriginal);

//**Ejercicio** Añadir elemento a un array usando **splice**
//`const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a
//`['Manzanas', 'Peras', 'Castañas', 'Nueces']` .
arrayOriginal.splice(3,0,'Nueces');
console.log(arrayOriginal);


// Set
// Global Variable
let fruits = new Set(['Pera', 'Manzana', 'Naranja']);

//**Ejercicio** Contruye un conjunto con tres frutas: Pera, Manzana y Naranja
console.log(fruits);

//**Ejercicio** Comprueba si Naranja esta dentro del conjunto que has creado antes.
console.log(fruits.has('Naranja'));

//**Ejercicio** Comprueba la longitud del conjunto.
console.log(fruits.size);

//**Ejercicio** Añade una Granada al conjunto.
console.log(fruits.add('Granada'));

//**Ejercicio** Crea un array con los elementos que hay en el conjunto y devuelvelo ordenados.
const array = Array.from(fruits);
array.sort();

//**Ejercicio** Borra la manzana.
console.log(fruits.delete('Manzana'));


// Maps
//**Ejercicio** Contruye una guia telefonica con los compañeros de clase. Toma como clave el
//numero de teléfono y como valor el nombre del compañero.
let phoneGuide = new Map([[111111111, 'Lucho'], [222222222, 'Irene'], [333333333, 'Edu'], [444444444, 'Javier'], [555555555, 'Alvaro']]);
console.log(phoneGuide);

const agenda = new Map();
agenda.set(654323232, 'Pepe');

//**Ejercicio** Crea una función que compruebe que un número está dentro de la guía.
//console.log(phoneGuide.has(111111111));
function checkNumber(number) {
	return agenda.has(number);
}
checkNumber(654323232);

//**Ejercicio** Crea una función que dado un nombre compruebe que la guia contiene algún 
//nombre que contenga el nombre pasado por parámetro.
//console.log(phoneGuide.has('Lucho'));
function checkName(name) {
	let checked = false;
	agenda.forEach(value =>{
  	if (value === name) {
    	checked = true;
    }
  })
  return checked;
}
//**Ejercicio** Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?
phoneGuide.set(111111111,'Casper');
console.log(phoneGuide); // Cambia mi nombre por el de Casper 

//**Ejercio** Crea un array ordenado por nombre con valores { nombre, telefono } a partir de
//la guía.
const data = [];
agenda.forEach((value, key) => {
  data.push({
    name: value,
    phone: key
  })
})


// Dates
//**Ejercicio** Realiza un script que escriba en el documento la fecha y hora actual
let date2 = new Date();
document.write(date2);

//**Ejercicio** Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos.
let inicio = Date.now();
let nombre = prompt("Introduce el Nombre:");
let apeliido1 = prompt("Introduce el Apellido1:");
let apeliido2 = prompt("Introduce el Apellido2:");
let final = Date.now();
let tiempo = inicio - final;
document.write(tiempo);

//**Ejercicio** Realiza un script pida un mes y año e imprima los dias de ese mes de la forma 1(miércoles), 2(jueves),
const month = 1;
const year = 2019;

const date = new Date();
date.setMonth(month);
date.setFullYear(year);
date.setDate(1);

while(date.getMonth() === month) {
  switch(date.getDay()) {
   case 0:
     console.log(`${date.getDate()} (Domingo)` );
     break;
   case 1:
     console.log(`${date.getDate()} (Lunes)` );
     break;
   case 2:
     console.log(`${date.getDate()} (Martes)` );
     break;
   case 3:
     console.log(`${date.getDate()} (Miercoles)` );
     break;
   case 4:
     console.log(`${date.getDate()} (Jueves)` );
     break;
   case 5:
     console.log(`${date.getDate()} (Viernes)` );
     break;
   case 6:
     console.log(`${date.getDate()} (Sabado)` );
     break;
 }
  date.setDate(date.getDate() + 1);
}

//**Ejercicio** Dada la siguiente fecha 05/02/1985 calcula el día sumandole 30, 90 y 180 días.
let date3 = new Date('05/02/1985');
date3.setDate(date.getDate() + 30);
console.log(date);
date3 = new Date('05/02/1985');
date3.setDate(date.getDate() + 90);
console.log(date);
date3 = new Date('05/02/1985');
date3.setDate(date.getDate() + 180);
console.log(date);


// Moment 
//let date4 = moment().format('05/02/1985');
let m = moment([1985, 1, 05]);  
m.add(30, 'days');
m.add(60, 'days');
m.add(90, 'days');
