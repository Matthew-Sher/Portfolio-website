// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Добавляем начальные стили для анимации и наблюдаем за элементами
document.querySelectorAll('.experience-card, .tech-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});

// Динамическое обновление года в футере
const updateYear = () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(/\d{4}/, currentYear);
    }
};
updateYear();

// Эффект печатающейся машинки для имени (опционально)
const heroName = document.querySelector('.hero-name');
if (heroName) {
    const originalText = heroName.textContent;
    heroName.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroName.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Добавим случайное вращение при загрузке для еще большего хаоса
document.addEventListener('DOMContentLoaded', () => {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        // Добавляем случайную задержку анимации
        const randomDelay = Math.random() * 2;
        item.style.animationDelay = `${randomDelay}s`;
        
        // Случайная продолжительность анимации
        const randomDuration = 4 + Math.random() * 2;
        item.style.animationDuration = `${randomDuration}s`;
    });
});

window.addEventListener('scroll', () => {
    let scrollScale = document.documentElement.scrollTop;
    let backgroundAbovePC = document.querySelector('.background-glow-after-scroll');
    console.log(backgroundAbovePC);

    if (scrollScale > 100) {
        opacityScale = (scrollScale - 140) / 600;
        backgroundAbovePC.style.setProperty('opacity', opacityScale);
    } else {
        backgroundAbovePC.style.setProperty('opacity', '0');
    }
});