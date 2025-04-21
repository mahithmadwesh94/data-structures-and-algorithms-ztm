class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    newNode(value) {
        return {
            value: value,
            next: null
        }
    }

    append(value) {
        let node = this.newNode(value)

        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this;
    }

    prepend(value) {
        let node = this.newNode(value)
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    printList() {
        let array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        let i = 0;
        let currentNode = this.head;
        let node = this.newNode(value);
        if (index == 0) {
            this.prepend(value);
            // this.length++;
            return this.printList();
        }

        if (index > this.length - 1) {
            this.append(value);
            // this.length++;
            return this.printList();
        }


        while (i != index - 1) {
            if (currentNode.next != null) {
                currentNode = currentNode.next;
                i++;
            }

        }

        node.next = currentNode.next;
        currentNode.next = node;
        this.length++;
        return this.printList();


    }
     remove(index){
        //if first index
        if(index === 0){
            let newHead = this.head.next;
            let removeNode = this.head;
            removeNode.next = null;
            this.head = newHead;
            this.length--;
            return removeNode;
            
            
            
        }

         if(index > this.length-1){
             return `Please enter an index between 0 and ${this.length - 1 }`
         }

         let i = 0;
         let currentNode = this.head;
         while(i != index - 1){
            
             if(currentNode.next != null){
                 currentNode = currentNode.next;
                 i++;
             }
         }
         
   
         let removeNode = currentNode.next;
         if(removeNode.next == null){
             this.tail = currentNode;
             this.tail.next = null;
             
         }else{
             let newNode = removeNode.next;
              currentNode.next = newNode;
         }
         
         this.length--;
        
         removeNode.next=null;
         
         return removeNode;
         
    }

    reverse(){
        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        let second = this.head.next;
        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}


const myList = new LinkedList(10);
// console.log(myList);

myList.append(5); //O(1)
myList.append(16) //O(1)
myList.prepend(1) //O(1)
// myList.printList();
myList.insert(200, 99);
myList.insert(0, 100);
myList.insert(3, 3);
myList.printList();




