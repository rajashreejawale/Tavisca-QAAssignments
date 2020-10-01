
//Function to check if String is palindrome using built in methods
export const checkStringPalindrome =(str:string) =>{
    // convert string into lowercase and remove all alphanumeric characters
    let reg = /[^A-Za-z0-9]/g;
    let lowercaseString:string = str.toLowerCase().replace(reg , '');
    // Reverse String
    var reversedString:string = lowercaseString.split('').reverse().join('');
    // check if reversedstring  and lowercaseString are equal
    if(reversedString === lowercaseString){
        return 'Palindrome';
    } else {
        return 'Not Palindrome';
    }   
}
