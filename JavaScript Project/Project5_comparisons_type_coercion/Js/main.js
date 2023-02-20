function typeOf_Function() {//created a function to show how typeOF works 
    var TypeOf = typeof 30;
    document.getElementById("coercion").innerHTML = TypeOf;
}

function StrNumber_Function() {//created a function to show how adding a number and a Str works 
    var StrNumber = "10" + 20;
    document.getElementById("coercion").innerHTML = StrNumber;
}

document.write(30==40);//used dbl equals to show a false statement

document.write(5===5);//used a triple equals to show a true statement

document.write(5>4);//used the greater than sign to show a true statement

document.write(20<19);//used the less than sign to show a false statement

document.write(20<30&&20>19);//used the AND statement to show a true statement

document.write(20>30||20<30);//used the OR statement  to show a true statement

document.write(40 != 40);//used the not equals stament  to show a false statement

