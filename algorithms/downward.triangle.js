function downwardTriangle(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n - i; j++) {
      step += "*";
    }
    console.log(step);
  }
}
downwardTriangle(5);
