// questions to be asked
// are all integers positive?
// are there duplicate numbers in the array
// will there always be a solution available?
// what to return if there is no solution
// can there be multiple integers that add up to the target


// testcases
// if no pari available => null
// empty array => null
// if 1 element present => null  we are still looking for pair of numbers
//[1,6] => 7 => [0,1]


// O(LogN) - Logarithmic
// O(N) - Linear
// O(NLogN) - Linearthematic
// O(N^2) - Quadratic
// O(N^3) - Cubic
// O(N^N) - exponential
// O(!N) - Factorial
// O(2^N) - Exponential
// findTwoSum([1,3,7,9,2],11)

function findTwoSum(array,target){
    const numsMap = {};
    for(let p1 = 0;p1 <array.length;p1++){
      
       const currentMapVal = numsMap[array[p1]];
       if(currentMapVal >= 0){
        return [currentMapVal,p1];
       }else{
        const numToFind = target - array[p1];
        numsMap[numToFind] = p1;
       }
    }
    return null;
}