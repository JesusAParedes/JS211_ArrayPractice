// Challenge 1
const cars = ['Ford', 'Nissan', 'Kia', 'Toyota'];
console.log(cars.length);

// Challenge 2
const moreCars = ['Chevrolet', 'Suzuki', 'Hyundai', 'Honda'];

const totalCars = cars.concat(moreCars)
console.log(totalCars)

// Challenge 3

console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

// Challenge 4
const stringOfCars = totalCars.join();
console.log(stringOfCars);

// Challenge 5
const carsFromString = stringOfCars.split(',');
console.log(carsFromString);

// Challenge 6
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// Challenge 7
carsInReverse.sort(); //.sort puts it in order and returns it in order
console.log(carsInReverse.indexOf('Chevrolet'));

// Challenge 8
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];

const reptiles = pets.slice(4,6);
console.log(reptiles);
console.log(pets);

// Challenge 9
const removedReptiles = pets.splice(4,2,'hamster');
console.log(removedReptiles);
console.log(pets);

// Challenge 10
const removedPet = pets.pop();
console.log(removedPet);
console.log(pets);

// Challenge 11
pets.push(removedPet);
console.log(pets);

// Challenge 12
pets.shift();
console.log(pets);

// Challenge 13
pets.unshift('turtle');
console.log(pets);

// Challenge 14
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

// const addTwo = (num) => {
//     for (let i = 0; i < num.length; i++) {
//       console.log(num[i])
//         const newNumber = num[i];
//         let arrNumber = newNumber + 2
      
        
//         console.log('***adding 2 is', arrNumber);
//     }

// }
//       console.log(addTwo(numbers))

// numbers.forEach(addTwo());
    

numbers.forEach(function (num) {
    for (let i = 0; i < num.length; i++) {
        const newNumber = num[i];
        let arrNumber = newNumber + 2
    }
});

console.log(numbers)

