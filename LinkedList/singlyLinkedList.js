//piece of data - val
//reference to next node - next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList()
list.push("Hello"); //This is first Node: head (This points towards second node)
list.push('there!'); //This points towards third node
list.push('How');//This points towards forth node
list.push('are'); //This points towards last node
list.push('you!');//This is last Node: tail

console.log(list);

// var first = new Node('Hi');
// first.next = new Node('there!');
// first.next.next = new Node('How');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you')

