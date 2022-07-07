var maxProfit = function (prices) {
    let lowestPrice = prices[0];
    let validHighestDay  = 0;

    for (let i = 1; i < prices.length - 1; i++) {
        if (lowestPrice > prices[i]) {
            lowestPrice = prices[i];
        } else {
            if (validHighestDay < prices[i]) {
                validHighestDay = prices[i];            
            }
        }
    }
    if (lowestPrice > validHighestDay) {
        return 0;
    } else {
        return validHighestDay - lowestPrice;
    }
}

module.exports = maxProfit;