const { assert, test } = require("../lib/testUtils");

function isPalindrome(word) {
  const pieces = word.split("");

  if (!pieces.length) {
    return false;
  }

  for (let i = 0; i < pieces.length / 2; i++) {
    const a = pieces[i];
    const b = pieces[pieces.length - (i + 1)];

    if (a !== b) {
      return false;
    }
  }

  return true;
}

// Test cases
test("Palindrome Test - Palindrome Word", function () {
  assert(isPalindrome("HANNAH"), true, "Test 1");
  assert(isPalindrome("RADAR"), true, "Test 2");
  assert(isPalindrome("LEVEL"), true, "Test 3");
});

test("Palindrome Test - Non-Palindrome Word", function () {
  assert(isPalindrome("GAGA"), false, "Test 4");
  assert(isPalindrome("HELLO"), false, "Test 5");
  assert(isPalindrome("WORLD"), false, "Test 6");
});

test("Palindrome Test - Single Character", function () {
  assert(isPalindrome("A"), true, "Test 7");
});

test("Palindrome Test - Empty String", function () {
  assert(isPalindrome(""), false, "Test 8");
});

test("Palindrome Test - Mixed Case Palindrome", function () {
  assert(isPalindrome("RaCeCaR"), true, "Test 9");
});

test("Palindrome Test - Mixed Case Non-Palindrome", function () {
  assert(isPalindrome("Racecar"), false, "Test 10");
});
