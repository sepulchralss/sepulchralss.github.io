document.addEventListener('DOMContentLoaded', function() {
    // Плавний скрол до якорів (меню "Order")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо модальне вікно
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Вибираємо всі зображення з класом .gallery-image (вони вже є в галереях)
    const images = document.querySelectorAll('.gallery-image');

    images.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation(); // щоб не спрацьовувало батьківське подія (якщо є)
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt || 'Image preview';
        });
    });

    // Закриття при кліку на хрестик
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Закриття при кліку на фон (на саме модальне вікно)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
            }
        });
    });
});