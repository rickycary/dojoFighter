const randomNum = (num) => {
    return Math.floor(Math.random() * num);
};


class Fighter {
    constructor(name, special){
        this.name = name;
        this.moves = [
            {name: 'Punch', strength: randomNum(10) },
            {name: 'Kick', strength: randomNum(10) },
            {name: special, strength: randomNum(20) },
        ];
        this.life = 30;
    }

    attack(target){

        const move = randomNum(this.moves.length);

        const damage = randomNum(this.moves[move].strength);

        target.life -= damage

        console.log(`${this.name} attacked ${target.name} with ${this.moves
        [move].name} for ${damage} leaving them with ${target.life}.`)

    }
}

const Ken = new Fighter('Ken', 'Shoryuken');
const Ryu = new Fighter('Ryu',  'Hadoken');

let gameOver = true;
let kenRyu = true;

while(gameOver) {
    if (kenRyu) {
        Ken.attack(Ryu)
    } else {
        Ryu.attack(Ken)
    }


kenRyu = !kenRyu; 

if (Ken.life <= 0){
    console.log('Ken is Dead, Ryu wins')
    gameOver = false
}

if (Ryu.life <=0){
    console.log ('Ryu is Dead, Ken wins')
    gameOver = false 

}
}