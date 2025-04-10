Arrays


let tempArray = ['a','b','c','d'];
tempArray.push('e');// O{1}
tempArray.pop();// O{1}
tempArray.unshift('x'); //O{n}
// tempArray.splice(index,deleCount,'string')
tempArray.splice(2,0,'alien');






// Classes
// "this" is an important keyword. When used in function it takes the global score / window
// When used inside an object, this becomes the function

const object4 = {
	a: function(){
	Console.log(this) ;// return the function reference
	}
} 




class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.player}, Hi I am a ${this.type}`)
    }
}

 

class Wizard extends Player{
    constructor(name,type){
        super(name,type); // this is to call the constructor of Player when extending
    }
    play(){
        console.log(`WEEEEEEE I am a ${this.type}`)
    }
}


// Implement Array in class in javascript

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length-- ;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index){
        for(let i = index;i< this.length - 1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[lenght-1];
        this.length--;
    }
}









