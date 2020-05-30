"use strict"; 
    var timeInterval = 250;
    var loopVariable = 0;
    var timerID = null;
    var frames = null;
    var animationStarted = false;
    function start() {

        var animationselect = document.getElementById("animation");
        var mytextarea = document.getElementById("txtarea");
        var startbtn = document.getElementById("start");
        var stopbtn = document.getElementById("stop");
        frames = mytextarea.value.split("=====\n");
        timerID = setInterval(displayFrames, timeInterval);
        startbtn.disabled = true;
		animationselect.disabled = true;
        stopbtn.disabled = false;
    }

    function displayFrames() {
        var mytextarea = document.getElementById("txtarea");
        mytextarea.value = frames[loopVariable];
        loopVariable = (loopVariable + 1) % (frames.length);
    }

    function stop() {
		var animationselect = document.getElementById("animation");
        var startbtn = document.getElementById("start");
        var stopbtn = document.getElementById("stop");
        var mytextarea = document.getElementById("txtarea");
        clearInterval(timerID);
        loopVariable = 0;
        
        mytextarea.value = frames.join("=====\n");
        startbtn.disabled = false;
        stopbtn.disabled = true;
		animationselect.disabled = false;
    }

    function setAnimation() {
        var animationselect = document.getElementById("animation");
        var mytextarea = document.getElementById("txtarea");
        var selectedAnimation = animationselect.options[animationselect.selectedIndex].text;
         if (selectedAnimation != "Custom"){
             mytextarea.value = ANIMATIONS[selectedAnimation];
         }
    }

    function changeFontSize() {
        var mytextarea = document.getElementById("txtarea");
        var fontselect = document.getElementById("size");
        mytextarea.style.fontSize = fontselect.value;
    }

    function changeSpeed() {
        var turbochk = document.getElementById("turbo");
        var startbtn = document.getElementById("start");
        
        if (turbochk.checked) {
            timeInterval = 50;
        } else {
            timeInterval = 250;
        }

        clearInterval(timerID);
        if (startbtn.disabled) {
            timerID = setInterval(displayFrames, timeInterval);
        } 
    }

window.onload = function() {
    var startbtn = document.getElementById("start");
    var stopbtn = document.getElementById("stop");
    var animationselect = document.getElementById("animation");
    var fontselect = document.getElementById("size");
    var turbochk = document.getElementById("turbo");
    startbtn.onclick = start;
    stopbtn.onclick = stop;
    fontselect.onchange = changeFontSize;
    turbochk.onclick = changeSpeed;
    animationselect.onchange = setAnimation;
    stopbtn.disabled = true;
};