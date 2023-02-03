//random div display
var directions = document.querySelector(".directions");
var words = document.querySelector(".words");
var arrows = document.querySelector(".arrows");
var score = document.querySelector(".score");
var end = document.querySelector (".end");
let counter = 0;


//function to end game after 20 seconds
setTimeout(() => {
    end.style.display = 'block';
    directions.textContent = "WAITING FOR PLAYER";

}, 20000);

//function to open a page after clicking
function openPage(pageUrl){
    window.open(pageUrl, "_self");
};

//function to show score
function drawScore() {
    score.textContent = "SCORE: " +counter;
}

//Function to randomly display words and arrows
//draws score whenever function is called
function getDirections() {


    var word= [
        'UP',
        'DOWN',
        'LEFT',
        'RIGHT',
    ];

    var wordNum = Math.floor(Math.random() * word.length);

    words.textContent = word[wordNum];


    var arroww= [
        "\u2190",
        "\u2191",
        "\u2192",
        "\u2193",
    ];

    var wordNum = Math.floor(Math.random() * arroww.length);
    arrows.textContent = arroww[wordNum]; 

    drawScore();

    end.textContent = "THE ROUND HAS ENDED. YOUR SCORE: " +counter;

}

getDirections();


//function to react on key press, calls getDirection() for new directions
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && words.textContent === "UP") {
        counter++;
        getDirections();
    }
    else if (event.key === 'ArrowDown' && words.textContent === "DOWN") {
        counter++;
        getDirections();
    }
    else if (event.key === 'ArrowLeft' && words.textContent === "LEFT") {
        counter++;
        getDirections();
    }
    else if (event.key === 'ArrowRight' && words.textContent === "RIGHT") {
        counter++;
        getDirections();
    }
});


