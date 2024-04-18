# Milestone-Project-1
Milestone Project 1 -  Browser Game


console.log("simon array: " + sequence);
        console.log("userinput array: " + userInput);

        if (userInput.length === sequence.length) {
            let userCorrect = true;

            for (let i = 0; i < sequence.length; i++) {
                console.log("user: " + userInput[i]);
                console.log("simon: " + sequence[i]);

                if (userInput[i].toString() !== sequence[i].toString()) {
                    userCorrect = false;
                    break; // Exit the loop early if there's a mismatch
                }
            }

            if (userCorrect) {
                console.log("game continued");
                score++;
                continueGame();
            } else {
                alert("WRONG SEQUENCE. SIMON WINS");
                console.log("game restarted");
                restartGame();
            }
        }
    }