// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

//variables
const button = document.getElementById("btn-list");

//function of the buttons
function buttonPress(event) {
    const buttonID = event.target.id;
    const theButton = document.getElementById(buttonID);

    switch (buttonID) {
        case "btn-1":
            document.getElementById("btn-1").style.opacity = 0;
            break;

        case "btn-2":
            document.getElementById("btn-2").style.backgroundColor = "crimson";
            break;

        case "btn-3":
            document.getElementById("btn-3").style.backgroundColor = "lightblue";
            break;

        case "btn-4":
            document.getElementById("btn-4").classList.add("jitters");
            break;
    }
}

button.addEventListener("click", buttonPress);