# prueba_tecnica_160k

# INTRODUCCIÓN

Te encuentras un espejo extraño que siempre enseña una mano que se está moviendo.
La mano parece estar viva, y después de muchas preguntas de respuesta "si" o "no", sabes que la mano está intentando enseñarte un programa que está escrito en LMP (Lenguaje Mano de Programación).

This language works with a memory of an indefinite size of bytes, with all values initialized to 0.
This language haves 7 instructions:

👉 : moves the memory pointer to the next cell

👈 : moves the memory pointer to the previous cell

👆 : increment the memory cell at the current position 

👇 : decreases the memory cell at the current position. 

🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛

🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜

👊 : Display the current character represented by the ASCII code defined by the current position.

## Notes:
- As memory cells are bytes, from 0 to 255 value, if you decrease 0 you'll get  255, if you increment 255 you'll get 0.
- Loops of 🤜 and 🤛 can be nested. 

# Tests
The hand shows you two small programs and their outputs:

## This program display "Hello"
👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊

## This program (with nested loops) display "Hello World!"
👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊

# Challenge
The file "input.hand" is the code of the program


Good luck!
