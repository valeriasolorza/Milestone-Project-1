var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d');

const colors = ['red', 'blue', 'yellow', 'green']
let sequence = []
let userInput = []
let score = 0

// Adds new color to end of sequence 
function addToSequence() {
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(newColor)
    console.log(sequence)
}


// displays Simon's Sequence
function displaySequence() {
    sequence.forEach(element => {
        setTimeout(() => {
            animate(element)
        }, 1000)
        console.log(element)
    });

}

function animate(color) {
    //play animation and sound for chosen element
    const button = document.getElementById(color);
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 500);
    //add sound
}

async function getUserInput() {
    //add user click to userInput array

    let buttons = document.querySelectorAll('.color-button')
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            userInput.push(button.id)
            animate(button.id)
            checkInput()
        })
    })
}

//compares user input to simon's sequence
function checkInput(element) {
    let index = userInput.length - 1;

    if (userInput[index] === sequence[index]) {
        score++
        userInput = []
        addToSequence();
        displaySequence;
    }
    else {
        alert("WRONG SEQUENCE. SIMON WINS")
        restartGame();
    }
}

//begin game
function startGame() {
    addToSequence()
    displaySequence()
    getUserInput
}

function restartGame() {
    sequence = []
    userInput = []
    score = 0
}

startGame()
