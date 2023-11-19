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
    console.error(
      `\x1b[31m%s\x1b[0m`,
      `\n${testName}:\n\t Failed - ${e.message}`,
    );
  }
}

module.exports = { assert, test };
