const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        var node = this._head;

        while (index--) {
            node = node.next;
        }

        return node.data;
    }

    insertAt(index, data) {
        var node = this._head;
        var prev;

        while (index--) {
            node = node.next;
        }

        if (node) {
            prev = node.prev;
        }

        var newNode = new Node(data, prev, node);

        if (node) {
            node.prev = newNode;
        }

        if (prev) {
            prev.next = newNode;
        }

        this.length++;

        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;

        return this;
    }

    deleteAt(index) {
        var node = this._head;

        while (index--) {
            node = node.next;
        }

        var prev = node.prev;
        var next = node.next;

        if (prev) {
            prev.next = next;
        }

        if (next) {
            next.prev = prev;
        }

        return this;
    }

    reverse() {
        var tail = this._tail;
        this._tail = this._head;
        this._head = tail;

        var node = this._head;

        while (node) {
            var next = node.next;

            node.next = node.prev;
            node.prev = next;
            node = node.next;
        }

        return this;
    }

    indexOf(data) {
        var node = this._head;
        var index = 0;

        while (node) {
            if (node.data == data) {
                return index;
            }

            index++;
            node = node.next;
        }

        return -1;
    }
}

module.exports = LinkedList;