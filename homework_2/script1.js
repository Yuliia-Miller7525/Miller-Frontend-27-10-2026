//The First Task
const userName = prompt("What is your name?");
alert(`Hello, ${userName}! How are you?`);

//The Second Task
const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));
const sum = num1 + num2;
const diff = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
console.log(`Summing: ${num1} + ${num2} = ${sum}`);
console.log(`Difference: ${num1} - ${num2} = ${diff}`);
console.log(`Multiplication: ${num1} * ${num2} = ${mult}`);
console.log(`Dividing: ${num1} / ${num2} = ${div}`);

//The Third Task
const value1 = prompt("Enter the first value:");
const value2 = prompt("Enter the second value:");
const result = value1 === value2;
console.log(result);

//The Fourth Task
const number1 = Number(prompt("Enter the first number:"));
const number2 = Number(prompt("Enter the second number:"));
const number3 = Number(prompt("Enter the third number:"));
const average = (number1 + number2 + number3) / 3;
console.log(
  `Arithmetic mean of numbers ${number1}, ${number2} and ${number3} equals ${average} `,
);

//The Fifth Task
const NUMBER = 98765;
const n1 = Math.floor(NUMBER / 10000);
const n2 = Math.floor((NUMBER / 1000) % 10);
const n3 = Math.floor((NUMBER / 100) % 10);
const n4 = Math.floor((NUMBER / 10) % 10);
const n5 = NUMBER % 10;
console.log(`${n1} ${n2} ${n3} ${n4} ${n5}`);
