function stepShape(n) {
  for (let i = 0; i <= n; i++) {
    let step = "";
    for (let hash = n; hash > 0; hash--) {
      step += "#";
    }
    for (let space = n - 1; space > 0; space--) {
      step += "k  ";
    }
    console.log(step);
  }
}

stepShape(5);
