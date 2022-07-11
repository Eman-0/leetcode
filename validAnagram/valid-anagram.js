var isAnagram = function (s, t) {
    let hitCount = 0;
    let tempString = Array.from(t);
    for (let i = 0; i < s.length; i++) {
        let indexOfChar = tempString.indexOf(s[i]);
        
        if (indexOfChar >= 0) {
            tempString.splice(indexOfChar, 1);
            hitCount += 1;
        }
    }
    return hitCount === s.length && s.length === t.length;
}

module.exports = isAnagram;