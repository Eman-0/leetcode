var search = function(nums, target) {
    let i = 0;
    let j = nums.length -1;

    while(i <= j){
        if(nums[i] === target)
            return i;
        if ( nums[j] === target){
            return j;
        }
        i++;
        j--;
    }
    return -1
    
};

module.exports = search;