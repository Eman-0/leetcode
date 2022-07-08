const isAnagram = require('./valid-anagram');

test('anagram, nagaram : true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
})

test('rat, car : false', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
})

