var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d');

const colors = ['red', 'blue', 'yellow', 'green']
let sequence = []
let userInput = []
let score = 0

function addToSequence(){
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(newColor)
    console.log(sequence)
}

addToSequence();

addToSequence();
addToSequence();