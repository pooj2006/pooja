const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    if (name && email && phone) {
        formMessage.style.color = 'lightgreen';
        formMessage.textContent = `Thank you, ${name}! Your message has been received.`;
        form.reset();
    } else {
        formMessage.style.color = 'yellow';
        formMessage.textContent = 'Please fill out all fields correctly.';
    }
});
