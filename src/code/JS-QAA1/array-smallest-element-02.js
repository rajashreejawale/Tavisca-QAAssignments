/*Return smallest number from an array.
     Array Spec-
       a) [100, 2, 5, 12, 0]
       b) [-5, -10 , 100, 20, 30, -30, 12]
*/

// const a = [1,2,4,6,2];
// const b = [-5, -10 , 100, 20, 30, -30, 12]
// let smallestNumber = a[0];  
// console.log(getSmallestElement(a));
// getSmallestElement(b);

//Function to get smallest number in an array
function getSmallestElement(array) {
    let smallestNumber = array[0];
    for (let i=0; i<array.length;i++) {
        let value= array[i];
        smallestNumber = (value < smallestNumber) ? value: smallestNumber;  
    }
    return smallestNumber;
}

module.exports =getSmallestElement;