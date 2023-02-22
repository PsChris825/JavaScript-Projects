var x = 20;//global variable
function Multiply_Number_1() {
    document.write(20 * x + "<br>");
}
function Multiply_Number_2() {
    var y = 600;//local variable
    document.write(x * y + "<br>");
}
Multiply_Number_1();//shows function result
Multiply_Number_2();//shows function result

//If statement
function guess_Function() {//If function
    Guess = document.getElementById("Guess").value;
    var y = 400;//local variable
    if (Guess == y) {//primary if statment to establish parameter
        Num = "You guessed the number";//output if true
    }
    else {
        Num = "You did not guess the number";//output if false
    }
    document.getElementById("what_is_your_guess?").innerHTML = Num;
}

//Time function
function time_Function() {
    var time = new Date().getHours();
    var Reply;
    if (time < 12 == time > 0) {
        Reply = "it is morning time!";
    }
    else if (time >= 12 == time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// error function
function error_Function() { 
    var y = 600;//local variable
    var z = 4;//fixed and saved in chrome dev tools
    document.write(x * z);
}

