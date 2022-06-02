function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    while (arr[i] < arr[i - 1]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
      i--;
    }
  }
  return arr;
}

// console.log(insertionSort([5, 3, 8]));

function selectionSort(arr) {
  for (let i = 0; i < arr.lenth; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    if (index !== i) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}
//Quick Sort
function quickSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  if (left.length > 0 && right.length > 0) {
    return [...quickSort(left), pivot, ...quickSort(right)];
  } else if (left.length > 0) {
    return [...quickSort(left), pivot];
  } else {
    return [pivot, ...quickSort(right)];
  }
}

console.log(quickSort([5, 3, 8]));
