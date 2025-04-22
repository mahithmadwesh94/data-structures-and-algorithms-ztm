// Stacks Lookup O(n)
//push, pop and peek O(1)
// eg JS call stack


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    construct(){
        this.top = null;
        this.bottom = null;
        this.length = null;
    }

    peek(){
        return this.top;

    }

    push(value){
        let newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const currentNode = this.top;
            this.top = newNode;
            this.top.next = currentNode;

            

        }
        this.length++;
        return this;

    }

    pop(){
        if(!this.top){
            return null;
        }

        if(this.top === this.bottom){
            this.bottom =null;
        }

        let currentNode = this.top;
        this.top = this.top.next;
        this.length--;
        return this;

    }
}