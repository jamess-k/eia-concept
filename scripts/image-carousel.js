

const SLIDES = $(".slide");

const DOTS = $(".dot");


function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentDot = DOTS.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  DOTS.removeClass("current");
  currentDot.addClass("current");

}


$("#next-button").click(function() {
    nextSlide();
  });

$("#back-button").click(function() {
    prevSlide();
});


$("#dot1-button").click(function() {
  showSlide(1);
});

$("#dot2-button").click(function() {
  showSlide(2);
});

$("#dot3-button").click(function() {
  showSlide(3);
});

$("#dot4-button").click(function() {
  showSlide(4);
});

$("#dot5-button").click(function() {
  showSlide(5);
});

$("#dot6-button").click(function() {
  showSlide(6);
});

$("#dot7-button").click(function() {
  showSlide(7);
});

$("#dot8-button").click(function() {
  showSlide(8);
});

$("#dot9-button").click(function() {
  showSlide(9);
});
