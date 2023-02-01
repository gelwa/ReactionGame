//random div display
var arrow = document.querySelector(".arrows");
var score = document.querySelector(".score");
let counter = 0;


function openPage(pageUrl){
    window.open(pageUrl, "_self");
};


function drawScore() {
    score.textContent = "SCORE: " +counter;
}


function getWord() {

    var word= [
        'UP',
        'DOWN',
        'LEFT',
        'RIGHT',
    ];

    var wordNum = Math.floor(Math.random() * word.length);

    arrow.textContent = word[wordNum];
    drawScore();


    /*var arroww= [
        var word= [
            '&uarr',
            '&darr',
            '&rarr',
            '&larr',
    ];

    var wordNum = Math.floor(Math.random() * word.length);

    arrow.textContent = word[wordNum]; 
*/

}

getWord();

//key press
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && arrow.textContent === "UP") {
        counter++;
        getWord();
    }
    else if (event.key === 'ArrowDown' && arrow.textContent === "DOWN") {
        counter++;
        getWord();
    }
    else if (event.key === 'ArrowLeft' && arrow.textContent === "LEFT") {
        counter++;
        getWord();
    }
    else if (event.key === 'ArrowRight' && arrow.textContent === "RIGHT") {
        counter++;
        getWord();
    }
});

