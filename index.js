const spinner_button = document.getElementById("spinner");
const body_div = document.getElementById("body")
const numPpl = document.getElementById("numPPL")
const face = document.getElementById("MY_FACE")
var textbox_input = ""
var spin_button = ""
var count = 0;
face.setAttribute("src","Photo from Maaz.jpg")
spinner_button.onclick = function(){
    body_div.innerHTML = "";
    var p = document.createElement("p")
    p.innerText = "Work in progress."
    p.setAttribute("id", "wip")
    body_div.appendChild(p)
    var input = document.createElement("input");
    input.setAttribute("id", "stuff");
    input.setAttribute("type", "text")
    input.setAttribute("oninput", "counting()")
    input.setAttribute("style", "width:500px; height:50px; font-size: 25px; ")
    input.setAttribute("placeholder", "Put options here, seperate with space")
    body_div.appendChild(input);
    textbox_input = document.getElementById("stuff");
    var spin = document.createElement("input")
    spin.setAttribute("id","start_spin")
    spin.setAttribute("type", "button")
    spin.setAttribute("onclick", "spinTheThingie()")
    spin.setAttribute("value", "Spin")
    body_div.appendChild(spin)
    spin_button = document.getElementById("start_spin")

}

function counting(){
    console.log(count)
}

function spinTheThingie(){
    let text = textbox_input.value.split(" ");
    if (!document.getElementById("choices")){
        let choices= document.createElement("div");
        choices.setAttribute("id", "choices")
        body_div.appendChild(choices)
        var choices_div = document.getElementById("choices")
    }
    else{
        var choices_div = document.getElementById("choices")
        choices_div.innerHTML = ""
    }
    for (let i = 0; i < text.length; i++){
        if (text[i].length > 0){
            let word = document.createElement("p");
            word.classList.add("choice")
            word.innerText = text[i]
            word.style.color = "#" + Math.floor(Math.random()*(16777215)).toString(16)
            word.style.border = "5px solid black"
            choices_div.appendChild(word);
        }    
    }
        let choice_num = 0;
        let choices = document.getElementsByClassName("choice")
        let rando = Math.floor(Math.random()*choices.length*3) + choices.length
        let numTImes = 0;
        // for (let i = 0; i < Math.floor(Math.random()*10);i++){
        let interval = setInterval(function(){
            for (let j = 0; j < choices.length; j++){
                if (j === choice_num){
                    choices[choice_num].style.border = "5px solid red";
                }
                else{
                    choices[j].style.border = "5px solid black"
                }
            }
            choice_num++
            if (choice_num ===choices.length){
                choice_num = 0
                console.log(choice_num)
            }
            if (numTImes === rando){
                clearInterval(interval)
            }
            numTImes++
        },1000/choices.length)

        // }
        

}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
