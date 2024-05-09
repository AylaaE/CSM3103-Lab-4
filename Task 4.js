// Function to change border color on textfield change event
function changeBorder() {
    document.getElementById("textField").style.border = "2px solid red";
}

// Function to highlight textfield on focus
function highlight() {
    document.getElementById("textField").style.backgroundColor = "lightblue";
}

// Function to remove highlight from textfield on blur
function removeHighlight() {
    document.getElementById("textField").style.backgroundColor = "white";
}
