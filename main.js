document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.work-with-me-btn-hover'); // The button
    const LandingSection = document.getElementById('landing'); // The "About Me" section
    const ExperienceSection = document.getElementById('experience'); // The "Experience" section

    const offsetToShowButton = LandingSection.offsetHeight + LandingSection.offsetTop;
    const offsetToHideButton = ExperienceSection.offsetHeight + ExperienceSection.offsetTop;

    console.log("Scroll Position:", window.pageYOffset, "Show Button At:", offsetToShowButton, "Hide Button At:", offsetToHideButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > offsetToShowButton && window.pageYOffset < offsetToHideButton) {
            btn.classList.add('show-work-with-me-btn');
        } else {
            btn.classList.remove('show-work-with-me-btn');
        }
    });
});