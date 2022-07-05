
const isValid = require ('./validParentheses');

test('"()" returns true', () => {
    expect(isValid("()")).toBe(true);
});

test('"(" returns true', () => {
    expect(isValid("(")).toBe(false);
});

test('"({[]})" returns true', () => {
    expect(isValid("()")).toBe(true);
});