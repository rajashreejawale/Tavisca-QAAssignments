/* Write a function that converts an object into an array, 
where each element represents a key-value pair.
 Example- toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] 
 Notes Return an empty array if the object is empty. */

 //Define an object
//   const object1 ={'a': 1, 'b': 2}; 
//   const object2 ={};
//   console.log(objectToArrayConersion(object1));
//   console.log(objectToArrayConersion(object2));
 
 //Function to get array element as object's key value pair 
 function objectToArrayConersion(object1) {
     if(Object.keys(object1).length !== 0) {
         const array1 = Object.entries(object1);
         return array1;
     } else {
         let array2 = Object.entries(object1);
         return array2;
     }
 }
 
 module.exports = objectToArrayConersion;
 
 
 
 
 
 
  
 
 