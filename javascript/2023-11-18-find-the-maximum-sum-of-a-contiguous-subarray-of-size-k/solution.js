function findMaximumSum(arr, K) {
  // Your implementation goes here
  // console.log(Object.keys(arr).map(a => parseInt(a, 10)))
  // console.log(Object.values(arr))
  // console.log("\n")


  let maximumSum = -Infinity;
  for (let i = 0; i <= arr.length - K; i++) {
    
    let currentSum = 0
    for (let j = i; j < i + K ;j++) {
      currentSum += arr[j]
    }

    maximumSum = Math.max(maximumSum, currentSum)
  }

  return maximumSum
}
