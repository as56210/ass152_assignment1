// This is the JavaScript to hide the bottom image on the home page.
function hideImage() {
    console.log("Hide button clicked.")
    document.getElementById('HistoryIMG').style.display = 'none';
    
}

const hideElement = document.querySelector('#hideButton');
if (hideElement){
    hideElement.addEventListener('click', hideImage);
}

// This is the JavaScript to change the color of the background.
function changeColors() {
    console.log("Color change.");
    document.body.style.backgroundColor = 'lightblue';
}

const colorChange = document.querySelector('#colorButton');
if (colorChange){
    colorChange.addEventListener('click',changeColors);
}