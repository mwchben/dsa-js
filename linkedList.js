    //.........................LINKED LIST...............................................

    class linkNodeClass {
        constructor(data) {
            this.data = data
            this.next = null                
        }
    }
    // function linkNodeClass(data) {
    //     this.data = data
    //     this.next = null
    // }

   

    let node1 = new linkNodeClass(10)
    let node2 = new linkNodeClass(20)
    let node3 = new linkNodeClass(30)
    let node4 = new linkNodeClass(40)
    let node5 = new linkNodeClass(50)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5

    class LinkedListClass {
        constructor(head = null) {
            this.head = head
        }

        //This method returns the number of nodes present in the linked list.
        size() {
            let count = 0; 
            let node = this.head;
            while (node) {
                count++;
                node = node.next
            }
            return count;
        }

        //This method empties out the list.
        clear() {
            this.head = null;
        }

        //This method returns the last node of the linked list.
        getLast() {
            let lastNode = this.head;
            if (lastNode) {
                while (lastNode.next) {
                    lastNode = lastNode.next
                }
            }
            return lastNode
        }

        //This method returns the first node of the linked list.
        getFirst() {
            return this.head.data;
        }

    }

    // function LinkedListClass(head = null) {
    //     this.head = head
    // }

    let list = new LinkedListClass(node1)

    console.log("node1 is:",list.head.data);  //node1 is: 10
    console.log("node2 is:",list.head.next.data);  //node2 is: 20

    const size = list.size()
    const last = list.getLast()
    const first = list.getFirst()

    console.log("size is:",size);  //size is: 2
    console.log("First node is:",first);  //First node is: 10
    console.log("last node is:",last);  //last node is: linkNodeClass { data: 50, next: null }
 
