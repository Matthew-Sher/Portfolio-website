let aboutSectionTitle = document.querySelector("#about-section .secondary-title");
let backgroundAbovePC = document.querySelector('.background-glow-after-scroll');

window.addEventListener('scroll', () => {
    let scrollScale = document.documentElement.scrollTop;

    if (scrollScale > 60) {
        aboutSectionTitle.classList.add('animated-apearence');
        setTimeout(() => {
            aboutSectionTitle.style.setProperty('opacity', '1');
        }, 600);
    } else {
        aboutSectionTitle.style.setProperty('opacity', '0');
        aboutSectionTitle.classList.remove('animated-apearence');
    }

    if (scrollScale > 100) {
        opacityScale = (scrollScale - 100) / 600;
        backgroundAbovePC.style.setProperty('opacity', opacityScale);
    } else {
        backgroundAbovePC.style.setProperty('opacity', '0');
    }
});

