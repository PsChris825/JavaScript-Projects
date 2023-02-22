//concat() method
function Hobby_Sentence(){//function to be called 
    const arr1 = "I enjoy ";
    const arr2 = "building Gundam, ";
    const arr3 = "it is my new hobby.";
    const hobby = arr1.concat(arr2, arr3);//concatenates all 3 arr
    document.getElementById("Cont").innerHTML = hobby;
}

//slice() method
function slice_method() {
    var Sentence = "I enjoy building Gundam, it is my new hobby.";
    var Section = Sentence.slice(17,23);//leaves only Gundam
    document.getElementById("Slice").innerHTML = Section;
}

//toPercision() method
function percision_method() {
    var x = 121423536543.3437497348712394;
    document.getElementById("Per").innerHTML = x.toPrecision(14);
}