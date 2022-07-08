var isPalindrome = function(s) {
    const strippedString = s.replace(/[^a-z0-9]/gi, '');
    const reversedString = strippedString.split('').reverse().join('');
   
    return (strippedString.toUpperCase() === reversedString.toUpperCase());
};

module.exports = isPalindrome;