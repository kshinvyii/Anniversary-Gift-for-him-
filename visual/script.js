// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes?') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayhelokity(); // Display the helokity.gif
        });
    } else if (option === 'Happy anniversary too!') {
        // Change text on the "Happy anniversary too!" button to "I love you so much!"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "I love you so much!" button
        var I love you so much! Button = document.getElementById('I love you so much!-button');
        var currentFontSize = window.getComputedStyle(I love you so much!Button).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "yes?" nor "Happy anniversary too!" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the bunny.gif initially
function displaybunny() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the bunny
    var bunnyImage = new Image();
    // Set the source (file path) for the bunny image
    bunnyImage.src = 'bunny.gif'; // Assuming the bunny image is named "bunny.gif"
    // Set alternative text for the image (for accessibility)
    bunnyImage.alt = 'bunny';
    // When the bunny image is fully loaded, add it to the image container
    bunnyImage.onload = function() {
        imageContainer.appendChild(bunnyImage);
    };
}

// Function to display the helokity.gif
function displayhelokity() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the helokity
    var helokityImage = new Image();
    // Set the source (file path) for the helokity image
   helokityImage.src = 'helokity.gif'; // Assuming the helokity image is named "helokity.gif"
    // Set alternative text for the image (for accessibility)
    helokityImage.alt = 'helokity';
    // When the helokity image is fully loaded, add it to the image container
    heloKityImage.onload = function() {
        imageContainer.appendChild(helokityImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the helokity.gif initially
displayhelokity();