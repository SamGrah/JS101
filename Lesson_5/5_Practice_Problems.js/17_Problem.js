function generateUUID() {
  let uuidChars = '';
  for (let index = 0; index < 32; index += 1) {
    uuidChars += (getRandomChar());
  }
  return uuidChars.slice(0, 8) +
         '-' +
         uuidChars.slice(8, 12) +
         '-' +
         uuidChars.slice(12, 16) +
         '-' +
         uuidChars.slice(16, 20) +
         '-' +
         uuidChars.slice(20);
}


function getRandomChar() {
  let charMap = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return charMap[Math.ceil(Math.random() * (charMap.length - 1))];
}

console.log(generateUUID());