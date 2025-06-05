export const largestPalindromeProductV1 = (): number => {
  let result = -1;

  for (let i = 1; i < 1000; i++) {
    for (let k = 1; k < 1000; k++) {
      const n = k * i;
      const isPalidrome = String(n).split("").reverse().join("") === String(n);
      if (isPalidrome && n > result) {
        result = n;
      }
    }
  }

  return result;
};

export const largestPalindromeProductv2 = (): number => {
  let result = -1;

  for (let i = 999; i >= 100; i--) {
    for (let k = 999; k >= i; k--) {
      const n = k * i;
      if (n <= result) {
        break;
      }

      if (isPalindrome(n) && n > result) {
        result = n;
      }
    }
  }

  return result;
};

/**
  ┌─────────┬─────────┬──────────┬──────┐
  │ (index) │ s       │ reversed │ num  │
  ├─────────┼─────────┼──────────┼──────┤
  │ 0       │ 'init'  │ 0        │ 1221 │
  │ 1       │ 'while' │ 1        │ 122  │
  │ 2       │ 'while' │ 12       │ 12   │
  │ 3       │ 'while' │ 122      │ 1    │
  │ 4       │ 'while' │ 1221     │ 0    │
  │ 5       │ 'end'   │ 1221     │ 0    │
  └─────────┴─────────┴──────────┴──────┘
 */
const reverseNumber = (num: number) => {
  let reversed = 0;

  while (num > 0) {
    reversed = 10 * reversed + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed;
};

const isPalindrome = (num) => {
  return num === reverseNumber(num);
};
