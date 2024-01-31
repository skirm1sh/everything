class player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends player {
    constructor(name, type) {
        super(name, type)
        console.log("wizard", this);
    }
    play() {
        console.log(`Weee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");