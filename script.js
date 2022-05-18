let test1 = "👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊";
let test2 = "👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊";

let memory = [];
let currentPosition = 0;
let positionStartLoop = null;
let positionStartLoopNested = null;
let positionEndLoop = null;
let positionEndLoopNested = null;


const translate = (code) => {
    let input = code;
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
    //RECORRE EL ARRAY CORRECTO E INTERPRETA CADA MANO
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
                if(memory[currentPosition] === undefined){
                    memory[currentPosition] = 0;
                };
                break;

            case '👈':
                currentPosition--;
                break;

            case '🤜':
                if (positionStartLoop === null) {
                    positionStartLoop = i;
                } else{
                    positionStartLoopNested = i;
                }
                //BUCLE SIN ANIDAR
                if (positionStartLoopNested === null) {
                    if (memory[currentPosition] === 0) {
                        i = positionEndLoop;
                        positionStartLoop = null;
                    }
                } 
                //BUCLE ANIDADO
                else{
                    if (memory[currentPosition] === 0) {
                        if (!positionEndLoopNested) {
                            for (let e = i; e < correctInput.length; e++) {
                                if (correctInput[e] === "🤛") {
                                    console.log(e);
                                    console.log(correctInput[e]);
                                    i = e-1;
                                    break;
                                }
                            }
                        } else{
                            i = positionEndLoopNested;
                        }
                    }
                }
                
                break;

            case '🤛':
                //BUCLE SIN ANIDAR
                if (positionStartLoopNested === null) {
                    positionEndLoop = i;
                    if (memory[currentPosition] !== 0) {
                        i = positionStartLoop;
                    } else{
                        positionStartLoop = null;
                        positionEndLoop = null;
                    }
                } 
                //BUCLE ANIDADO
                else{
                    positionEndLoopNested = i;
                    if (memory[currentPosition] !== 0) {
                        i = positionStartLoopNested;
                    } else{
                        positionStartLoopNested = null;
                        positionEndLoopNested = null;
                    }
                }
                break;

            case '👊':
                console.log("saco la letra " + String.fromCharCode(memory[currentPosition]));
                console.log("en la posicion de memoria  " + currentPosition);
                document.getElementById("text1").innerHTML = document.getElementById("text1").innerHTML + (String.fromCharCode(memory[currentPosition]));
                break;
        
            default:
                break;
        }
        // console.log(currentPosition + " POSICION ACTUAL DE LA MEMORIA");
        // console.log(memory[currentPosition] + " VALOR ACTUAL DE LA POSICION DE MEMORIA");
    }
}

document.getElementById("send1").addEventListener("click", function(){
    translate(test1);
},
false);
document.getElementById("send2").addEventListener("click",function(){
    translate(test2);
},
false);
// document.getElementById("send3").addEventListener("click", translate);