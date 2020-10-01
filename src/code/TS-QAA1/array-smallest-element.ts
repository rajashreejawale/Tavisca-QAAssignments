
//Function to get smallest number in an array
export const getSmallestElement = (array:number[]) =>{
    let smallestNumber:number = array[0];
    for (let i=0; i<array.length;i++) {
        let value= array[i];
        smallestNumber = (value < smallestNumber) ? value: smallestNumber;  
    }
    return smallestNumber;
}

