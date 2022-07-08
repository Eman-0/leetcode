const ListNode = require('./ListNode');

var mergeTwoSortedArrays = function (list1, list2) {
    let newList = new ListNode(0);
    let headOfNewList = newList;

    while(list1 !== null && list2 !== null) {
        
        if (list1.val < list2.val) {
            newList.next = list1;
            list1 = list1.next;
        } else {
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }

    if (list1 === null) {
        newList.next = list2;
    }
    if (list2 === null) {
        newList.next = list1;
    }
    return headOfNewList;
}

module.exports = mergeTwoSortedArrays;