/**
 *
 * @param {string} s
 * @param {number} k
 */
function longest_substring_with_k_distinct(s, k) {
  let list = s.split("");
  let longest = -Infinity;

  for (let i = 0; i <= list.length - 1; i++) {
    let current = list[i];
    let distinctK = list[i];

    for (let j = i + 1; j < list.length; j++) {
      if (!distinctK.includes(list[j])) {
        distinctK += list[j];
      }

      if (distinctK.length <= k) {
        current += list[j];
      } else {
        break;
      }
    }

    longest = Math.max(current.length, longest);
  }

  return longest;
}
