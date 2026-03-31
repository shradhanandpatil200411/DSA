// Longest Substring Without Repeating Characters
// Input: "abcabcbb"
// Output: 3 ("abc")

let str = "abcabcbb";

let l = 0;
let max = 0;
let set = new Set();

for (let r = 0; r < str.length; r++) {
  while (set.has(str[r])) {
    set.delete(str[l]);
    l++;
  }

  set.add(str[r]);

  max = Math.max(max, r - l + 1);
}

console.log(max);
