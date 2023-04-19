    //.........................LINKED LIST...............................................

    class linkNodeClass {
        constructor(data) {
            this.data = data
            this.next = null                
        }
    }

    let node1 = new linkNodeClass(10)
    let node2 = new linkNodeClass(20)
    node1.next = node2

    class LinkedListClass {
        constructor(head = null) {
            this.head = head
        }
    }

    let list = new LinkedListClass(node1)

    console.log("node1 is:",list.head.data);  //node1 is: 10
    console.log("node2 is:",list.head.next.data);  //node2 is: 20