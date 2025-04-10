// when a string is entered, hash is created. For the same string same hash is created. It is idempotent.

// addition of key => O(1)
// Hash collisions => same keys gets hashed into same space => linked list would be created O(n)

// with object you can set key as string only
// with new Map() you can set anything as key and maintans insertion order


class Hashtable{
    constructor(size){
        this.data = new Array(size);
    }


    _hash(key){
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key,value){
        let keyHash = this._hash(key);
        if(!this.data[keyHash]){
            this.data[keyHash] = [];
            this.data[keyHash].push([key,value])
        }else{
            this.data[keyHash].push([key,value])
        }
        
    }

    get(key){
        let keyHash = this._hash(key);
        const currentBucket = this.data[keyHash];
        if(currentBucket){
            for(let i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    }


    keys(){
        let keysArray = [];

        for(let i=0;i<this.data.length;i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}


const myHashTable = new Hashtable(50);
myHashTable.set('grapes',10000);
myHashTable.set('apples',54);
console.log(myHashTable.get('grapes'))

console.log(myHashTable.data);



// Arrays => insert and delete and search O(n)
// Hash => all 0(1)

// unordered and slow key iteration