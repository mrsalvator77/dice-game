const rotateButton = document.getElementById("btn");
const rolledNum = document.getElementById("rolledNum");

let counter = 1;
const diceIcons = [
    '⚀', 
    '⚁', 
    '⚂', 
    '⚃', 
    '⚄', 
    '⚅'  
];
rotateButton.addEventListener("click", function() {

    // a container div
    const containerDiv = document.createElement("div");
    containerDiv.className = "dynamic-div";
    
    // the left  elements
    const leftElement = document.createElement("div");
    leftElement.classList.add("left-element");
    leftElement.textContent ="Roll: "+counter; // Display the current number
    counter++; // Increment the counter for the next click
    
    // the right elements
    const rightElement = document.createElement("div");
    rightElement.classList.add("right-element");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    rolledNum.innerHTML=randomNumber;
    
    // Use the random number to select the corresponding dice icon
    rightElement.textContent = diceIcons[randomNumber - 1]
    
    containerDiv.appendChild(leftElement);
    containerDiv.appendChild(rightElement);

    const container = document.getElementById("container");
    container.appendChild(containerDiv);

});

