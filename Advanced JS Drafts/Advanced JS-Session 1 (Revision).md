## Variables and Strings

  

```javascript

// a variable with 'let'

let name = 'farida';

  
// Changing the value of a variable

name = 'salem';

console.log(name); // Output: salem

  

// Adding a number to a string (type coercion)

name = name + 1;

console.log(name); // Output: salem1

```

  

## Null Values and Conditionals

  
**هنا الكود في ال (if) بيتاكد لو قيمه ال num بتساوي null ولا لا

```javascript

// Variable with null value

let num = null;



if (num == null)

    console.log("the num can not be empty");

else

    console.log("num");

```

  

## Arrays



```javascript

// Creating an array

let array = [1, 2, 3, 4, 5];

console.log(array); // Output: [1, 2, 3, 4, 5]

  

// Accessing array elements ()

**خد بالك بنبدأ العد في بالصفر مش بالواحد**

console.log(array[2]); // Output: 3

  

// Changing an array element

array[4] = 'marwan';

console.log(array); // Output: [1, 2, 3, 4, 'marwan']

```

  

## Numbers and the Modulo Operator (%)

  

```javascript

// Modulo operation (remainder after division)

let number = 23;

let remainer = number % 2;

console.log(remainer); // Output: 1 (because 23 ÷ 2 = 11 with remainder 1)

  

// Array with mixed data types

let arrayOfNums = ["sameh", 2, 3, 4, 5, 6, 7, 8, 9];

  

// Checking if a number is even or odd

if (array[0] % 2 === 0)

    console.log('even');

else

    console.log("odd");

```

  

## Even/Odd Number Checker

  

```javascript

let num = 30;

let remainer = num % 2;

  

if (remainer == 0) {

    console.log('even');

} else {

    console.log('odd');

}

```

  

## Key Concepts Covered

  

1. **Variables**: Using `let` to declare variables

2. **Data Types**: Strings, numbers, null, arrays

3. **Console Output**: Using `console.log()` to display values

4. **Conditionals**: Using `if/else` statements to make decisions

5. **Arrays**: Creating, accessing, and modifying array elements

6. **Operators**:

   - Assignment (`=`)

   - Addition/concatenation (`+`)

   - Modulo (`%`)

   - Equality (`==`, `===`)