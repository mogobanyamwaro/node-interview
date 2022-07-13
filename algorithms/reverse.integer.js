const reverseInteger = (num) => {
  let reversed = num.toString().split("").reverse("").join("");
  return parseInt(reversed) * Math.sign(num);
};

console.log(reverseInteger(-123));
