var lengthOfLongestSubstring = function(s) {
    let currString = [];
    let longestSubstring = 0;

    for (let i = 0; i < s.length; i++) {
        const charIndex = currString.indexOf(s[i]);

        if (charIndex !== -1) {
            currString.splice(0, charIndex + 1);
        }

        currString.push(s[i]);

        // Store the current string length if bigger than the existing record
        longestSubstring = Math.max(
            longestSubstring,
            currString.length
        );
    }

    return longestSubstring
};

module.exports = lengthOfLongestSubstring;