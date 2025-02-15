let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
