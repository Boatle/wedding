/// PREVIOUS BUTTON ///
function carouselPrevious () {
  hideActive()
  currentSlide -= 1
  showActive()
}

document.getElementById('carousel-previous').onclick = carouselPrevious

/// NEXT BUTTON ///
function carouselNext () {
  hideActive()
  currentSlide += 1
  showActive()
}

document.getElementById('carousel-next').onclick = carouselNext

let currentSlide = 0

let slides = document.getElementsByClassName('img-carousel-trio')

function showActive () {
  slides[currentSlide].classList.toggle("active")
}

function hideActive () {
  slides[currentSlide].classList.toggle("active")
}
