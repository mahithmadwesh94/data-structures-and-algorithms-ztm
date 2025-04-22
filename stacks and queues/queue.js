// queue Lookup O(n)
// push, pop, peek O(1)
// eg printer queue
// should not use array for queue, as removing first time is costly and you have to adjust rest of the items indexes

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueuValue(value){
        let newNode = new Node(value);
        if(this.first == null){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
       
        this.length++;
        return this;
    }

    dequeue(value){
        if(!this.first){
            return null;
        }

        if(this.first === this.last){
            this.first = null;
            this.last = null;
            this.length = 0;
            return this;
        }

       
        this.first = this.first.next;
        this.length--;
        return this;

    }
}