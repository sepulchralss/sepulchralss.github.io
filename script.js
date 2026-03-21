document.addEventListener('DOMContentLoaded', function() {
    // ===== ПЛАВНИЙ СКРОЛ =====
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
            }
        });
    });

    // ===== ЛАЙТБОКС (МОДАЛЬНЕ ВІКНО) =====
    const modal = document.getElementById('imageModal');
    if (!modal) {
        console.error('Помилка: Не знайдено елемент #imageModal. Додайте його в HTML перед </body>');
        return;
    }
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    // Функція відкриття
    function openModal(src, alt) {
        modal.style.display = 'block';
        modalImg.src = src;
        captionText.textContent = alt || '';
        // Забороняємо прокрутку фону
        document.body.style.overflow = 'hidden';
    }

    // Функція закриття
    function closeModal() {
        modal.style.display = 'none';
        modalImg.src = '';
        document.body.style.overflow = '';
    }

    // Закриття по хрестику
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    // Закриття по кліку на фон
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    // Закриття по клавіші Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Знаходимо всі зображення, які мають клас .gallery-image
    const images = document.querySelectorAll('.gallery-image');
    if (images.length === 0) {
        console.warn('Не знайдено жодного зображення з класом .gallery-image. Переконайтеся, що вони є у вашому HTML.');
    } else {
        images.forEach(img => {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                openModal(this.src, this.alt);
            });
            // Додаємо курсор-руку, щоб показати, що зображення клікабельне
            img.style.cursor = 'pointer';
        });
    }
});
