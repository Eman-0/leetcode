const isAnagram = require('./valid-anagram');

test('anagram, nagaram : true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
})

test('rat, car : false', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
})

test('a, ab : false', () => {
    expect(isAnagram('a', 'ab')).toBe(false);
})

test('aa, a : false', () => {
    expect(isAnagram('aa', 'a')).toBe(false);
})

test('aacc, ccac : false', () => {
    expect(isAnagram('aacc', 'ccac')).toBe(false);
})

