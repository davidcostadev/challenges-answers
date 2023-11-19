## Coding Challenge: Calculate the Sum of Each Subarray of Size K

### Problem Statement

Write a function that takes an array of integers `arr` and a positive integer `K`. The function should return a new array containing the sum of each contiguous subarray of size `K`.

### Example

- **Input**: `arr = [1, 2, 3, 4, 5, 6]`, `K = 3`
- **Output**: `[6, 9, 12, 15]`
- **Explanation**:
  - The sum of the first subarray `[1, 2, 3]` is 6.
  - The sum of the second subarray `[2, 3, 4]` is 9.
  - The sum of the third subarray `[3, 4, 5]` is 12.
  - The sum of the fourth subarray `[4, 5, 6]` is 15.

### Tips and Hints

- **Sliding Window Technique**: Use the sliding window technique to compute the sum of each window of size `K`.
- **Start with the First Window**: Calculate the sum of the first `K` elements.
- **Slide the Window**: For each subsequent element, subtract the element going out of the window and add the new element coming into the window.

### Constraints

- The array `arr` will contain at least `K` numbers.
- All elements in the array are integers.
- `K` is a positive integer.
