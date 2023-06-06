
//Detecting Button Press
for(let i = 0 ; i < document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        // let audio = new Audio('sounds/crash.mp3')
        // audio.play()
        let buttonInnerHTML = this.innerHTML; // Getting innerHtml
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
        
    })
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(e){
    
    makeSound(e.key)//e is where the event which keydown detect and that e contains a property
    buttonAnimation(e.key)
    //called key which tells us what keyboard was pressed.
} )

function makeSound(key){
    switch (key) {
        case "w":
            let kickdrum = new Audio('sounds/kick-bass.mp3')
            kickdrum.play()
            break;

        case 'a':
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;
        case 's':
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;
        case 'd':
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;
        case 'j':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case 'k':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;
        case 'l':
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;

        default: console.log(key)


    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector( '.' + currentKey)
    activeButton.classList.add('pressed')
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 250)
}