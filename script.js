// Reference for the contact form from the HTML
const contactForm = document.querySelector('.contact-form');

// Add an advent listener to detect when the form is submitted
contactForm.addEventListener('submit', messageSent);

// A function that runs when the form is submitted
function messageSent(e) {

    // stops page from reloading
    e.preventDefault();  

    //Shows a message to the user after submitting the form
    alert('Thank you for your message');
};

