function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "you may enter" : "Access denied";

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "Not available");


function moveCommand(direction) {
    var whatHappens;
    switch(direction) {
        case "forward":
            whatHappens = "You are moving forward";
            break;
        case "back":
            whatHappens = "You back";
            break;
        case "left":
            whatHappens = "you left";
            break;
        case "right":  
            whatHappens = "you right";
        default:
        whatHappens = "select a valid direction"; 
    }
    return whatHappens;
}