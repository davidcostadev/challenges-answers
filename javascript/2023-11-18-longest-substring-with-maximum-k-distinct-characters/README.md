## Coding Challenge: Longest Substring with Maximum K Distinct Characters

### Problem Statement
Given a string `s` and a number `k`, write a function to find the length of the longest substring that contains no more than `k` distinct characters.

### Example
- **Input**: `s = "araaci"`, `k = 2`
- **Output**: `4`
- **Explanation**: The longest substring with no more than 2 distinct characters is "araa".

### Tips and Hints
1. **Use a Sliding Window**: This problem is an excellent candidate for the sliding window technique, where the window size is not fixed. The window should expand to include new characters until it contains more than `k` distinct characters.

2. **HashMap for Character Count**: Consider using a HashMap (or an object in JavaScript) to keep track of the count of each character in the current window. This will help you easily identify when your window contains more than `k` distinct characters.

3. **Expand and Shrink the Window**: When the window contains `k` or fewer distinct characters, expand the window by moving the end pointer forward (and updating the HashMap). When there are more than `k` distinct characters, shrink the window by moving the start pointer forward (and updating the HashMap).

4. **Track the Maximum Length**: As you expand and shrink the window, keep track of the maximum length of the window that satisfies the condition (having `k` or fewer distinct characters).

5. **Edge Cases**: Don't forget to handle edge cases. What if the string is empty? What if `k` is zero or larger than the length of the string?

### Constraints
- The string `s` consists of only lowercase English letters.
- `k` is a positive integer.