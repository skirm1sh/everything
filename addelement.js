var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");

const inputLength = () => {
    return input.value.length;
}

const removeElement = (event) => {
    var li = event.target;
    ul.removeChild(li);
}

const addElement = () => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.addEventListener("click", function() {
        ul.removeChild(li);
    })
    input.value = "";
}

const addAfterClick = () => {
    if (inputLength() > 0) {
        addElement();
    }
}

const addAfterEnter = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        addElement();
    }
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keydown", addAfterEnter);
for (var i=0; i < liList.length; i++) {
    liList[i].addEventListener("click", removeElement);
}