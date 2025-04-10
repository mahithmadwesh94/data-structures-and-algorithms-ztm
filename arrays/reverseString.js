function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmmm thats not good';
    }

    let backwards = [];
    const totalItem = str.length - 1;
    for(let i= totalItem;i=0;i++){
        backwards.push(str[i]);
    }

    return backwards.join('');

}

function reverse2(str){
    return str.split('').reverse();
}

const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');