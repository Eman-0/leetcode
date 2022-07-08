var isAnagram = function (s, t) {
    let hitCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            hitCount += 1;
        }
    }
    return hitCount === s.length;
}

module.exports = isAnagram;