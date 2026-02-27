// script.js

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to the color box and button elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Function to generate a random hexadecimal color
    function getRandomColor() {
        // Method 1: Using Math.random to generate random hex values
        const letters = '0123456789ABCDEF';
        let color = '#';
        
        // Generate 6 random characters from the letters string
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
        
        /* Alternative Method 2: Using RGB values
        function getRandomRGB() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }
        */
        
        /* Alternative Method 3: Short version using toString(16)
        function getRandomColorShort() {
            return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        }
        */
    }
    
    // Function to change the box color
    function changeBoxColor() {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
        
        // Optional: Log the new color to console
        console.log('Color changed to:', newColor);
        
        // Optional: Display the color code somewhere
        displayColorCode(newColor);
    }
    
    // Optional function to display the current color code
    function displayColorCode(color) {
        // Check if a color display element exists, if not create one
        let colorDisplay = document.getElementById('color-code-display');
        
        if (!colorDisplay) {
            colorDisplay = document.createElement('p');
            colorDisplay.id = 'color-code-display';
            colorDisplay.style.marginTop = '15px';
            colorDisplay.style.fontFamily = 'monospace';
            colorDisplay.style.fontSize = '16px';
            colorDisplay.style.fontWeight = 'bold';
            
            // Insert after the button
            changeColorBtn.parentNode.insertBefore(colorDisplay, changeColorBtn.nextSibling);
        }
        
        colorDisplay.textContent = `Current Color: ${color}`;
        colorDisplay.style.color = color;
    }
    
    // Add event listener to the button
    changeColorBtn.addEventListener('click', changeBoxColor);
    
    // Optional: Add keyboard support (press 'c' to change color)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'c' || event.key === 'C') {
            changeBoxColor();
        }
    });
    
    // Optional: Add touch support for mobile devices
    changeColorBtn.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent double-firing on mobile
        changeBoxColor();
    });
    
    // Initialize with a random color when page loads
    setTimeout(() => {
        changeBoxColor(); // Change to random color after 1 second
    }, 1000);
    
});
