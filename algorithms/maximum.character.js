const maximumCharacter = (str) => {
  let charCountObject = {};
  let maxchar = "";
  let maxcount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCountObject[char] = charCountObject[char] + 1 || 1;
    if (charCountObject[char] > maxcount) {
      maxcount = charCountObject[char];
      maxchar = char;
    }
  }
  return maxchar;
};

console.log(maximumCharacter("hello"));
