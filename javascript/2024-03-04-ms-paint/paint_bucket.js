const { assertList, test } = require("../lib/testUtils");

function paintBucket(image, rowInitial, colInitial, newColor) {
  const originalColor = image[rowInitial][colInitial];
  const rows = image.length;
  const cols = image[0].length;

  function paint(row, col) {
    const isOutOfBorder = row < 0 || row >= rows || col < 0 || col >= cols;

    if (
      isOutOfBorder ||
      image[row][col] === newColor || // already painted of the desired color
      image[row][col] !== originalColor // pixel don't match of the original color
    ) {
      // out of recursion
      return;
    }

    // paint
    image[row][col] = newColor;

    // find match original color
    paint(row + 1, col);
    paint(row - 1, col);
    paint(row, col + 1);
    paint(row, col - 1);
  }

  paint(rowInitial, colInitial);
}

test("should paint the left of the 'P'", function () {
  const image = [
    [".", "#", "#", "#", ".", "."],
    [".", "#", ".", ".", "#", "."],
    [".", "#", "#", "#", ".", "."],
    [".", "#", ".", ".", ".", "."],
    [".", "#", ".", ".", ".", "."],
  ];

  paintBucket(image, 1, 0, "O");

  const expectedImage = [
    ["O", "#", "#", "#", ".", "."],
    ["O", "#", ".", ".", "#", "."],
    ["O", "#", "#", "#", ".", "."],
    ["O", "#", ".", ".", ".", "."],
    ["O", "#", ".", ".", ".", "."],
  ];

  assertList(image, expectedImage, "Test 1");
});

test("should paint the right of the 'P'", function () {
  const image = [
    [".", "#", "#", "#", ".", "."],
    [".", "#", ".", ".", "#", "."],
    [".", "#", "#", "#", ".", "."],
    [".", "#", ".", ".", ".", "."],
    [".", "#", ".", ".", ".", "."],
  ];

  paintBucket(image, 1, 0, "O");

  const expectedImage = [
    ["O", "#", "#", "#", ".", "."],
    ["O", "#", ".", ".", "#", "."],
    ["O", "#", "#", "#", ".", "."],
    ["O", "#", ".", ".", ".", "."],
    ["O", "#", ".", ".", ".", "."],
  ];

  assertList(image, expectedImage, "Test 1");
});

test("should paint inside of the 'p'", function () {
  const image = [
    [".", "#", "#", "#", ".", "."],
    [".", "#", ".", ".", "#", "."],
    [".", "#", "#", "#", ".", "."],
    [".", "#", ".", ".", ".", "."],
  ];

  paintBucket(image, 1, 2, "O");

  const expectedImage = [
    [".", "#", "#", "#", ".", "."],
    [".", "#", "O", "O", "#", "."],
    [".", "#", "#", "#", ".", "."],
    [".", "#", ".", ".", ".", "."],
  ];

  assertList(image, expectedImage, "Test 3");
});
