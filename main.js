x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function setup(){
    canvas = createCanvas(900, 600);
}

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognised as: " + content

    if(content == "Circle."){
        x = Math.round(Math.random() * 900);
        y = Math.round(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing Circle";
        draw_circle = "set";
    }

    if(content == "Rectangle."){
        x = Math.round(Math.random() * 900);
        y = Math.round(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing Rectangle";
        draw_rect = "set";
    }
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.round(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle has been drawn";
        draw_circle = "";
    }

    if(draw_rect == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle has been drawn";
        draw_rect = "";
    }

}