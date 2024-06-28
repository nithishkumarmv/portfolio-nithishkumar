document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill');
    const interestBars = document.querySelectorAll('.interest');

    function addHoverAnimation(barElements) {
        barElements.forEach(bar => {
            const barFill = bar.querySelector('.bar-fill');
            const percentage = bar.getAttribute('data-percentage');
            const percentageText = barFill.querySelector('span');

            bar.addEventListener('mouseover', () => {
                if (window.matchMedia("(hover: hover)").matches) {
                    barFill.style.width = percentage;
                    percentageText.style.display = 'inline';
                }
            });

            bar.addEventListener('mouseout', () => {
                if (window.matchMedia("(hover: hover)").matches) {
                    barFill.style.width = '0';
                    percentageText.style.display = 'none';
                }
            });

            bar.addEventListener('touchstart', () => {
                barFill.style.width = percentage;
                percentageText.style.display = 'inline';
            });

            bar.addEventListener('touchend', () => {
                barFill.style.width = '0';
                percentageText.style.display = 'none';
            });
        });
    }

    addHoverAnimation(skillBars);
    addHoverAnimation(interestBars);
});

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'resume/nithish_resume.pdf'; // Replace with the actual path to your PDF file
    link.download = 'nithish_resume.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:nithishkumarmv10@gmail.com"
        + "?subject=" + encodeURIComponent("Contact Form Submission from " + name)
        + "&body=" + encodeURIComponent("Name: " + name + "\n"
        + "Email: " + email + "\n"
        + "Location: " + location + "\n\n"
        + "Message:\n" + message);

    window.location.href = mailtoLink;
}