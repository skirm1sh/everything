let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "try and copy me"
    }
};


let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log("clone", clone);
console.log("super", superClone);