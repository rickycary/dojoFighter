//========================================================
// Random Number Functions
//========================================================

// Random number function 
const random = (num) => {
    return Math.floor(Math.random() * num); 
}; 

//========================================================
// Fighter Class for Characters
//========================================================

// Class one is One Piece with their fighter Luffy 
class onePiece {
    constructor(name, special, altspecial, ultspecial) {
        this.name = name;
        this.moves = [
            {name: 'Punch', strength: 2}, // Punch deals 2 dmg
            {name: 'Kick', strength: 3}, // Kick deals 3 dmg
            {name: special, strength: 6}, // special deals 6 dmg
            // Specials deal random damage but much greater hits can be achieved and can also miss if attack = 0
            {name: altspecial, strength: random(25)},
            {name: ultspecial, strength: random(35)},


        ];
        // Health
        this.life = 50 //Over 9,000 
    }

    // Function for attack 
    attack(target){ 
        const moves = random(this.moves.length);
        const damage = random(this.moves[moves].strength);
        target.life -= damage

    // Logs after every attack 
        console.log(`${this.name} attacked ${target.name} with ${this.moves[moves].name}
        for ${damage} leaving them with ${target.life}.`)
    }
}

// Class two is My Hero Academia with their fighter Deku
class myHero {
    constructor(name, special, altspecial, ultspecial) {
        this.name = name;
        this.moves = [
            {name: 'Punch', strength: 2}, // Punch deals 2 dmg
            {name: 'Kick', strength: 3}, // Kick deals 3 dmg
            {name: special, strength: 6}, // special deals 6 dmg
            // Specials deal random damage but much greater hits can be achieved and can be evaded if attack = 0
            {name: altspecial, strength: random(25)},
            {name: ultspecial, strength: random(35)},

        ];
        // Health
        this.life = 50
    }
    // Function for attack
    attack(target){
        const moves = random(this.moves.length)
        const damage = random(this.moves[moves].strength)
        target.life -= damage

    // Logs after every attack
        console.log(`${this.name} attacked ${target.name} with ${this.moves[moves].name}
        for ${damage} leaving them with ${target.life}.`)
    }
}

//========================================================
// Create My Fighter
//========================================================

// Creates variable to assign fighter based on class
// Also assigns their special moves 
const Luffy = new onePiece('Luffy', 'Gum Gum Pistol', 'Gum Gum Red Hawk', 'Gum Gum King Kong Gum');
const Deku = new myHero('Deku', 'Detroit Smash', 'Blackwhip', 'One For All');


//========================================================
// Toggles
//========================================================

// Ends game
let gameOver = true;
let luffyDeku = true;

// Loop for attacks till game over
while(gameOver) {
    if(luffyDeku) {
        Luffy.attack(Deku)
    } else {
        Deku.attack(Luffy)
    }

    luffyDeku = !luffyDeku

    // Finishing sequence for when the fight ends 
    if(Luffy.life <=0){
        console.log('PLUS ULTRA!!!!!!! Luffy is finished, Deku advances to the next round of the tournament!')
        gameOver = false
    }
    if(Deku.life <=0){
        console.log('GUM GUM PISTOL!!!!!! Deku is finished, Luffy advances to the next round of the tournament!')
        gameOver = false
    }
}