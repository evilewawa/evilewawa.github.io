let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p= document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function randomChoice(){
    const choices = ["r", "p", "s"]
    num =parseInt(Math.random()*3)
    return choices[num]
}

function convertToWord(letter){
    if (letter === "p"){
        return "paper"
    }
    else if (letter === "r"){
        return "rock"
    }
    else{
        return "scissors"
    }
}



function win(user, comp){
    const userChoice_div = document.getElementById(user)
    userScore++
    userScore_span.innerHTML = userScore

    result_p.innerHTML = (convertToWord(user) + " beats " + convertToWord(comp) + ", you win!")
    userChoice_div.classList.add("green-glow")
    setTimeout(function() {userChoice_div.classList.remove("green-glow")}, 700)
}

function lose(user, comp){
    const userChoice_div = document.getElementById(user)
    computerScore++
    computerScore_span.innerHTML = computerScore

    result_p.innerHTML = convertToWord(comp) + " beats " + convertToWord(user)+ ", you lose!"
    userChoice_div.classList.add("red-glow")
    setTimeout(function() {userChoice_div.classList.remove("red-glow")}, 700)

}
function draw(user, comp){
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = "it's a draw!"
    userChoice_div.classList.add("gray-glow")
    setTimeout(function() {userChoice_div.classList.remove("gray-glow")}, 700)
}

function game(inp){
    compChoice = randomChoice()
    switch (inp + compChoice){
        case "rp":
        case "ps":
        case "sr":
            lose(inp, compChoice);
            break;
        case "pr":
        case "sp":
        case "rs":
            win(inp, compChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(inp, compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click", function(){
        game("r")
    })
    paper_div.addEventListener("click", function(){
        game("p")
    })
    scissors_div.addEventListener("click", function(){
        game("s")
    })
}

main()
