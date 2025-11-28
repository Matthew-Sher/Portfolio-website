let aboutSectionTitle = document.querySelector("#about-section .secondary-title");

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 60) {
        aboutSectionTitle.classList.add('animated-apearence');
        setTimeout(() => {
            aboutSectionTitle.style.setProperty('opacity', '1');
        }, 600);
    } else {
        aboutSectionTitle.style.setProperty('opacity', '0');
        aboutSectionTitle.classList.remove('animated-apearence');
    }
});