function vowels(str) {
  const vowel = "aeiou".split("");
  let count = 0;
  str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    for (let j = 0; j < vowel.length; j++) {
      if (char === vowel[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(vowels("hello"));
