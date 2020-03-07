// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)


//variables
const button = document.getElementById("btn-list");

//function toggle color
function toggleColor(id) {
    
    switch (id) {
        case "btn-1":
            document.getElementById("btn-1").style.backgroundColor = "gold";
            document.getElementById("btn-1").style.opacity = document.getElementById("btn-1").style.opacity === '100' ? '0' : '100';
            break;

        case "btn-2":
            if (document.getElementById("btn-2").style.backgroundColor === "crimson")
            document.getElementById("btn-2").style.backgroundColor = "gold";
            else {
                document.getElementById("btn-2").style.backgroundColor = "crimson";
            }
            break;

        case "btn-3":
            if (document.getElementById("btn-3").style.backgroundColor === "lightblue") {
                document.getElementById("btn-3").style.backgroundColor = "gold";
            }
            else {
                document.getElementById("btn-3").style.backgroundColor = "lightblue";
            }
            break;

        case "btn-4":
            document.getElementById("btn-4").style.backgroundColor = "gold";
            document.getElementById("btn-4").classList.toggle("jitters");
            break;
    }
}

//function of the buttons
function buttonPress(event) {
    const buttonID = event.target.id;
    const theButton = document.getElementById(buttonID);

    toggleColor(buttonID);
}

button.addEventListener("click", buttonPress);