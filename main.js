document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.work-with-me-btn-hover'); // The button
    const LandingSection = document.getElementById('landing-section'); // The "About Me" section

    const offsetToShowButton = LandingSection.offsetHeight + LandingSection.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > offsetToShowButton) {
            btn.classList.add('show-work-with-me-btn');
        } else {
            btn.classList.remove('show-work-with-me-btn');
        }
    });
});