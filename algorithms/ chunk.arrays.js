function chunkArrayInGroups(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const last = result[result.length - 1];
    if (!last || last.length === size) {
      result.push([item]);
    } else {
      last.push(item);
    }
  }
  return result;
}

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
