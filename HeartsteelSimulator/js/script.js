var loadingBar = document.getElementById("loadingBar");
var gangButton = document.getElementById("gang");
var heartsteelCountDisplay = document.getElementById("heartsteelCount");
var stack_1 = new Audio("source/Heartsteel_stack_SFX_1.mp3");
var stack_2 = new Audio("source/Heartsteel_stack_SFX_2.mp3");
var stack_3 = new Audio("source/Heartsteel_stack_SFX_3.mp3");
var stack_4 = new Audio("source/Heartsteel_stack_SFX_4.mp3");
var trigger_1 = new Audio("source/Heartsteel_trigger_SFX_1.mp3");
var trigger_2 = new Audio("source/Heartsteel_trigger_SFX_2.mp3");
var trigger_3 = new Audio("source/Heartsteel_trigger_SFX_3.mp3");
var isPlaying = false;
var loadingCount = 0;
var heartsteelCount = 0;

function gang(){
    if(!isPlaying) {
        isPlaying = true;
        window.setInterval(()=>{
            if(loadingCount == 0) {
                loadingBar.innerHTML = "● ○ ○ ○";
                stack_1.play();
                loadingCount++;
            } else if(loadingCount == 1) {
                loadingBar.innerHTML = "● ● ○ ○";
                stack_2.play();
                loadingCount++;
            } else if(loadingCount == 2) {
                loadingBar.innerHTML = "● ● ● ○";
                stack_3.play();
                loadingCount++;
            } else if(loadingCount == 3) {
                loadingBar.innerHTML = "● ● ● ●";
                stack_4.play();
                loadingCount++;
            }
        },750);
        gangButton.innerHTML = "Gang!";
    } else {
        if(loadingCount==4) {
            loadingBar.innerHTML = "○ ○ ○ ○";
            trigger_1.play();
            loadingCount = 0;

            heartsteelCount += Math.round(Math.random()*20);
            heartsteelCountDisplay.innerHTML = "已提升的最大生命值: "+heartsteelCount;
        }
      
    }
}