// You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var randomNumber = function(min, max){
    var value = Math.floor(Math.random()*(max - min + 1) + min);
    return value;
};


//console.log(enemyNames);
//console.log(enemyNames.length);
//console.log(enemyNames[0]);
//console.log(enemyNames[3]);

//create function
var fight = function (enemy){
    

    //repeat and execute as long as the enemy-robot is alive
    while (playerInfo.Health > 0 && enemy.Health > 0) {
        //debugger;
        //place fight function here
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? 'FIGHT'or 'SKIP' to choose.");

    //if player choses to fight, then fight 
// if player choses to skip 
    if (promptFight==="skip" || promptFight==="SKIP"){
    //confirm skip 
    var confirmSkip =  window.confirm("Are you sure you'd like to quit");

    //if yes (true), leave fight
    if(confirmSkip){
        window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
    // subtract money from the playerMoney for skipping 
    playerInfo.money = math.max(0, playerInfo.money - 10);
    console.log("playerInfo.money", playerInfo.money)
    break;
    }
}
    //subtract the value of 'playerAttack' from the value of the 'enemyHealth' and use that result to up date the value in the 'enemy Health' variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    
    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerInfo.name + "attacked" + enemyName +"." + enemyName + "now has" + enemy.health + "health remaining."
        );

// check enemy's health 
if (enemy.health <= 0){
    window.alert(enemyName +"has died!");
    //award player money
    playerInfo.money = playerInfo.money + 20;
    //leave while () loop since enemy is defeated
    break;
    }
    else{
        window.alert(enemyName+"still has"+ enemy.health + "health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerInfo.health' and use that result to update the value in the 'playerHealth' variable.
 var damage = randomNumber(enemyAttack - 3, enemyAttack);
     
    enemy.health = Math.max(0, enemy.health - damage);

//Log a resulting message to the console so we know that it worked.
console.log(
enemyName + "attacked" + playerInfo.name + "." + playerInfo.name + "now has"+ playerInfo.health +"health remaining"
);
// check player's health 
if (playerInfo.health <= 0){
window.alert(playerInfo.name +"has died!");
// leave  while() loop if player is dead 
break;
}
else{
    window.alert(playerInfo.name +"still has"+ playerInfo.health+ "health left.");
}
}
};
     //wrapping for loop with a function to start a new game
  // fight each enemy-robot by looping over them and fighting them one at a time  
var startGame = function(){
    //reset player stats 
    playerInfo.reset();  
for(var i = 0; i < enemyInfo.length; i++) {
// if player still alive 
if (playerInfo.health> 0) {
    // alert player of round remeber arrays start at 0 
    
window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
// new enemy is pick based on index of enemyNAmes array
    var pickedEnemyObj = enemyInfo[i];
    //starting health
    pickedEnemyObj.Health = randomNumber(40,60);
    //debugger to check whats going on
    fight(pickedEnemyObj);
    // if we're not at the last enemy in the array
    if (playerInfo.health >0 && i , enemyInfo.length - 1){
        //ask if player wants to use the store before the next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        //if yes take the to the store() function
        if (storeConfirm){
        shop();
    }
}
//if player isn't alive   
else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
  // start game when page loads
}
}

endGame();
};

//function to end the entire game 
var endGame = function () {
    // if player is still alive, player wins!
    if (playerInfo.health> 0){
    window.alert ('The game has ended. Lets see how you did!');
    }
    else {
        window.alert ('You have lost your robot in battle! Game Over!');
    }
    // ask player if they'd like to play again now
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm){
        // restart game 
        startGame();
    }
    else{
        window.alert ('Thank you for playing Robot Gladiators! Come back soon!');
    }
};

var shop = function(){
    var shopOptionPrompt = window.prompt("Would you like to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");

    //switch case for action
    switch (shopOptionPrompt){
        case "REFILL": //new case
        case "refill":
            playerInfo.refillHealth();
            break;

        case"UPRADE": // new case     
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
            case "LEAVE":// new case
            case "leave":
                window.alert ("Leaving the store");
                break;
            default:
            window.alert("You did not pick a valid option. Try again");
                // call shop again for valid option
                shop();
                break;
    }
}

//player name prompt/ info
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
     health: 100,
     attack: 10,
     money: 10,
     reset: function() {
         this.health = 100;
         this.money = 10;
         this.attack = 10;
     },
    refillHealth: function () {
        if (this.money >=7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        }
        else{
            window.alert("You dont have enough money!");
        }
    },//COMMA!
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
    }
    else{
    window.alert("You dont have enough money!");
    }
    }

// enemy information
var enemyInfo = [
{
    name: 'Roborto',
    attack: randomNumber(10, 14)
},
{
    name:'Amy Android',
    attack: randomNumber(10, 14)
},
{
    name:'Robo Trumble',
    attack: randomNumber(10, 14)
}
];

startGame();
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// *********for loop structure *************************
// for([initial expression]; [condition]; [increment expression]) {
//    statement
// }