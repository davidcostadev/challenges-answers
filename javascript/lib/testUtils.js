function assert(actual, expected, message) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);

  if (actualStr !== expectedStr) {
    throw new Error(
      `${message} - Expected: ${expectedStr}, Actual: ${actualStr}`,
    );
  }
}

function test(testName, callback) {
  try {
    callback();
    console.log(
      `\x1b[42m\x1b[30m%s\x1b[0m - \x1b[32m%s\x1b[0m`,
      `PASSED`,
      testName,
    );
  } catch (e) {
    console.error(
      `\x1b[41m\x1b[30m%s\x1b[0m - \x1b[31m%s\x1b[0m`,
      `FAILED`,
      testName,
    );
    console.error(`    - \x1b[31m%s\x1b[0m`, e.message);
  }
}

module.exports = { assert, test };
