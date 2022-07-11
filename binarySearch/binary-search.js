var search = function(nums, target) {
    const halfArrayLength = Math.round(nums.length / 2);
    const firstHalfOfArray = nums.slice(0,halfArrayLength);
    const secondHalfOfArray = nums.slice(halfArrayLength, nums.length);

    if ( target < secondHalfOfArray[0] || secondHalfOfArray[0] === undefined) {
        const indexOfTarget = firstHalfOfArray.indexOf(target);
        if (indexOfTarget !== -1){
            return indexOfTarget;
        } else {
            return -1;
        }
    } else {
        const indexOfTarget = secondHalfOfArray.indexOf(target);
        if (indexOfTarget !== -1) {
            return indexOfTarget + halfArrayLength;
        } else {
            return -1;
        }
    }
    
};

module.exports = search;