function findSumOfSubarray(arr, K) {
  const sumArray = [];
  for (let i = 0; i <= arr.length - K; i++) {
    let sumLoop = 0;
    for (let j = i; j < i + K; j++) {
      sumLoop += arr[j];
    }
    sumArray.push(sumLoop);
  }
  return sumArray;
}
