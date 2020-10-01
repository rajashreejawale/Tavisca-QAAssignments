


// Iterate array to check each element divisability by 3,5 & 15
export const divisibleByCheck= (numArray:any[]) => {
    let resultArray:string[] =[];
    for(let i=0; i < numArray.length; i++) {
       if(numArray[i] % 3 == 0 && numArray[i] % 5 == 0 ) {
            resultArray.push(`${numArray[i]} divisible by 15`);
            //console.log(numArray[i] + " divisible by 15");
        } else if (numArray[i] % 5 == 0) {
            resultArray.push(`${numArray[i]} divisible by 5`);
            //console.log(numArray[i] + " divisible by 5");
        }else if (numArray[i] % 3 == 0 ) {
            resultArray.push(`${numArray[i]} divisible by 3`);
            //console.log(numArray[i] + " divisible by 3");
        } else {
            resultArray.push(`${numArray[i]} is not divisible by 3, 5 and 15`);
            //console.log(numArray[i] + " is not divisible by 3, 5 and 15");
        }          
    }
    return resultArray;
}