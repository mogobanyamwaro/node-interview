const capitalize = (sentence) => {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};

console.log(capitalize("hello world"));
