// Add Front
// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the new head node.
    class SLL {
        constructor(){
            this.head = null;
        }

        addFront(value) {
            let new_node = {data : value, next : this.head };
            this.head = new_node;
            return this;
        }

        removeFront() {
            if(!this.head ) {
                return;
            }
            this.head = this.head.next;
            return this.head;
        }

        front() {
            return this.head ? this.head.data : null;
        }
    }

    SLL1 = new SLL();
    SLL1.addFront(18);
    console.log("1", SLL1.head);
    console.log(SLL1.front());
    SLL1.addFront(4);
    console.log("2", SLL1.head);

    SLL1.removeFront();
    console.log("3", SLL1.head);
    SLL1.removeFront();
    console.log("4", SLL1.head);
    console.log(SLL1.front());

    // let current = SLL1.head;
    // while(current !== null){
    //     console.log(current.data);
    //     current = current.next;
    // }
// Examples:
// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }


// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// Examples:
// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }


// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
// Examples:
// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null