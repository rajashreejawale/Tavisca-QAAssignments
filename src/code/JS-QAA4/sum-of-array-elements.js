/* Write a JavaScript program to compute the sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]  Expected Output : 21 */

// var numArray = [1, 2, 3, 4, 5, 6];
// console.log(sumOfArrayElements(numArray));
// console.log(sumOfArrayElement1(numArray));

// Using 'reduce' method
function sumOfArrayElements(numArray) {
if (numArray.length === 0 ) {
    return'Given array is empty :'+numArray;
} else {
let additionOfArrayElements = numArray.reduce((sum,indexElement) => 
 { return sum + indexElement},0);
return additionOfArrayElements;
}
}

//using traditional way
function sumOfArrayElements1(numArray){
let sumOfArrayElements =0;
for( let i=0; i<numArray.length; i++){
    sumOfArrayElements += numArray[i];
}
    return sumOfArrayElements;
}

module.exports = sumOfArrayElements;
module.exports = sumOfArrayElements1;