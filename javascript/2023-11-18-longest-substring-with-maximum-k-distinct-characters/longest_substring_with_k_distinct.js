function assert(condition, message) {
  if (!condition) {
      throw new Error(message || 'Assertion failed');
  }
}

// Test cases
assert(longest_substring_with_k_distinct("araaci", 2) === 4, "Test 1 Failed");
assert(longest_substring_with_k_distinct("araaci", 1) === 2, "Test 2 Failed");
assert(longest_substring_with_k_distinct("cbbebi", 3) === 5, "Test 3 Failed");
assert(longest_substring_with_k_distinct("aabacbebebe", 3) === 7, "Test 4 Failed");
assert(longest_substring_with_k_distinct("aaaa", 2) === 4, "Test 5 Failed");

console.log("All tests passed!");

function longest_substring_with_k_distinct(s, k) {
  // Your code here
}