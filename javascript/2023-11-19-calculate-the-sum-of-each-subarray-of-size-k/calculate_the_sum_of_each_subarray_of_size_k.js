const { assert, test } = require("../lib/testUtils");

test("Sum of Each Subarray of Size K", function () {
  assert(findSumOfSubarray([1, 2, 3, 4, 5, 6], 3), [6, 9, 12, 15], "Test 1");
  assert(findSumOfSubarray([1, 2, 3, 4], 2), [3, 5, 7], "Test 2");
  assert(findSumOfSubarray([10, 11, 7, 8, 5], 2), [21, 18, 15, 13], "Test 3");
});

function findSumOfSubarray(arr, K) {
  // Your code here
}
