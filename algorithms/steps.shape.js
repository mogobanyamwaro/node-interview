function stepShape(n) {
  for (let i = 0; i <= n; i++) {
    let step = "";
    for (let hash = i; hash > 0; hash--) {
      step += "#";
    }
    for (let space = n - i; space > 0; space--) {
      step += " ";
    }

    console.log(step);
  }
}

stepShape(5);
