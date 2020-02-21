var wins = 0;
var losses = 0;
var playerScore = 0;
var targetscore;
var crystalone;
var crystaltwo;
var crystalthree;
var crystalfour;
var score;
//Returns a random integer between a given min and max
function getRandomNum(min, max){
    score= Math.floor(Math.random() * (max -min + 1)) + min;
    return score;
};
//Sets a random number between 19-120
function getTargetNum(){
    targetscore =getRandomNum(19, 120);
    $('#goal-score').text(targetscore);
    return targetscore;
};

//sets a random number between 1-12 to each crystal
function getCrystalnum(){
    crystalone= getRandomNum(1, 12);
    crystaltwo=getRandomNum(1, 12);
    crystalthree=getRandomNum(1, 12);
    crystalfour=getRandomNum(1, 12);


}
//restarts the game
function intializeGame(){
    playerScore=0;
    getRandomNum();
    getTargetNum();
    getCrystalnum();
    updateGame();
};
//updatesGame
function updateGame(){
    
    $('#current-score').text(playerScore);
    $('#wins').text(wins);
    $('#losses').text(losses);
    
}
//check to see if he wins or lose or quits
function checkWin(){
   
    if(targetscore === playerScore){
        wins++;
        alert("You win! Start Over");
        intializeGame();
        updateGame();
    }

    else if(targetscore < playerScore){
        losses++;
        alert("You Lose! Start Over");
        intializeGame();
        updateGame();
    }

    else{
        return false;
    }
};

//launches the game, when you click on a crystal it adds the value to the players score, updates the game and check to see if user won
$(document).ready(function(){
    
    intializeGame();
   
    
    $('#crystalone').on("click", function(){
        playerScore +=crystalone;
        updateGame();
        checkWin();
    });

    $('#crystaltwo').on("click", function(){
        playerScore +=crystaltwo;
        updateGame();
        checkWin();
    });

    $('#crystalthree').on("click", function(){
        playerScore +=crystalthree;
        updateGame();
        checkWin();
    });
    $('#crystalfour').on("click", function(){
        playerScore +=crystalfour;
        updateGame();
        checkWin();
    });

});

