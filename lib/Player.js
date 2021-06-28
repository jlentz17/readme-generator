// Make a function declaration that has a parameter setting name equal to an empty string
// within the function, define name as this.name

function Player(name = "") {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
}

module.exports = Player;