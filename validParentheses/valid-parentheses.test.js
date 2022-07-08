
const isValid = require ('./valid-parentheses');

test('"()" returns true', () => {
    expect(isValid("()")).toBe(true);
});

test('"(" returns true', () => {
    expect(isValid("(")).toBe(false);
});

test('"({[]})" returns true', () => {
    expect(isValid("()")).toBe(true);
});