const Trie = require('./implement-trie');

test('Test trie functionality', () => {
    const trie = new Trie();
    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
    expect(trie.startsWith("app")).toBe(true); // return True
})