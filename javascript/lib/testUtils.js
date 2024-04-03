function assert(actual, expected, message) {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);

  if (actualStr !== expectedStr) {
    throw new Error(
      `${message} - Expected: ${expectedStr}, Actual: ${actualStr}`,
    );
  }
}

function assertList(actual, expected, message) {
  const rows = actual.length;
  const cols = actual[0].length;

  for (let i = 0; i < rows; i++) {
    let rowError = false;
    let incorrectRow = "";
    let correctRow = "";

    for (let j = 0; j < cols; j++) {
      if (actual[i][j] !== expected[i][j]) {
        rowError = true;
        incorrectRow += actual[i][j];
        correctRow += expected[i][j];
      } else {
        incorrectRow += " ";
        correctRow += " ";
      }
    }

    if (rowError) {
      throw new Error(
        `${message} - Row ${
          i + 1
        } is incorrect: [${incorrectRow}] - Expected: [${correctRow}]`,
      );
    }
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

module.exports = { assert, assertList, test };
