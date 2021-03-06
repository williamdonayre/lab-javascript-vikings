// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){
    return this.strength;
    }
    this.receiveDamage = function(damage){
        this.health -= damage;
    }

}

// Viking
Viking.prototype = Object.create(Soldier.prototype);
function Viking(name, health, strength){
    this.name = name;
    Soldier.call(this, health, strength);
    this.strength = strength;
    this.attack = function(){
        return this.strength;
        }  
    this.receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        } else {
        return this.name + " has died in act of combat";}
    }
    this.battleCry = function (){
        return "Odin Owns You All!";
    }
}
Viking.prototype.constructor = Viking;



// Saxon
Saxon.prototype = Object.create(Soldier.prototype);
function Saxon(health, strength) {
Soldier.call(this, health, strength);
    this.attack = function(){
        return this.strength;
    }  
    this.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return "A Saxon has received " + damage + " points of damage";
    } else {
    return "A Saxon has died in combat";}
    }
}
Saxon.prototype.constructor = Saxon;

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
War.prototype.addViking = function(Viking) {
    this.vikingArmy.push(Viking);
    }
War.prototype.addSaxon = function(Saxon) {
    this.saxonArmy.push(Saxon);
    } 
