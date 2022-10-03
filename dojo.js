//========================================================
// Random Number Functions
//========================================================

const random = (num) => {
    return Math.floor(Math.random() * num); 
}; 

//========================================================
// Fighter Class for Characters
//========================================================

class anime {
    constructor(name, special) {
        this.name = name;
        this.moves = [
            {name: 'Punch', strength: random(3)},
            {name: 'Kick', strength: random(4)},
            {name: special, strength: random(8)},
        ];
        this.life = 50 //Over 9,000 
    }

    attack(target){ 
        const moves = random(this.moves.length);
        const damage = random(this.moves[moves].strength);
        target.life -= damage

        console.log(`${this.name} attacked ${target.name} with ${this.moves[moves].name}
        for ${damage} leaving them with ${target.life}.`)
    }
}

//========================================================
// Create My Fighter
//========================================================

const Luffy = new anime('Luffy', 'Gum Gum Pistol');
const Deku = new anime('Deku', 'Detroit Smash');


//========================================================
// Toggles
//========================================================

let gameOver = true;
let luffyDeku = true;

while(gameOver) {
    if(luffyDeku) {
        Luffy.attack(Deku)
    } else {
        Deku.attack(Luffy)
    }

    luffyDeku = !luffyDeku

    if(Luffy.life <=0){
        console.log('DETROIT SMASHHHHHH!!!!!!! Luffy is finished, Deku advances to the next round of the tournament!')
        gameOver = false
    }
    if(Deku.life <=0){
        console.log('GUM GUM PISTOL!!!!!! Deku is finished, Luffy advances to the next round of the tournament!')
        gameOver = false
    }
}