function reversePyramid(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < i; j++) {
      step += " ";
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
      step += "#";
    }
    console.log(step);
  }
}

reversePyramid(5);
