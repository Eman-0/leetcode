const isPalindrome = require('./valid-palindrome');

test('A man, a plan, a canal: Panama', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
})

test('hello moto', () => {
    expect(isPalindrome('hello moto')).toBe(false);
})

test('ra#%^ce! c@@@$a*()r', () => {
    expect(isPalindrome('ra#%^ce! c@@@$a*()r')).toBe(true);
})




