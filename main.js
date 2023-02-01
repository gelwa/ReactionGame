//retrieving HTML elements to interact with in JavaScript
const start_button = document.querySelector (".start-button");
const help_button = document.querySelector (".help-button");
const help_text = document.querySelector ("#helptext");
const exit = document.querySelector (".exit");

help_button.addEventListener('click', () => {
    if(help_text.style.display === 'none') {
        help_text.style.display = 'block';
    }
});

exit.addEventListener('click', () => {
    if(help_text.style.display === 'block') {
        help_text.style.display = 'none';
    } 
});

function openPage(pageUrl){
    window.open(pageUrl, "_self");
  }


//play.html

    
function getWord() {

    var word = [
        'up',
        'down',
        'left',
        'right',
    ];

    var wordNum = Math.floor(Math.random() * word.length);
      
     
    output.textContent = word[wordNum];
  }

  getWord();