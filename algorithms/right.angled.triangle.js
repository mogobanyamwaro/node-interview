function rightAngledTriangle(n) {
  for (let i = 1; i < n; i++) {
    let step = "";
    for (let j = 0; j < n - i; j++) {
      step += " ";
    }

    for (let star = 0; star < i; star++) {
      step += "*";
    }
    console.log(step);
  }
}

rightAngledTriangle(5);
