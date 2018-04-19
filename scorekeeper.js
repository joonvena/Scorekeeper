var player1 = document.querySelector("#player1");
var player2 = document.getElementById("player2");
var resetButton = document.getElementById("reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var playingTo = document.querySelector("#toWin");
var input = document.querySelector("input");
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5;
var numDisplay = document.getElementById("num");
var WinnerIs = document.querySelector("#winnerIs");
var body = document.querySelector("body");


player1.addEventListener("click", function(){
    if(!gameOver) {
        player1Score++;
        if(player1Score === winningScore){
            gameOver = true;
            p1display.classList.add("winner");
            WinnerIs.textContent = ("Player one!");
            
        }
        p1display.textContent = player1Score;
        
    }
});

player2.addEventListener("click", function(){
    if(!gameOver) {
        player2Score++;
        if(player2Score === winningScore){
            gameOver = true;
            p2display.classList.add("winner");
            WinnerIs.textContent = ("Player two!")
        }
    
p2display.textContent = player2Score;
    }
});

resetButton.addEventListener("click", function(){
reset();
});
    function reset(){
   player1Score = 0;
   player2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    WinnerIs.textcontent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
    }

numDisplay.addEventListener("change", function() {
    playingTo.textContent = input.value;
    winningScore = Number(input.value);
    reset();
});






