document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic headline effect
    const headline = document.getElementById('headline');
    const phrases = ['TJ Gayle', 'Software Developer', 'AI Enthusiast', 'Tech Innovator'];
    let phraseIndex = 0;

    function cyclePhrases() {
        headline.textContent = phrases[phraseIndex];
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(cyclePhrases, 4000);
    }

    cyclePhrases();
});
