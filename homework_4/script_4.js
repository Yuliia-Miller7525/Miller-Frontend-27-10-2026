//The First Task
let result = "";

for (let number = 20; number <= 30; number += 0.5) {
  result += number + " ";
}
console.log(result);

//The Second Task
const exchange = 40;

for (let usd = 10; usd <= 100; usd += 10) {
  let uah = usd * exchange;
  console.log(`${usd} usd = ${uah} uah`);
}

//The Third Task
const N = 49;

for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    console.log(i);
  }
}

//The Fourth Task
const num = 196;
let primeNum = true;

for (let x = 2; x < num; x++) {
  if (num % x === 0) {
    primeNum = false;
    break;
  }
}

if (primeNum && num > 1) {
  console.log(`${num} — is a prime number.`);
} else {
  console.log(`${num} — is not a prime number.`);
}

//The Fifth Task
const y = 144;
let current = 1;

while (current < y) {
  current = current * 3;
}

if (current === y) {
  console.log(`${y} is the degree of the number 3.`);
} else {
  console.log(`${y} is not the degree of the number 3.`);
}
