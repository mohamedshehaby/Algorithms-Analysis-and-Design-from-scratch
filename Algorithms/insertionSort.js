function insertionSort(unsortedArray) {
  const x = [...unsortedArray];
  // for (let i = 1; i < unsortedArray.length; i++) {
  //   const key = n[i];
  //   for (let j = i; j--; j >= 0) {
  //     if (n[j] > key) {
  //       n[j + 1] = n[j];
  //     } else {
  //       n[j + 1] = key;
  //       break;
  //     }
  //
  //     if (j === 0) n[j] = key;
  //   }
  // }

  for (let i = 1; i < x.length; i++) {
    const key = x[i];
    let j = i - 1;
    while (j >= 0 && x[j] > key) {
      x[j + 1] = x[j];
      j--;
    }
    x[j + 1] = key;
  }

  return x;
}

function reverseInsertionSort(unsortedArray) {
  const x = [...unsortedArray];

  for (let i = 1; i < x.length; i++) {
    const key = x[i];
    let j = i - 1;
    while (j >= 0 && x[j] < key) {
      x[j + 1] = x[j];
      j--;
    }
    x[j + 1] = key;
  }

  return x;
}

module.exports = { insertionSort, reverseInsertionSort };
