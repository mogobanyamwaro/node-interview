function caesarCipher(str, shift) {
  // Your code here.

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = alphabet.indexOf(char);
    // if char is not in alphabet, just add it to result
    if (index === -1) {
      // if char is not in alphabet, just add it to result
      result += char;

      continue;
    }
    // if char is in alphabet, shift it
    const newIndex = (index + shift) % 26;
    result += alphabet[newIndex];
  }
  return result;
}

console.log(caesarCipher("abcd", 1));
