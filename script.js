let memory = [];
let currentPosition = 0;
let positionStartLoop = 0;
let positionEndLoop = 0;





const translate = () => {
    let input = "👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊";
    let correctInput = [];
    let provisionalString = "";
    //GUARDA EN UN ARRAY EL INPUT DE MANERA CORRECTA
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0 && i > 0) {
            correctInput.push(provisionalString);
            provisionalString = ""
        }
        provisionalString = provisionalString + input.charAt(i);
        if (i === input.length - 1) {
            correctInput.push(provisionalString);
        }
    }
    for (let i = 0; i < correctInput.length; i++) {
        switch (correctInput[i]) {
            case '👇':
                if (memory[currentPosition] === undefined) {
                    memory[currentPosition] = 0;
                }
                if (memory[currentPosition] === 0) {
                    memory[currentPosition] = 255;
                } else{
                    memory[currentPosition] = memory[currentPosition] - 1;
                }
                break;

            case '👆':
                if (memory[currentPosition] === undefined) {
                    memory[currentPosition] = 0;
                }
                if (memory[currentPosition] === 255) {
                    memory[currentPosition] = 0;
                } else{
                    memory[currentPosition] = memory[currentPosition] + 1;
                }
                break;

            case '👉':
                currentPosition++;
                break;

            case '👈':
                currentPosition--;
                break;

            case '🤜':
                positionStartLoop = i;
                if (memory[currentPosition] === 0) {
                    i = positionEndLoop;
                }
                break;

            case '🤛':
                positionEndLoop = i;
                if (memory[currentPosition] !== 0) {
                    i = positionStartLoop;
                }
                break;

            case '👊':
                document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + (String.fromCharCode(memory[currentPosition]));
                break;
        
            default:
                break;
        }
        console.log(currentPosition);
        console.log(memory[currentPosition]);
    }
    
}

document.getElementById("send").addEventListener("click", translate);