const container = document.querySelector('.container');
const slidesContainer = document.querySelector('.slidesContainer');
const slides = document.querySelectorAll('.slidesContainer img');

//buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBtns = document.querySelectorAll('.slideBtns');

//scroll by size
const size = slides[0].clientWidth;

//counter
let counter = 1;

function scrolSlide() {
  slidesContainer.style.transform = `translateX(${-size * counter}px)`;
  //progessBtns loop
  if (progressBtns[counter].className === 'slideBtns first') {
    progressBtns[1].classList.add('active');
  } else if (progressBtns[counter].className === 'slideBtns last') {
    progressBtns[slides.length - 2].classList.add('active');
  } else {
    progressBtns[counter].classList.add('active');
  }
}

scrolSlide();

nextBtn.addEventListener('click', () => {
  if (counter >= slides.length - 1) return;
  progressBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  slidesContainer.style.transition = 'transform .4s ease-in-out';
  counter++;
  scrolSlide();
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  progressBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  slidesContainer.style.transition = 'transform .4s ease-in-out';
  counter--;
  scrolSlide();
});

//carousel loop
slidesContainer.addEventListener('transitionend', () => {
  if (slides[counter].className === 'last') {
    counter = slides.length - 2;
    slidesContainer.style.transition = 'none';
    scrolSlide();
  } else if (slides[counter].className === 'first') {
    slidesContainer.style.transition = 'none';
    counter = 1;
    scrolSlide();
  }
});
