// console.log('hello world')

const firstName = 'eric';

let age = 18;

// have our terminal console log Hi my name is <name> and I am <age>

// non string literal ex
console.log('Hi my name is ' + firstName + ' and I am ' + age);

age = 19;

// string literal ex
console.log(`Hi my name is ${firstName} and I am ${age}`)


let myBool = false;

if (myBool === true) {
    console.log('hey hey')
}


let myFavNum = 30;

if (myFavNum >= 30) {
    console.log('Your number is awesome!')
}


const num1 = 30;
let num2 = 25;

num2 = 99;

console.log(num1 > num2)

// basic math operators: +, -, *, /

const multiplicationOfNums = num1 * num2;
const divisionOfNums = num1 / num2;

console.log(multiplicationOfNums, divisionOfNums)