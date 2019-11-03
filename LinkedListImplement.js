class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;

    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return undefined;
        }
        const newNode = new Node(value);
        const previousNode = this.traverseToIndex(index - 1);
        const nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        if (index >= this.length) {
            return undefined;
        }

        const previousNode = this.traverseToIndex(index - 1);
        previousNode.next = previousNode.next.next;
        this.length--;
        return this.printList();


    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;


    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;

    }


}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(8);
myLinkedList.append(10);
myLinkedList.prepend(2);
myLinkedList.insert(2, 21);
myLinkedList.remove(2);