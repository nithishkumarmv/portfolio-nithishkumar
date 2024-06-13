document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill');
    const interestBars = document.querySelectorAll('.interest');

    function addHoverAnimation(barElements) {
        barElements.forEach(bar => {
            const barFill = bar.querySelector('.bar-fill');
            const percentage = bar.getAttribute('data-percentage');
            const percentageText = barFill.querySelector('span');

            bar.addEventListener('mouseover', () => {
                barFill.style.width = percentage; // Ensure width is set to percentage on hover
                percentageText.style.display = 'inline'; // Show percentage text on hover
            });

            bar.addEventListener('mouseout', () => {
                barFill.style.width = '0'; // Reset to zero on mouse out
                percentageText.style.display = 'none'; // Hide percentage text on mouse out
            });
        });
    }

    addHoverAnimation(skillBars);
    addHoverAnimation(interestBars);
});
