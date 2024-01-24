// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
// };

// const {firstName, lastName, age, eyeColor} = person;

const a = "test";
const b = true;
const c = 789;

const okObj = {a, b, c};

const firstName = "Jimmy";
const city = "Rotterdam";

var message = `Hello ${firstName} , have I met you before? I think we met in ${city} last summer no???`;


const isValidAge = (age = 10) => age;

const sym = Symbol("This is my first symbol");

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

