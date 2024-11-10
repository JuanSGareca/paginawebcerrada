let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.carrusel-imagenes');
    const totalSlides = slides.children.length;

    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    // Ajusta la posición de la slide
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

showSlide(currentIndex);
