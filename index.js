var i=0;

document.addEventListener("keypress",function(event){
    var btnpressed = event.key;
    makesound(btnpressed);
    btnanmtn(btnpressed);
})


while(i!='\0'){
    document.querySelectorAll(".drum")[i++].addEventListener("click", function(){
        var btnVal = this.innerHTML;
        makesound(btnVal);
        btnanmtn(btnVal);
    });
}

function makesound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        default: console.log(btnVal);
    }
}

function btnanmtn(keyy){
    var activebtn =  document.querySelector("."+keyy);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed")
    },100);

}
