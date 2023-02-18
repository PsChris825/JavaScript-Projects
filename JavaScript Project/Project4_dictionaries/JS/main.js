function my_Dictionary() { //creating a dictionary
    var Car = { //adding info about the variable in the dictionary
        Manufacturer: "Porsche",
        Color: "white",
        Model: "993",
        Year_Built: "1994",
        Engine: "3.8L twin-turbo M64 SOHC flat-6 "
    };
    delete Car.Model;//deleting key before being called
    document.getElementById("Dictionary").innerHTML = Car.Model; //calling the model key of the car dictionary
}