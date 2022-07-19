var containsDuplicate = function (nums) {
    if (nums.length === 1 || nums.length <= 0) {
        return false;
    }

    let previousValues = new Map();

    for(let i = 0; i < nums.length; i++) {
        if (previousValues.has(nums[i])) return true;

        previousValues.set(nums[i], nums[i]);
    }

    return false;
}

module.exports = containsDuplicate;