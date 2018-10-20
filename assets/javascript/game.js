// variables for the win & lose counter, counter
var wins = 0;
var losses = 0;
var counter = 0;

// give random number at the start of the game as the goal of the game

var targetNumber = Math.floor((Math.random()*101) + 19);
console.log(targetNumber);

$("#randNumber").text(targetNumber);

// give random number to each crystal

var numberOptions1 = Math.floor((Math.random()*12) + 1);
console.log(numberOptions1);
var numberOptions2 = Math.floor((Math.random()*12) + 1);
console.log(numberOptions2);
var numberOptions3 = Math.floor((Math.random()*12) + 1);
console.log(numberOptions3);
var numberOptions4 = Math.floor((Math.random()*12) + 1);
console.log(numberOptions4);

// click function on every image, everytime user click on image, the numbers add up to the total score

$(".crystal-image1").on("click", function() { 
    counter = counter + numberOptions1;
    console.log(counter);
    $('#totalScore').text(counter);
    if( counter == targetNumber){
        win();
    }
    else if (counter > targetNumber){
        lose();
    }
});

$(".crystal-image2").on("click", function() {
    counter = counter + numberOptions2;
    console.log(counter);
    $('#totalScore').text(counter);
    if( counter == targetNumber){
        win();
    }
    else if (counter > targetNumber){
        lose();
    }
});

$(".crystal-image3").on("click", function() {
    counter = counter + numberOptions3;
    console.log(counter);
    $('#totalScore').text(counter);
    if( counter == targetNumber){
        win();
    }
    else if (counter > targetNumber){
        lose();
    }
});

$(".crystal-image4").on("click", function() {
    counter = counter + numberOptions4;
    console.log(counter);
    $('#totalScore').text(counter);
    if( counter == targetNumber){
        win();
    }
    else if (counter > targetNumber){
        lose();
    }
});

// if user score is the same as computer generated number, user wins
// win counter goes up and game reset itself
// new random number come up

function win(){
    alert("You Win!");
    wins++
    $("#winCounter").text(wins);
    reset();
}

// if user score is more than computer generated number, user loses
// lose counter goes up and game reset itself
// new random number come up

function lose(){
    alert("You Lose!");
    losses++
    $("#loseCounter").text(losses);
    reset();
}

// reset game everytime user win or lose

function reset(){ 
    targetNumber = Math.floor((Math.random()*101) + 19);
    $("#winCounter").text(wins);
    $("#loseCounter").text(losses);
    $("#randNumber").text(targetNumber);
    numberOptions1 = Math.floor((Math.random()*12) + 1);
    numberOptions2 = Math.floor((Math.random()*12) + 1);
    numberOptions3 = Math.floor((Math.random()*12) + 1);
    numberOptions4 = Math.floor((Math.random()*12) + 1);
    counter = 0;
    $('#totalScore').text(counter);
}