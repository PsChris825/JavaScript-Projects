
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}//creates a function that utilizes the addition operator

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}//creates a function that utilizes the subtraction operator

function multiplication_Function() {
    var multiplication = 5 * 2;
    document.getElementById("Math").innerHTML = "5 * 2 = " + multiplication;
}//creates a function that utilizes the multiplication operator

function modulo_Function() {
    var modulo = 30 % 5;
    document.getElementById("Math").innerHTML = "30 % 5 = " + modulo;
}//creates a function that utilizes the modulo operator

function increment_function() {
    x = 10
    x++;
    document.write(x);
}//creates a function that utilizes the increment operator

function decrement_function() {
    y = 20
    y--;
    document.write(y);
}//creates a function that utilizes the decrement operator

window.alert(Math.random() * 300);
//creates an alert that will display a random number between 1-300