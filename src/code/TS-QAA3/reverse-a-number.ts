/* Write a JavaScript function that reverse a number.
Example x = 32243; Expected Output : 34223 */
//using builtin method


// Function to get reverse number using builtin methods
export const reversedNumber =(n:number) => {
    let str:string = n.toString();
    let reversedString:string =str.split("").reverse().join("");
    let reversedNumber:number = parseInt(reversedString);
    return reversedNumber; 
}  

