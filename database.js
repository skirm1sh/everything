var database = [
    {
        username: "irakli",
        password: "irakli2"
    },
    {
        username: "qeti",
        password: "qeti2"
    },
];

var newsFeed = [
    {
        username: "qeti",
        timeline: "I luv Iku too too much"
    },
    {
        username: "Iku",
        timeline: "Luv Qeti too too much"
    },
];

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++) {
    if (database[i].username === user &&
        database[i].password === pass){
            return true;
        }
    } return false;
}

function signIn(user, pass) {
    if (isUserValid(user,pass)) {
        console.log(newsFeed);
    } else {
        alert("Oops,I dont know you");
    }
}

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

signIn(userNamePrompt, passwordPrompt);