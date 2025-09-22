interface Enemy {
    name: string;
    strength: number;
    levelAsign?: number
}

class PlayGround{
    constructor(){
        console.log("Playground");

        const Alien:Enemy = {
            name:"Ninja Killer",
            strength:90,
            levelAsign:15
        }

        const Dog:Enemy = {
            name:"Barky",
            strength:40
        }

        const mixArray:(string|number|boolean)[] = ['a','b',1,2,true];
    }
}

export default PlayGround;