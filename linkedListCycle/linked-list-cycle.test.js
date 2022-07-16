const hasCycle = require('./linked-list-cycle');
const ListNode = require('./list-node');

test('Input: head = [3,2,0,-4], pos = 1', () => {
    var thirdNode = new ListNode(-4);
    var secondNode = new ListNode(0);
    var firstNode = new ListNode(2);
    var head = new ListNode(3);

    head.next = firstNode;
    firstNode.next = secondNode;
    secondNode.next = thirdNode;
    thirdNode.next = head;
    expect(hasCycle(head)).toBe(true);
})

test('head = [1], pos = -1', () => {
    var head = new ListNode(1);
    expect(hasCycle(head)).toBe(false);
})