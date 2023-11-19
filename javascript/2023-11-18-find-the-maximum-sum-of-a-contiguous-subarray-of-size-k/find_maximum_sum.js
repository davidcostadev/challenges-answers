const { assert, test } = require("../lib/testUtils");

test("Find Maximum Sum Test", function () {
  assert(findMaximumSum([2, 3, 4, 1, 5], 2), 7, "Test 1");
  assert(findMaximumSum([2, 1, 5, 1, 3, 2], 3), 9, "Test 2");
  assert(findMaximumSum([4], 1), 4, "Test 3");
  assert(findMaximumSum([1, 2, 3, 4, 5], 5), 15, "Test 4");
  assert(findMaximumSum([-1, -2, 3, 4, -5], 2), 7, "Test 5");
});

function findMaximumSum(arr, K) {
  // Your implementation goes here
}
