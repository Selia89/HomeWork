class Person { // Базовый класс
    constructor(name, gender) { // Конструктор
        this._name = name; // Создание и инициализация поля
        this._friends = [ ];
        this._gender = gender;
    }
  
    setFriend(other) {
    if (this._friends.indexOf(other) == -1) {
            this._friends.push(other);
            other._friends.push(this);
        }
    }
    
    hasFriend(other) {
        return this._friends.includes(other);
    }

    marry(pers) {
        if (this._spouse === "single" && pers._spouse === "single" && this._gender !== pers._gender) {
            this._spouse = pers;
            pers._spouse = this;
            if (this._friends.indexOf(pers) !== -1) {
                this._friends.splice(this._friends.indexOf(pers), 1);
            }
        } else {
            console.log("Однополые браки и многожонство у нас не приняты");
        }
    }

}

class Man extends Person {
    constructor(name, _friends) {
        super(name, _friends);
        this._gender = "man";
        this._spouse = "single";
    }
}

class Woman extends Person {
    constructor(name, _friends) {
        super(name, _friends);
        this._gender = "woman";
        this._spouse = "single";
    }
}

const ivan = new Man("Ivan");
const anna = new Woman("Anna");
const sasha = new Man("Sasha");

ivan.setFriend(anna);
ivan.marry(anna);

console.log(ivan);
console.log(anna);
