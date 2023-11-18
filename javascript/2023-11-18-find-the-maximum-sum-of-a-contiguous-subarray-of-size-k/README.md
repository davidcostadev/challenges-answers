## Coding Challenge: Find the Maximum Sum of a Contiguous Subarray of Size K

### Problem Statement
Write a function that takes an array of integers `arr` and a positive integer `K`. The function should return the maximum sum of any contiguous subarray of size `K`.

### Example
- **Input**: `arr = [2, 3, 4, 1, 5]`, `K = 2`
- **Output**: `7`
- **Explanation**: The subarray `[4, 3]` has the maximum sum of 7.

### Tips and Hints
1. **Sliding Window Technique**: Utilize the sliding window technique to keep track of the sum of the current subarray of size `K`.
2. **Initialize the Sum**: Start by calculating the sum of the first `K` elements.
3. **Slide the Window**: Move the window one element at a time, adding the next element and subtracting the first element of the previous window.
4. **Keep Track of the Maximum Sum**: As you slide the window, keep updating the maximum sum.
5. **Edge Cases**: Consider edge cases such as when `K` is larger than the array length.

### Constraints
- The array will contain at least `K` numbers.
- All elements in the array are integers.
- `K` is a positive integer.
