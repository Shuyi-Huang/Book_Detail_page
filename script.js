
// user rating
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');
  // mouse on
  stars.forEach(star => {
    star.addEventListener('mouseenter', function() {
      fillStarsUpTo(this.dataset.value);
    });
    //mouse lease
    star.addEventListener('mouseleave', function() {
      clearStars();
    });
    // click star
    star.addEventListener('click', function() {
      alert(`You rated this ${this.dataset.value} stars!`);
    });
  });
    // fill color
  function fillStarsUpTo(value) {
    stars.forEach(star => {
      star.innerHTML = star.dataset.value <= value ? '&#9733;' : '&#9734;';
    });
  }

  function clearStars() {
    stars.forEach(star => {
      star.innerHTML = '&#9734;';
    });
  }
});



