const obj = {
    player: "Bobby",
    experience: 100,
    wizardLevel: false
}

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

const { player, experience} = obj;

// Template strings


const name = "sally";
const age = 34;
const pet = "horse";

// const greeting = "Hello " + name + "you seem to be doing " + greeting + "!"; // instead of this use

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

// Default argument 

function greet(name="", age=30, pet="cat") {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
 }

 // Symbol

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

// Arrow function

function add2(a, b) {
    return a + b;
}

const add = (a, b) => a + b; // if we have one return obj we can use arrow function without {}