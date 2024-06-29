// //WORK-WITH-ME-BTN-HOVER VISIBILITY LOGIC   
  window.addEventListener('scroll', function() {
    const btn = document.querySelector('.work-with-me-btn-hover');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Show button if not at the top or bottom
    if (scrollPosition > 0 && (scrollPosition + windowHeight) < docHeight) {
      btn.classList.add('show-work-with-me-btn');
    } else {
      btn.classList.remove('show-work-with-me-btn');
    }
  });
