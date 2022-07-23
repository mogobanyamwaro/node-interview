function hollowTriangle(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i || i === 0 || i === n - 1) {
        step += "*";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}
hollowTriangle(5);
