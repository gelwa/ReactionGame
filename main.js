//retrieving HTML elements to interact with in JavaScript
const start_button = document.querySelector (".start-button");
const help_button = document.querySelector (".help-button");
const help_text = document.querySelector ("#helptext");
const exit = document.querySelector (".exit");

//function to show help text: opens a pop up/new div when clicked
help_button.addEventListener('click', () => {
    if(help_text.style.display === 'none') {
        help_text.style.display = 'block';
    }
});

//function to exit help box (hides div)
exit.addEventListener('click', () => {
    if(help_text.style.display === 'block') {
        help_text.style.display = 'none';
    } 
});


//function to open a new page when clicked
function openPage(pageUrl){
    window.open(pageUrl, "_self");
  }



 