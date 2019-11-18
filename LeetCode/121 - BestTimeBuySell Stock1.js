var maxProfit = function (prices) {
    var min = Number.MAX_SAFE_INTEGER
    var sellValue = 0;;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > sellValue)
            sellValue = prices[i] - min;
    }
    return sellValue;
};

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.