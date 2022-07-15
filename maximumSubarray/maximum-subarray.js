var maxSubArray = function (nums) {
    if (nums.length < 1) return 0;

    let maxSum = -Infinity;

    const largestSum = nums.reduce((currSum, currValue) => {
        currSum = Math.max(currValue, currSum + currValue);
   
        maxSum = Math.max(currSum, maxSum);
   
        // call back
        return currSum;
    },0)

    return maxSum;
};

module.exports = maxSubArray;