//The First Task
const x = 7;
const y = 5;

if (x > y) {
  console.log(`Number ${x} more than ${y} `);
} else if (x < y) {
  console.log(`Number ${x} less than ${y} `);
} else {
  console.log(`Numbers equal`);
}

//The Second Task
const distKm = 50;
const distFeet = 30;

const metersFromKm = distKm * 1000;
const metersFromFeet = distFeet * 0.305;

if (metersFromKm > metersFromFeet) {
  console.log(`Less distance in feets: ${distFeet} feet (${metersFromFeet} m)`);
} else if (metersFromKm < metersFromFeet) {
  console.log(`Less distance in kilometers: ${distKm} km (${metersFromKm} m)`);
} else {
  console.log(`Distances equal`);
}

//The Third Task
const a = 8;
const b = 16;

const isADividerB =
  b % a === 0
    ? `Number ${a} is a divider ${b}`
    : `Number ${a} is not a divider ${b}`;
const isBDividerA =
  a % b === 0
    ? `Number ${b} is a divider ${a}`
    : `Number ${b} is not a divider ${a}`;

console.log(isADividerB);
console.log(isBDividerA);

//The Fourth Task
const NUMBER = 705;
const lastNUMBER = NUMBER % 10;
const isEven = lastNUMBER % 2 === 0;

console.log(`The last number is ${lastNUMBER}`);

if (isEven) {
  console.log(`Number ${lastNUMBER} is even.`);
} else {
  console.log(`Number ${lastNUMBER} is not even.`);
}

//The Fifth Task
const number = 26;
const firstNumber = Math.floor(number / 10);
const lastNumber = number % 10;

if (firstNumber > lastNumber) {
  console.log(`Number ${firstNumber} more than ${lastNumber} `);
} else if (firstNumber < lastNumber) {
  console.log(`Number ${firstNumber} less than ${lastNumber} `);
} else {
  console.log(`Numbers equal`);
}

//The Sixth Task
const z = 321;
const firstZ = Math.floor(z / 100);
const secondZ = Math.floor(z / 10) % 10;
const thirdZ = z % 10;
const sum = firstZ + secondZ + thirdZ;
const mult = firstZ * secondZ * thirdZ;

console.log(`Number: ${z}`);
console.log(`Parts: ${firstZ}, ${secondZ}, ${thirdZ}`);
console.log(`Summing: ${sum}`);
console.log(`Multiplication: ${mult}`);

if (sum % 2 === 0) {
  console.log(`Number ${sum} is even. `);
} else {
  console.log(`Number ${sum} is not even.`);
}

if (sum % 5 === 0) {
  console.log(`Number ${sum} is multiple. `);
} else {
  console.log(`Number ${sum} is not multiple.`);
}

if (mult > 100) {
  console.log(`Number ${mult} more than 100.`);
} else {
  console.log(`Number ${mult} less than 100.`);
}

//The Seventh Task
const c = 848;
const firstC = Math.floor(c / 100);
const secondC = Math.floor(c / 10) % 10;
const thirdC = c % 10;
const allEqual = firstC === secondC && secondC === thirdC;
const allEqual2 = firstC === secondC || firstC === thirdC || secondC === thirdC;

console.log(`Number: ${c}`);
console.log(`Parts: ${firstC}, ${secondC}, ${thirdC}`);

if (allEqual) {
  console.log("All numbers are equal.");
} else if (allEqual2) {
  console.log("There are at least two identical numbers.");
} else {
  console.log("All numbers are not equal.");
}

//The Eighth Task
const n = 123321;
const n1 = Math.floor(n / 100000);
const n2 = Math.floor(n / 10000) % 10;
const n3 = Math.floor(n / 1000) % 10;
const n4 = Math.floor(n / 100) % 10;
const n5 = Math.floor(n / 10) % 10;
const n6 = n % 10;

console.log(`Number: ${n}`);
console.log(`Parts: ${n1}, ${n2}, ${n3}, ${n4}, ${n5}, ${n6}`);

const mirroriness = n1 === n6 && n2 === n5 && n3 === n4;

if (mirroriness) {
  console.log(`The number ${n} is mirror.`);
} else {
  console.log(`The number ${n} is not mirror.`);
}

//The Ninth Task
const m = 147741;
const m1 = Math.floor(m / 100000);
const m2 = Math.floor(m / 10000) % 10;
const m3 = Math.floor(m / 1000) % 10;
const m4 = Math.floor(m / 100) % 10;
const m5 = Math.floor(m / 10) % 10;
const m6 = m % 10;

console.log(`Number: ${m}`);
console.log(`Parts: ${m1}, ${m2}, ${m3}, ${m4}, ${m5}, ${m6}`);

const mirroriness2 = m1 === m6 && m2 === m5 && m3 === m4;

if (mirroriness2) {
  console.log(`The number ${m} is mirror.`);
} else {
  console.log(`The number ${m} is not mirror.`);
}
