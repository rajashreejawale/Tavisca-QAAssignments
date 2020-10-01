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

// using resursion function
export const getfirstElementRecurssion=(array:number[], n:number = 1) => {
    let tempArray:number[] = [];  
    // Check if n negative number
    if(n <= 0){
        return [];
    } else {
    //Check if emppty array
    if(array.length === 0){
        return [];
    } else {
    //Push element into tempArray if index < n(elements to etract)
    const addElement= index => {
        if (index < n) {
            tempArray.push(array[index]);
            addElement(index+1); 
        }     }
    addElement(0); // call function with index value as 0
    return tempArray;
    }
}
}