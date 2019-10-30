class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;

    }
    pop() {
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(3);
myStack.pop();