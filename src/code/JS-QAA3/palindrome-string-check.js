/* Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

//checkStringPalindrome ('leve');
//console.log(checkPalindrome('level1'));
//No lemon, no melon
//checkPalindrome('nurses run');

//Function to check if String is palindrome using traditional way
function checkPalindrome(str){ 
    // convert string to array
    var reg = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(reg , '');
    var stringArray = str.split('');
    var l =stringArray.length;
    let i=0;
    while(i<l){
        if(stringArray[i] === stringArray[l-1-i]){
            return 'Palindrome';
            } else {
            return 'Not Palindrome';
            }
        i++;
    }
}


//Function to check if String is palindrome using built in methods
function checkStringPalindrome(str){
    // convert string into lowercase and remove all alphanumeric characters
    var reg = /[^A-Za-z0-9]/g;
    var lowercaseString = str.toLowerCase().replace(reg , '');
    // Reverse String
    var reversedString = lowercaseString.split('').reverse().join('');
    // check if reversedstring  and lowercaseString are equal
    if(reversedString === lowercaseString){
        return 'Palindrome';
    } else {
        return 'Not Palindrome';
    }   
}


module.exports =checkPalindrome;
module.exports =checkStringPalindrome;
    