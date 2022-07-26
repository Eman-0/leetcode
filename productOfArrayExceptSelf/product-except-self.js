var productExceptSelf = function(nums) {
	let res = [];
    let n = nums.length;
	let left = 1;
	for(let i = 0; i < n; i++){
		if(i > 0){
		   left = left * nums[i-1] ;
		}
		res[i] = left;
    
	}

	let right = 1
	for(let i = n-1; i >=0; i--){
		if(i < n-1){
			right = right * nums[i+1];
		}
		res[i] *= right;
	}

	return res
};

module.exports = productExceptSelf;