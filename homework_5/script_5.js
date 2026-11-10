const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let result = "";

  for (let i = 1; i <= length; i++) {
    let index = Math.floor(Math.random() * characters.length);
    result += characters[index];
  }

  return result;
}

console.log(generateKey(16, characters));
