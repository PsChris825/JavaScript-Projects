//While Loop
function count_Function() {
    var Digit = "";
    var x = 1;
    while (x > -21) {
        Digit += "<br>" + x;//will show the digit after being subtracted
        x--;//will minus x by 1
    }
    document.getElementById("Count").innerHTML = Digit;
}

//for loop
var Gundam = ["Freedom Gundam", "Hi-Nu Gundam", "Gundam Aerial", "Gundam Barbatos"];//list
var Content = ""
var Y;
function for_loop() {
    for (Y = 0; Y < Gundam.length; Y++) {//going down the list from index 0-3
        Content += Gundam[Y] + "<br>";//printing list in order
    }
    document.getElementById("Gundam_list").innerHTML = Content;
}

//Arrays
function car_list() {
    var car_models = [];//creates an open list
    car_models[0] = "Porsche 959"
    car_models[1] = "Nissan GTR"
    car_models[2] = "BMW M3"
    car_models[3] = "Mercedes 130e"
    document.getElementById("cars").innerHTML = "In this picture, the car is a " + 
        car_models[2] + ".";//shows index 2 in the above created list
}

//let keyword
var z = 52;
document.write(z);
{
    let z = 40;//will skip the above to write 40
    document.write("<br>" + z);
}
document.write("<br>" + z);//continues the orginal variable of z