var numArray : number[] = [1, 2, 3, 4, 5];

//console.log(sumOfArrayElementsUsingReduceMethod(numArray))
//console.log(sumOfArrayElementsUsingReduceMethod([]))

// Using 'reduce' method
export const sumOfArrayElementsUsingReduceMethod = ((numArray: number[]) => {
    if (numArray.length === 0 ) {
        return 0;
    } else {
    let additionOfArrayElements: number = numArray.reduce((sum, indexElement) =>  { return sum + indexElement}, 0);
    return additionOfArrayElements;
    }
})
