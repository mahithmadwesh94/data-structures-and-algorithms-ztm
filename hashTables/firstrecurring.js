function firstRecurringInteger(array){
    let map = {};

    for(let i=0;i<array.length;i++){
        if(map[array[i]]){
            return array[i];
        }else{
            map[array[i]] = i;
        }
    }
    return undefined;
}