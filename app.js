var startGame = function() {

    var userChoice =prompt("Do you choose rock, paper or scissors?");
    if (userChoice != "rock" && "paper" && "scissors") {
    userChoice = prompt("Incorrect value, please input either rock, paper, or scissors.")
    }

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 

    alert("Computer chose: " + computerChoice);
    alert("User choose:" + userChoice);


var compare = function(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        return "The result is a tie!";
    }

    else if(userChoice === "rock") {
     if (computerChoice === "scissors") {
        return "You win!";
    alert("return");
    }
     else {
       return "You loose!";
    alert("return");
    } 
}
                            
    else if (userChoice === "paper") {  
     if(computerChoice === "rock") {
       return "You win!";
    alert("return");
    }    
     else {
       return "You loose!";
    alert("Loose!");
    }
}     
     
    else if(userChoice === "scissors") {
     if (computerChoice === "rock") {
       return "You win!";
    alert("return");
    } 
     else {
       return "You loose!";
     alert("return");
    }
}        
    
    else { 
       return "Inappropriate choice, please only enter rock, paper or scissors.";
    }

};

var result = compare(userChoice,computerChoice);
    if (result === "The result is a tie!") {
        alert("it's a tie!");   
    } 

    else if (result === "inappropriate choice" ) {
        alert("inappropriate choice");
    }

    else {
       alert(result);
    }

}

document.getElementById("play_bt").addEventListener("click", function() {
        startGame();
    } 
);



