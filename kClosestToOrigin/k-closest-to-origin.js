/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    let distanceArray = [];
    let returnArray = [];
    const x2 = 0;
    const y2 = 0;
    
    for (let i = 0; i < points.length; i++) {
        let distance = Math.sqrt(Math.pow((points[i][0] - x2),2)  + Math.pow((points[i][1] - y2), 2));
        
        distanceArray.push([i, distance]);
    }
    
    
    distanceArray.sort((a, b) => a[1]- b[1]);
    
    for (let i = 0; i < k; i++) {
        returnArray.push(points[distanceArray[i][0]]);
    }
    
    return returnArray;
};

module.exports = kClosest;