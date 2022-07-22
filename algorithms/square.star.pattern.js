// *****
// *****
// *****
// *****
// *****

function squareStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let star = 0; star < n; star++) {
      step += "*";
    }
    console.log(step);
  }
}
squareStarPattern(5);
