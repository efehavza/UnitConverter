
//script that controls the celcius to fahrenheit conversion
document.getElementById("button1").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the fahrenheit conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = (((9/5)*userInput)+32).toFixed(2)+"°F";
    
};
//script that controls the fahrenheit to celcius conversion
document.getElementById("button2").onclick = function() {
   //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the celcius conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = ((5/9)*(userInput-32)).toFixed(2)+"°C";
   
};
//script that controls the meter to feet conversion
document.getElementById("button3").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the feet conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = (userInput*3.280839895).toFixed(2)+"ft.";
};
//script that controls the feet to meter conversion
document.getElementById("button4").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the meter conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = (userInput*0.304800609601).toFixed(2)+"m";
};
//script that controls the kilogram to pound conversion
document.getElementById("button5").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the pound conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = (userInput*2.2046226218).toFixed(2)+"lbs";
 
};
//script that controls the pound to kilogram conversion
document.getElementById("button6").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the kilogram conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = (userInput*(1/2.2046226218)).toFixed(2)+"kg";
};
//script that controls the centimeter to inch conversion
document.getElementById("button7").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the inch conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = (userInput*0.39370079).toFixed(2)+"inch";
    
};
//script that controls the inch to centimeter conversion
document.getElementById("button8").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);
    //this statement applies the centimeter conversion formula to userInput and puts the value to the
    //<p> tag which id is "answer"
    document.getElementById("answer").innerHTML = (userInput*1/0.39370079).toFixed(2)+"cm";
};
//script that controls the clear button
document.getElementById("clear").onclick = function() {
    //it puts the value from the text box to userInput variable
    var userInput = parseInt(document.getElementById("text-box").value);

    //this statement clears the text inside the p tag
    document.getElementById("answer").innerHTML = "";
    //this statement clears the textbox
    document.getElementById("text-box").value = "";
    //this input puts the focus on the textbox
    document.getElementById("text-box").focus();

}


