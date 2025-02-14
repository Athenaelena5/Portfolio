document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.title');
    let currentIndex = 0;
    
    function updateTitle() {
        // Remove active class and add inactive to previous
        titles.forEach((title, index) => {
            if (index === currentIndex - 1 || (currentIndex === 0 && index === titles.length - 1)) {
                title.classList.add('inactive');
            } else {
                title.classList.remove('inactive');
            }
            title.classList.remove('active');
            
            // Reset animations
            if (title.classList.contains('programmer')) {
                title.style.width = '0';
            }
            if (title.classList.contains('designer')) {
                const path = title.querySelector('.path');
                if (path) {
                    path.style.strokeDashoffset = '310';
                }
            }
        });
        
        // Add active class to current title
        const currentTitle = titles[currentIndex];
        currentTitle.classList.add('active');
        
        // Handle specific animations
        if (currentTitle.classList.contains('programmer')) {
            currentTitle.style.width = currentTitle.scrollWidth + 'px';
        }
        
        // Update index for next iteration
        currentIndex = (currentIndex + 1) % titles.length;
    }

    // Initial state
    updateTitle();
    
    // Change title every 3.5 seconds
    setInterval(updateTitle, 2500);
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(() => plusSlides(1), 5000); // Change slide every 5 seconds

// JavaScript to generate dots
const slides = document.querySelectorAll('.mySlides');
const dotsContainer = document.querySelector('.dots-container');

slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('data-index', index);
    dotsContainer.appendChild(dot);
});