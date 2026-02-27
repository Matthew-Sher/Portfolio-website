let apearence = function (objectToApear, scrollScale, pointOfApearence) {
    if (scrollScale > pointOfApearence) {
        objectToApear.classList.add('animated-apearence');
        setTimeout(() => {
            objectToApear.style.setProperty('opacity', '1');
        }, 600);
    } else {
        objectToApear.style.setProperty('opacity', '0');
        objectToApear.classList.remove('animated-apearence');
    }
};

window.addEventListener('scroll', () => {
    let scrollScale = document.documentElement.scrollTop;
    let aboutSectionTitle = document.querySelector("#about-section .secondary-title");
    let skillsTitle = document.querySelector("#skills-section .secondary-title");
    let backgroundAbovePC = document.querySelector('.background-glow-after-scroll');

    apearence(aboutSectionTitle, scrollScale, 60);
    apearence(skillsTitle, scrollScale, 1650);

    if (scrollScale > 100) {
        opacityScale = (scrollScale - 140) / 600;
        backgroundAbovePC.style.setProperty('opacity', opacityScale);
    } else {
        backgroundAbovePC.style.setProperty('opacity', '0');
    }
});

