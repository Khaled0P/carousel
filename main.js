const container = document.querySelector('.container');
const slidesContainer = document.querySelector('.slidesContainer');
const slides = document.querySelectorAll('.slidesContainer img');

//buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBtns = document.querySelectorAll('.progressBtns');

//scroll by size
const size = slides[0].clientWidth;

//counter
let counter = 1;
function scrolSlide() {
  slidesContainer.style.transform = `translateX(${-size * counter}px)`;
  //progessBtns loop
  if (progressBtns[counter].className === 'progressBtns first') {
    progressBtns[1].classList.add('active');
  } else if (progressBtns[counter].className === 'progressBtns last') {
    progressBtns[slides.length - 2].classList.add('active');
  } else {
    progressBtns[counter].classList.add('active');
  };
};

//loop at end of slide
function loopNext(){
  progressBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  slidesContainer.style.transition = 'transform .4s ease-in-out';
};

//loop at beginning of slide
function loopPrev(){

  progressBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  slidesContainer.style.transition = 'transform .4s ease-in-out';
};

//automatic slider

function autoSlide(){
  loopNext();
  counter++;
  scrolSlide();
}

scrolSlide();

nextBtn.addEventListener('click', () => {
  if (counter >= slides.length - 1) return;
  loopNext();
  counter++;
  scrolSlide();
  //reset timer
  clearInterval(timer);
  timer = setInterval( ()=>{
    autoSlide()
  }, 4000);
});

//start auto slide
window.addEventListener('load', () =>{
timer = setInterval( ()=>{
  autoSlide()
}, 4000);
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  loopPrev();
  counter--;
  scrolSlide();
  //reset timer
  clearInterval(timer);
  timer = setInterval( ()=>{
    autoSlide()
  }, 4000);
});

//carousel loop reset
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

progressBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    counter = index;
     progressBtns.forEach((btn) => {
      btn.classList.remove('active');
     });
    slidesContainer.style.transition = 'transform .4s ease-in-out';
    scrolSlide();
    //reset timer
    clearInterval(timer);
    timer = setInterval( ()=>{
      autoSlide()
    }, 4000);
  });
});
