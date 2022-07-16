var hasCycle = function (head) {
    if (!head || !head.next) return false;

    let visitedNodes = new Map();

    visitedNodes.set(head, head.val);

    while(head !== null) {
        if (visitedNodes.has(head.next)) return true;
        visitedNodes.set(head, head.val);

        head = head.next;
    }
    return false;
    
}

module.exports = hasCycle;