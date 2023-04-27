const container = document.querySelector('.container');
const slidesContainer = document.querySelector('.slidesContainer');
const slides = document.querySelectorAll('.slidesContainer img');

//buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//scroll by size
const size = slides[0].clientWidth;

//counter
let counter = 1;

function scrolSlide() {
  slidesContainer.style.transform = `translateX(${-size * counter}px)`;
}

scrolSlide();

nextBtn.addEventListener('click', () => {
  if (counter >= slides.length - 1) return;
  slidesContainer.style.transition = 'transform .4s ease-in-out';
  counter++;
  scrolSlide();
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  slidesContainer.style.transition = 'transform .4s ease-in-out';
  counter--;
  scrolSlide();
});

slidesContainer.addEventListener('transitionend', () => {
  if (slides[counter].className === 'last') {
    slidesContainer.style.transition = 'none';
    counter = slides.length - 2;
    scrolSlide();
  } else if (slides[counter].className === 'first') {
    slidesContainer.style.transition = 'none';
    counter = 1;
    scrolSlide();
  }
});
