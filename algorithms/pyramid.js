function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n - i; j++) {
      step += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      step += "*";
    }
    console.log(step);
  }
}
pyramid(5);
