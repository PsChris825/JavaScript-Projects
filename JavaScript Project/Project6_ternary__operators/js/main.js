//ternary operation
function Age_Function() {
    var Age, Can_drive;
    Age = document.getElementById("Age").value;
    Can_drive = (Age < 16) ? "You are too young":"You are old enough";
    document.getElementById("drive").innerHTML = Can_drive + " to drive.";
}



// "New" and "This" Keyword example
function Console(Make, Model, Year, Color) {
    this.Console_Make = Make;
    this.Console_Model = Model;
    this.Console_Year = Year;
    this.Console_Color = Color;
}
//Create Persons Console
var Chris = new Console("Microsoft", "Xbox 360", "2005", "Black");
var Lauren = new Console("Nintendo", "Switch", "2021", "Teal");
var Justin = new Console("Sony", "Ps5", "2021", "White");
function myFunction() {
    document.getElementById("New_and_this").innerHTML = 
    "Chris plays a " + Chris.Console_Color + "-colored " + Chris.Console_Model +
    " bought in " +Chris.Console_Year;
}


//Nested Function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 20;
        function Minus_one() {Starting_point -= 1;}//nested function
        Minus_one();
        return Starting_point;
    }
}
