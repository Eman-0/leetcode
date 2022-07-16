var MyQueue = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let firstElement = this.queue.shift();
    this.queue.unshift(firstElement);
    return firstElement;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    console.log(this.queue.length);
    return this.queue.length <= 0;
};

module.exports = MyQueue;