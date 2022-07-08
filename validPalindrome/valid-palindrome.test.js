const isPalindrome = require('./valid-palindrome');

test('race car', () => {
    expect(isPalindrome('race car')).toBe(true);
})

test('hello moto', () => {
    expect(isPalindrome('hello moto')).toBe(false);
})

test('ra#%^ce! c@@@$a*()r', () => {
    expect(isPalindrome('ra#%^ce! c@@@$a*()r')).toBe(true);
})


