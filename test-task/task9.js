var bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j =  i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    } 
    return arr;
  }
console.log(bubbleSort([45,85,5, 5, 4, 3, 8]));
