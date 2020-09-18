/* Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[] */
// _getFirstNElements([7, 8, 1, 2]);
// _getFirstNElements([]);
// _getFirstNElements([7, 8, 1, 2], 3);
// _getFirstNElements([7, 8, 1, 2], 6);
// _getFirstNElements([7, 8, 1, 2], -3);
// _getFirstNElements([7, 8, 1, 2]);
// _getfirstElementTraditional([7, 8, 1, 2], 2);

//console.log(getfirstElementRecurssion([]));

// Using inbuilt array method slice
function getFirstNElementsUsingSlice(array, n = 1) {  //specify default value as 1
    console.log(array.slice(0, n));
}

//Using traditional looping way
function getfirstElementTraditional(array, n = 1) {
    let tempArray = [];
    let i=0
        while(i <n){
            tempArray.push(array[i]);
            i++;
        }
        return tempArray;
}

// using resursion function
function getfirstElementRecurssion(array, n = 1) {
    let tempArray = [];  
    // Check if n negative number
    if(n <= 0){
        return [];
    } else {
    //Check if emppty array
    if(array.length === 0){
        return [];
    } else {
    //Push element into tempArray if index < n(elements to etract)
    const addElement = index => {
        if (index < n) {
            tempArray.push(array[index]);
            addElement(index+1); 
        }     }
    addElement(0); // call function with index value as 0
    return tempArray;
    }
}
}

module.exports = getfirstElementRecurssion;
module.exports = getFirstNElementsUsingSlice;
module.exports = getfirstElementTraditional;
