
// saving the element in a variables
const nextSlide = document.getElementById("btn-next");
const prevSlide = document.getElementById("btn-prev");
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});



// current slide counter
let currentSlide = 0;
// number of slides
let maxSlide = slides.length - 1;

// adding event listener for next slide button
nextSlide.addEventListener("click", function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});



// adding event listener for prev slide button
prevSlide.addEventListener("click", function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});


// slide automatic after 2 second
setInterval(() => {
    if (currentSlide === maxSlide) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}, 2000);