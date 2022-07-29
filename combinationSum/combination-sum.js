/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    let result = [];
    
    const dfs = (i, candidates, target, slate) => {
        if (target < 0) return;
        
        if (target === 0) {
            result.push(slate.slice());
            return;
        }
        
        for(let j = i; j < candidates.length; j++) {
            slate.push(candidates[j]);
            dfs(j, candidates, target - candidates[j], slate);
            slate.pop();
        }
    }
    dfs(0, candidates, target, []);
    
    return result;
};

module.exports = combinationSum;