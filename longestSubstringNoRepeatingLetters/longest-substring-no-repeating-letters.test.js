const lengthOfLongestSubstring = require('./longest-substring-no-repeating-letters');

test('Input: s = "pwwkew" Output: 3', () => {
    let s = "pwwkew";
    expect(lengthOfLongestSubstring(s)).toBe(3);
})

test('Input: s = "dvdf" Output: 3', () => {
    let s = "dvdf";
    expect(lengthOfLongestSubstring(s)).toBe(3);
})