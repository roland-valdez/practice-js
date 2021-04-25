//TODO: When the #changeBoxSize button is clicked the box should double in size from what it was!
$("#changeBoxSize").click(function() {
    $("#box").css({"width":"500px", "height":"500px"});
});

//TODO: I have two CSS classes - toggleClass1 and toggleClass2 - that are currently unused. When the #toggleClass button is clicked, program a bit of JavaScript to toggle between those classes to see the background-color switch back and forth with each click. Bonus: Write your callback function in a variable and use it instead!

var toggle = function (){
    if($("#box").hasClass("toggleClass1")){
        $("#box").toggleClass("toggleClass2")
    } else {
        $("#box").toggleClass("toggleClass1")
    }
}
$("#toggleClass").click(toggle);
//TODO: In the #boxInfo element, when the BOX is hovered over the HEIGHT and WIDTH of the box would appear in that HTML area [div]
$("#box").hover(
    function (){
        var width = $("#box").css("width");
        var height = $("#box").css("height");
        $("#boxInfo").html("<h3>The box has width:" + width + " and height:" + height + "</h3>");
    }, function (){
        $("#boxInfo").html("");

    })
//TODO: When the user types in to our #input and then clicks #inputBtn, what they typed into the box should replace what was inside of the span #userName with the input's contents
$("#inputBtn").click(function (){
    $("#userName").html($("#input").val());
    var delay = 5000; // delay time in milliseconds
    var timeoutId = setTimeout(function () {
        $("#helloUser").html("Let me know if you want to play a game.");
    }, delay);
})

//TODO: Refactor the above work - after 5 seconds have passed from the user clicking #inputBtn and seeing #userName change, change the entire div of #helloUser to say "Let me know if you want to play a game. ."


// TODO: When a user hits the "g" key, the background of the page should turn purple.
$(document).keypress(function(event){
    if (event.key.toLowerCase() === "g"){
        $("body").css("background-color", "rebeccapurple");
    }
})
//TODO: Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.
var count = 0;
$(document).keypress(function(event){
    if (event.key === "Enter"){
        count++;
        $("#counter").html("You have pressed the enter key " + count + " times.");
    }

})

//TODO: When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".
var sequence = ["1","2","3"];
var keylog = [];
console.log(keylog.length);
$(document).keypress(function(event){
    keylog.push(event.key);
    if(keylog.length <= 3){
        console.log(keylog);
        console.log(keylog.length);
        if(keylog.toString() === sequence.toString()){
            alert("You get a 50% discount!");
           sequence = ["1","2","3"];
            keylog = [];
        }
    }
    else if (keylog.length > 3){
        keylog.shift();
    }


})



