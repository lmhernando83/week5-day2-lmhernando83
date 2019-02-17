# Exercises of week 5 and day 2 

# Arrays
Un array es una colección ordenada de datos. Es utilizado para guardar multiples valores en una variable.

La documentacion se puede ver en [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array). Hay varias formas de contruir un [array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array). Para empezar a comprender la construcción de un array os proponemos hacer los siguientes ejercicios.

* Construir mediante []:
  * **Ejercicio** Crea un array de 3 enteros
  * **Ejercicio** Crea un array de 3 strings
  * **Ejercicio** Crea un array con 2 enteros y un string 
* Construir mediante new:
  * **Ejercicio** Crea un array de 3 enteros
  * **Ejercicio** Crea un array de 3 strings
  * **Ejercicio** Crea un array con 2 enteros y un string
  * **Ejercicio** ¿ Qué diferencia hay entre `let e = [3]` y `let f = new Array(3)` ?

1. **Ejercicio** Transformar el array de números 
    
    `const numberArrays = [1, 2, 3, 4, 5];` 
    
    multiplicando por 5 **( map )**

1. **Ejercicio** Buscar el primer elemento mayor que 4 en el siguiente array

    `const numberArrays = [1, 2, 3, 4, 5];` **Ejercicio** Contar el numero de elementos que son string en el siguiente array **(reduce)**:

1. **Ejercicio** Buscar el primer elemento que empieze por eva en el array 

    `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

1. **Ejercicio** Hacer el sumatorio de un array numérico **( reduce )**:

    `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

1. 

    `const miArray = ['pepe', 2, 'evaristo', 4, 'eva'];`

1. **Ejercicio** Modificar array usando **push**.

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Castañas', 'Nueces']` 

1. **Ejercicio** Modificar array usando **concat**.

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Castañas', 'Nueces']` 

1. **Ejercicio** Modificar array usando **splice**.

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Nueces']` 

2. **Ejercicio** Añadir elemento a un array usando **splice**

    `const arrayOriginal = ['Manzanas', 'Peras', 'Castañas'];` a

    `['Manzanas', 'Peras', 'Castañas', 'Nueces']` .
    
# Set

1. **Ejercicio** Contruye un conjunto con tres frutas: Pera, Manzana y Naranja

1. **Ejercicio** Comprueba si Naranja esta dentro del conjunto que has creado antes.

1. **Ejercicio** Comprueba la longitud del conjunto.

1. **Ejercicio** Añade una Granada al conjunto.

1. **Ejercicio** Crea un array con los elementos que hay en el conjunto y devuelvelo ordenados.

1. **Ejercicio** Borra la manzana.

# Map

1. **Ejercicio** Contruye una guia telefonica con los compañeros de clase. Toma como clave el
numero de teléfono y como valor el nombre del compañero.

1. **Ejercicio** Crea una función que compruebe que un número está dentro de la guía.

1. **Ejercicio** Crea una función que dado un nombre compruebe que la guia contiene algún 
nombre que contenga el nombre pasado por parámetro.

1. **Ejercicio** Añade un nuevo compañero ficticio con tu número de telefono. ¿Qué pasa?

1. **Ejercio** Crea un array ordenado por nombre con valores { nombre, telefono } a partir de
la guía.

# Lodash

1. **Ejercicio** Dado los siguientes arrays:
```
const array1 = [1,3,5,7,9,10]
const array2 = [2,3,4,7,8,10]
```
consigue un array intersección con valores únicos utilizando lodash.

1. **Ejercicio**  Dado los siguientes arrays:
```
const array1 = [1,3,5,7,9,10]
const array2 = [2,3,4,7,8,10]
```
Devuelve el sumatorio de de los elementos pares.

1. **Ejercicio** Dado los objetos 
```
const obj1 = {
    prop1: 'value1',
    prop2: 10,
    prop3: 'value'
}
const obj2 = {
    prop1: {
        innerprop1: 'hola'
    },
}
```
Devuelve un objeto que sean ambos mezclados de la forma que obj2 prevalezca sobre obj1.

1. **Ejercicio** ¿qué diferencia hay en _.merge y _.assign, dado _ como el objeto que representa lodash.

1. **Ejercicio** Dado el array `[2,5,8,10,24]` calcula su media con lodash.

1. **Ejercicio** Dado el objeto
```
const obj1 = {
    prop1: 'value1',
    prop2: 10,
    prop3: 'value'
}
```
Devuelve los valores de sus propiedades en un array.

1. **Ejercicio** Dado el objeto
 ```
 const obj1 = {
     prop1: 'value1',
     prop2: 10,
     prop3: 'value'
 }
```
Crea un nuevo objeto con solo las propiedades que tengan valores string.

1. **Ejercicio** Dado el siguiente array `[[1,2,[4,5],[5,7]], [1,3,4,5]]` consigue un array aplanado.
Es decir de la forma `[1,2,4,5,5,7,1,3,4,5]`

# Dates

1. **Ejercicio** Realiza un script que escriba en el documento la fecha y hora actual

1. **Ejercicio** Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos.
Para pedir los datos se puede utilizar la forma `var nombre = prompt("Introduce el Nombre:");` que
guardará en `nombre` el nombre sacando por pantalla una ventana donde introducirlos.

1. **Ejercicio** Realiza un script pida un mes y año e imprima los dias de ese mes de la forma 1(miércoles), 2(jueves), ...

1. **Ejercicio** Dada la siguiente fecha 05/02/1985 calcula el día sumandole 30, 90 y 180 días.


# Moment

Con moment y la librería de los locales se tiene una potencia grandísima para trabajar con 
fechas.

1. **Ejercicio** Dada la siguiente fecha 05/02/1985, cual es nombre del dia si le sumas 30, 90 y 180 días.

