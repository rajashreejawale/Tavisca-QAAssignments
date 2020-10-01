/*A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
Assume on your own for subtotal for each species and You have to implement a function that returns the total number of legs of all the animals.*/

const animalArray:any[] =[
    {'animalname' :'chicken', 'animalleg' : 2,'animalcount' : 1}, 
    {'animalname':'cow', 'animalleg' : 4, 'animalcount' : 1},
    {'animalname':'pig', 'animalleg' : 4, 'animalcount' : 1},
    {'animalname':'spider', 'animalleg' : 8, 'animalcount' : 3},
    ];
    
   // function to get total animal legs
   export const totalAnimalLegs = (animalObj:object) => {
    let temp:number; 
    let animal:string;
    let res:number=0
    for(animal in animalObj) {
        // check for empty element
        if(Object.keys(animalObj[animal]).length === 0){
            return 'One of the Element is empty, please correct data';
        } else {
        temp =animalObj[animal].animalleg * animalObj[animal].animalcount;
        res=res+temp;
        }
    }
     return res;
    }