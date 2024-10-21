const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > 3) {
        currentIndex = 0; // Loop back to the start
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 3; // Loop back to the end
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});
