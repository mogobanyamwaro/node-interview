const anagram = (str1, str2) => {
  const stringA = str1.toLowerCase().replace(/c\w_]+/g, "");
  const stringB = str2.toLowerCase().replace(/c\w_]+/g, "");
  if (stringA.length !== stringB.length) {
    return false;
  }
  const stringAcharCount = {};
  for (let i = 0; i < stringA.length; i++) {
    const achar = stringA[i];
    stringAcharCount[achar] = stringAcharCount[achar] + 1 || 1;
  }
  for (let i = 0; i < stringB.length; i++) {
    const bchar = stringB[i];
    if (!stringAcharCount[bchar]) {
      return false;
    } else {
      stringAcharCount[bchar]--;
    }
  }
  return true;
};

console.log(anagram("hello", "llohe"));
