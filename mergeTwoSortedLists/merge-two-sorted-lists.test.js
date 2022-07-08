const mergeTwoSortedArrays = require('./merge-two-sorted-lists');
const ListNode = require('./ListNode');

test('[1,2,4] + [1,3,4] = [1,1,2,3,4,4]', () => {
    //list1
    let listOneNode1 = new ListNode(1);
    
    let listOneNode2 = new ListNode(2);
    listOneNode1.next = listOneNode2;

    let listOneNode3 = new ListNode(4);
    listOneNode2.next = listOneNode3;

    //list2
    let listTwoNode1 = new ListNode(1);

    let listTwoNode2 = new ListNode(3);
    listTwoNode1.next = listTwoNode2;

    let listTwoNode3 = new ListNode(4);
    listTwoNode2.next = listTwoNode3;

    expect(mergeTwoSortedArrays(listOneNode1, listTwoNode1)).toEqual({"next": {"next": {"next": {"next": {"next": {"next": {"next": null, "val": 4}, "val": 4}, "val": 3}, "val": 2}, "val": 1}, "val": 1}, "val": 0});
})