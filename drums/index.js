

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});
    

        //switch statements:
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3"); 
            tom1.play(); 
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3"); 
            tom2.play(); 
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3"); 
            tom3.play(); 
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3"); 
            tom4.play(); 
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3"); 
            snare.play(); 
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3"); 
            crash.play(); 
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3"); 
            kick.play(); 
            break;
        
        default:
            break;
    }    
}
    
                                // console.log(this); - will return <button> element that was clicked  



 //if calling with name | no () because the function will be called even without clicking the button

// Higher order functions are functions that can take other functions a input

// Key listener
document.addEventListener("keydown", function(event) {
    console.log(event); // will return information about the key on the keyboard that was pressed
});
