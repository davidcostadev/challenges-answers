function assert(actual, expected, message) {
  if (actual !== expected) {
      throw new Error(`${message} - Expected: ${expected}, Actual: ${actual}`);
  }
}

function test(testName, callback) {
  try {
      callback();
      console.log(`\x1b[32m%s\x1b[0m`, `\n${testName}:\n\t Passed`);
  } catch (e) {
      console.error(`\x1b[31m%s\x1b[0m`, `\n${testName}:\n\t Failed - ${e.message}`);
  }
}

test("Find Maximum Sum Test", function() {
  assert(findMaximumSum([2, 3, 4, 1, 5], 2), 7, "Test 1");
  assert(findMaximumSum([2, 1, 5, 1, 3, 2], 3), 9, "Test 2");
  assert(findMaximumSum([4], 1), 4, "Test 3");
  assert(findMaximumSum([1, 2, 3, 4, 5], 5), 15, "Test 4");
  assert(findMaximumSum([-1, -2, 3, 4, -5], 2), 7, "Test 5");
});



function findMaximumSum(arr, K) {
  // Your implementation goes here
}
