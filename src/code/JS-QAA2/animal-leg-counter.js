const animalArray =[
    {'animalname' :'chicken', 'animalleg' : 2,'animalcount' : 1}, 
    {'animalname':'cow', 'animalleg' : 4, 'animalcount' : 1},
    {'animalname':'pig', 'animalleg' : 4, 'animalcount' : 1},
    {'animalname':'spider', 'animalleg' : 8, 'animalcount' : 3},
    ];
    
    console.log(totalAnimalLegs(animalArray));
    
    // function to get total animal legs
   function totalAnimalLegs(animalObj) {
    let temp, animal;
    let res=0
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

module.exports = totalAnimalLegs;