// 1 parent with max two children
//Full binary tree - a node has either 0 or 2 children and never just one child
// lookup, insert and delete => O(log N). ordered and flexible size.
// No O(1) operations
// Balanced vs un-balanced binary search tree
// unbalance - lookup, insert, delete - O(N)

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let currentNode = newNode;
            while(true){
                if(value < currentNode.value){
                    // left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode.left;

                }else{
                    // right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

        //check for the value being inserted is less than root or not
        //if less else right
        let spotfound = false;
        let currentNode = this.root
        

    }
    lookup(value){
        if(!this.root){
            return false;
        }

        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }else if(currentNode.value === value){
                return currentNode;
            }
        }
        return false;

    }
    remove(value){
        if(!this.root){
            return false;
        }

        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }else if(currentNode.value === value){
                return currentNode;
            }
        }
        return false;

    }
}