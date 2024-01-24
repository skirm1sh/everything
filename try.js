var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

const inputLength = () =>  {
     return input.value.length;
}

const addElement = () => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.addEventListener("click", function () {
        ul.removeChild(li);
    })
    input.value = "";
}

const addAfterClick = () => {
    if (inputLength() > 0) {
        addElement();
    }
}

const addAfterEnter = () => {
    if (inputLength() > 0 && event.keyCode === 13) {
        addElement();
    }
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keydown", addAfterEnter);