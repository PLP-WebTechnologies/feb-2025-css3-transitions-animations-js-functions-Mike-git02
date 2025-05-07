// Function to store user preferences in localStorage
function savePreference(color) {
    localStorage.setItem('buttonColor', color);
}

// Function to retrieve and apply the saved preference
function loadPreference() {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
        document.getElementById('colorButton').style.backgroundColor = savedColor;
        document.getElementById('savedColor').textContent = savedColor;
    }
}

// Function to trigger color change and save the preference
document.getElementById('colorButton').addEventListener('click', function() {
    const newColor = 'orange';
    this.style.backgroundColor = newColor;  // Apply new color to the button
    savePreference(newColor);  // Save the new color to localStorage
    this.classList.add('slide-in');  // Trigger animation

    // Remove animation class after it completes so it can be triggered again
    setTimeout(() => {
        this.classList.remove('slide-in');
    }, 1000);  // Match the animation duration (1s)
});

// Load saved preference on page load
loadPreference();
