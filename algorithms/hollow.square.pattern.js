// *****
// *   *
// *   *
// *   *
// *****

function hollowSquarePattern(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        step += "*";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

hollowSquarePattern(5);
