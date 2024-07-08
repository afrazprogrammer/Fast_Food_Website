function validateForm(event) {
    console.log("YES?");
    event.preventDefault(); // Prevent the default form submission
    
    let form = document.getElementById('signup_form');
    let inputs = form.querySelectorAll('input, textarea, select'); // Get all input, textarea, and select elements
    let isValid = true;
    let missingFields = [];

    inputs.forEach(function(input) {
        if (input.type !== 'submit' && !input.value.trim()) { // Check if the field is empty
            isValid = false;
            missingFields.push(input.name); // Collect the name of the empty fields
        }
    });

    if (!isValid) {
        alert("Please fill in the following fields: " + missingFields.join(', '));
    } else {
        form.submit(); // Submit the form if all fields are filled
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Hello");
    let form = document.getElementById('signup_form');
    form.addEventListener('submit', validateForm);
})