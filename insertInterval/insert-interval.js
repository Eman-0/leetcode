var insert = function(intervals, newInterval) {
    if (!intervals) return [newInterval];

    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval);
        return intervals;
    }

    if (newInterval[0] > intervals[intervals.length -1][1]) {
        intervals.push(newInterval);
    }

    let idxBeg = 0;
    let idxEnd = 0;
    let beg = 0;
    let end = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) {
            idxBeg = i;
            beg = intervals[i][0];
            break;
        }

        if (intervals[i][0] > intervals[0]) {
            idxBeg = i;
            beg = newInterval[0];
            break;
        }
    }

    for (let i = intervals.length -1; i >= 0; i--) {
        if (intervals[i][0] <= newInterval[1] && intervals[i][1] >= newInterval[1]) {
            idxEnd = i;
            end = intervals[i][1];
            break;
        }

        if (intervals[i][0] < newInterval[1]) {
            idxEnd = i;
            end = newInterval[1];
            break;
        }
    }

    const numOfIntervalsToDelete = idxEnd - idxBeg + 1;

    intervals.splice(idxBeg, numOfIntervalsToDelete, [beg,end]);

    return intervals;





};

module.exports = insert;