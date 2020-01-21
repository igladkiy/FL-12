class Fighter {
	constructor (obj){
		this.getName = () => obj.name;
		this.getDamage = () => obj.damage;
		this.getStrength = () => obj.strength;
        this.getAgility = () => obj.agility;
		this.getHealth = () => obj.hp;
        
		this.heal = hpHeal => {
			let health = this.getHealth();
			obj.hp += hpHeal;
			if (obj.hp > health) {
				obj.hp = health;
			}
		}
		this.Wins = 0;
        this.Losses = 0;
        
		this.kickDamage = damage => {
			obj.hp -= damage
			if (obj.hp < 0) {
				obj.hp = 0
			}
		}
		this.win = () => this.Wins++;
		this.losses = () => this.Losses++;
	}
	attack(fighter) {
        let prop = 100;
		if (Math.random()*prop > fighter.getAgility() + fighter.getStrength()) {
			fighter.kickDamage(this.getDamage())
			console.log( `${this.getName()} make ${this.getDamage()} damage to ${fighter.getName()}. 
${fighter.getName()} hp: ${fighter.getHealth()} ` );
		} else {
			console.log(`${fighter.getName()} attack missed`)
		}
	}
	logCombatHistory() {
		console.log(`Name: ${this.getName()}, Wins: ${this.Wins}, Losses: ${this.Losses}`)
	}
}

function battle(fighter1, fighter2) {
    let fight = true;
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        while(fight) {
            fighter1.getHealth() > 0 ? fighter1.attack(fighter2) : fight = false;
            fighter2.getHealth() > 0 ? fighter2.attack(fighter1) : fight = false;
        }
        if (fighter1.getHealth() > 0) {
            fighter1.win();
            fighter2.losses();
            console.log(`${fighter1.getName()} win!`);
        } else {
            fighter2.win();
            fighter1.losses();
            console.log(`${fighter2.getName()} win!`);
        }
    } else {
        let fighterName = '';
        fighter1.getHealth() === 0 ? fighterName = fighter1.getName() : fighterName = fighter2.getName();
        console.log(`${fighterName} is dead and cant't fight.`);
    }
}

const myFighter = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90});