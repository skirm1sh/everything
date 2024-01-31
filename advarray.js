// Advanced arrays

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log("forEach", double);

// Map, 

// const mapArray = array.map((num) => {
//     return num * 2;
// });

const mapArray = array.map(num => num * 2);

console.log("Map", mapArray);

// Filter

// const filtrArray = array.filter(num => {
//     return num > 5
// }); 

// if we have one thing to return, we can do it shortly, for example:

const filtrArray = array.filter(num => num > 5);

console.log("filter", filtrArray);

// Reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log("reduce", reduceArray);



