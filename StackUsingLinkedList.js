class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            //this.length++;
        } else {
            let holdingPointer = this.top;
            this.top = newNode;
            newNode.next = holdingPointer;
        }
        this.length++;
        return this;

    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.length === 0) {
            this.bottom = null;
        }
        let holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(3);
myStack.pop();