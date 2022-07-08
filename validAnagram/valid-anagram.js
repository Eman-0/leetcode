var isAnagram = function (s, t) {
    let hitCount = 0;
    let tempString = Array.from(t);
    for (let i = 0; i < s.length; i++) {
        let indexOfChar = tempString.indexOf(s[i]);
        console.log(s[i] + ' in position ' + indexOfChar);
        if (indexOfChar >= 0) {
            tempString.splice(indexOfChar, 1);
            hitCount += 1;
        }
    }
    console.log('hit count is ' + hitCount + ' ; s.length is ' + s.length);
    return hitCount === s.length && s.length === t.length;
}

module.exports = isAnagram;