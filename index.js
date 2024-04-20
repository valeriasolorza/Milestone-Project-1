const colors = ['red', 'blue', 'green', 'yellow']
let sequence = []
let userInput = []
let score = 0

const startButton = document.querySelector('.js-start')
const info = document.querySelector('.js-info')

const heading = document.querySelector('.js-heading')
const buttonContainer = document.querySelector('.js-container');


function nextRound() {
    score++;
    // console.log(score)

    buttonContainer.classList.add('unclickable')
    info.textContent = "Wait for Simon"
    heading.textContent = 'Level: ' + score


    //copies all the elements in the sequence
    const nextSequence = [...sequence]
    nextSequence.push(addToSequence())
    displaySequence(nextSequence)

    sequence = [...nextSequence]
    setTimeout(() => {
        userTurn(score)
    }, score * 500 + 1000)
}

// Adds new color to end of Simon's Sequence 
function addToSequence() {
    // const colors = ['red', 'blue', 'green', 'yellow']
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    return newColor
    // console.log("add sequence: ", sequence)
}

// displays Simon's Sequence
function displaySequence(nextSequence) {
    nextSequence.forEach((color, index) => {
        setTimeout(() => {
            console.log(color)
            activateButton(color)
        }, (index + 1) * 600);
    });
    console.log("display sequence function: " + nextSequence)
}

function activateButton(color) {
    // play animation and sound for chosen element
    console.log("this is what is passed into activateBUtton: " + color)
    const button = document.querySelector(`[data-button='${color}']`);

    // const sound = document.querySelector(`[data-sound = '${color}]'`)//query selector
    // const sound = document.querySelector(color)

    button.classList.add('activated');
    // sound.play()

    setTimeout(() => {
        button.classList.remove('activated');
    }, 500);
}

function resetGame(TEXT) {
    alert(TEXT)
    sequence = []
    userInput = []
    score = 0
    startButton.classList.remove('hidden')
    heading.textContent = "Simon Says"
    info.classList.add('hidden')
    buttonContainer.classList.add('unclickable')

    console.log("***********************************NEW***************************************")
}

function userTurn(score) {
    buttonContainer.classList.remove('unclickable')
    info.textContent = "Your Turn!"
}

function handleClick(button) {
    const index = userInput.push(button) - 1
    // const sound = document.querySelector(sound)
    //sound.play()

    const remainder = sequence.length - userInput.length

    if (userInput[index] !== sequence[index]) {
        resetGame('WRONG SEQUENCE. SIMON WINS')
        return;
    }

    if (userInput.length === sequence.length) {
        if(userInput.length === 5){
            resetGame('YOU WIN!')
            return;
        }

        userInput = []
        info.textContent = "Success! Next Round!"
        setTimeout(() => {
            nextRound();
        }, 1000)
        return
    }

    info.textContent = "Taps Remaining: " + remainder;
}

function startGame() {
    startButton.classList.add('hidden')
    info.classList.remove('hidden')
    info.textContent = "Wait for Simon"
    nextRound()
}
startButton.addEventListener('click', startGame)

buttonContainer.addEventListener('click', event => {
    const { button } = event.target.dataset;

    if (button) { handleClick(button) }
})























































// // const satrtButton = document.querySelector('js.start')
// // const info = document.querySelector('js.start')

// // Adds new color to end of Simon's Sequence
// function addToSequence() {
//     let newColor = colors[Math.floor(Math.random() * colors.length)];
//     sequence.push(newColor)
//     // console.log("add sequence: ", sequence)
// }


// // displays Simon's Sequence
// function displaySequence() {
//     sequence.forEach(color => {
//         setTimeout(() => {
//             animate(color.id)
//         }, 1000)
//     });
//     console.log("display sequence function: " + sequence)
// }

// function animate(color) {
//     //play animation and sound for chosen element

//     // const button = document.getElementById(color);
//     // button.classList.add();
//     // setTimeout(() => {
//     //     button.classList.remove('active');
//     // }, 500);
//     //add sound**
// }

// function getUserInput() {
//     let buttons = document.querySelectorAll('.color-button')
//     // console.log(buttons)
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             userInput.push(button.id)
//             // animate(button.id)
//             checkInput()
//             console.log("event listener worked")
//             console.log(userInput)
//         })
//     })
//     // checkInput(index)

// }

// //compares user input to simon's sequence
// function checkInput() {

//     console.log("simon array: " + sequence)
//     console.log("userinput array: " + userInput)


//     let userCorrect;

//     for (let i = 0; i < userInput.length; i++) {

//         console.log("user: " + userInput[i])
//         console.log("simon: " + sequence[i])

//         if (userInput[i] !== sequence[i]) {
//             userCorrect = false;
//             break; // Exit the loop early if there's a mismatch
//         }

//         // if user input.length = sequence length
//         //continuegame
//         if (userCorrect && userInput.length == sequence.length) {
//             console.log("game continued")
//             score++
//             continueGame();
//         }
//         else if (userCorrect) {
//             getUserInput()
//         }
//         else {
//             alert("WRONG SEQUENCE. SIMON WINS")
//             console.log("game restarted")
//             restartGame();
//         }
//     }
// }

// //begin game
// function startGame() {
//     // startButton.classList.add('hidden')
//     // info.classList('hidden')
//     // info.textContent = "Wait for the Simon"

//     addToSequence()
//     displaySequence()
//     // your turn
//     getUserInput()
//     //comapre
// }

// function continueGame() {
//     score += 1;

//     const nextSequence = [...sequence]
//     nextSequence.push(addToSequence)
// }

// function restartGame() {
//     sequence = []
//     userInput = []
//     score = 0

//     console.log("***********************************NEW***************************************")
//     startGame()
// }

// startGame()

// // startButton.addEventListener('click', startGame);
