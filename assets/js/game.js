//player name prompt
var playerName = window.prompt("What is your robot's name?");
 var playerHealth = 100;
 var playerAttack = 10;
 var playerMoney = 10;
// You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto","Amy Android","Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//create function
var fight = function (enemyName){
    

    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
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
        window.alert(playerName + "has decided to skip this fight. Goodbye!");
    // subtract money from the playerMoney for skipping 
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
    break;
    }
}
    //subtract the value of 'playerAttack' from the value of the 'enemyHealth' and use that result to up date the value in the 'enemy Health' variable 
    enemyHealth = enemyHealth - playerAttack;
    
    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + "attacked" + enemyName +"." + enemyName + "now has" + enemyHealth + "health remaining."
        );

// check enemy's health 
if (enemyHealth <= 0){
    window.alert(enemyName +"has died!");
    //award player money
    playerMoney = playerMoney + 20;
    //leave while () loop since enemy is defeated
    break;
    }
    else{
        window.alert(enemyName+"still has"+ enemyHealth + "health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;

//Log a resulting message to the console so we know that it worked.
console.log(
enemyName + "attacked" + playerName + "." + playerName + "now has"+ playerHealth +"health remaining"
);
// check player's health 
if (playerHealth <= 0){
window.alert(playerName +"has died!");
// leave  while() loop if player is dead 
break;
}
else{
    window.alert(playerName+"still has"+ playerHealth + "health left.");
}
}
}
     
  // fight each enemy-robot by looping over them and fighting them one at a time  
for(var i = 0; i < enemyNames.length; i++) {
// if player still alive 
if (playerHealth > 0) {
    // alert player of round remeber arrays start at 0 
    
window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
// new enemy is pick based on index of enemyNAmes array
    var pickedEnemyName = enemyNames[i];
    //starting health
    enemyHealth = 50;
    //debugger to check whats going on
    fight(pickedEnemyName);
}
//if player isn't alive   
else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}



// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// *********for loop structure *************************
// for([initial expression]; [condition]; [increment expression]) {
//    statement
// }