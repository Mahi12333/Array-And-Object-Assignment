const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Que 1: Sort the array find the min and max age
ages.sort()
console.log("Ages are",ages);

let minAge = ages[0]
console.log("Minimum age is",minAge);

let maxAge= ages[ages.length-1]
console.log("maximun age is",maxAge);

//Que 2 : Find the median age(one midlle item or two midlle items diivide by two)

// Ages are [19, 19, 20, 22,24, 24, 24, 25, 25,26]
let length = ages.length

let middleIndex  = Math.floor(length/2) 

if (length % 2 === 0) {
    let median = (ages[middleIndex-1]+ages[middleIndex])/2;
    console.log("Median Age:", median);
}else{
    let median = ages[middleIndex];
    console.log("Median Age:", median);
}

//Que 3 : Find the average age(all items divide by number of items)
// Calculate the sum of all ages
const sumOfAges = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the average age
const averageAge = sumOfAges / length;

console.log("Average Age:", averageAge);
