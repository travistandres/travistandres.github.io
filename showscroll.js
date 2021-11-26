// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.showscroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return ( 
   (rect.right <= (window.innerWidth || document.documentElement.clientWidth) && 
    rect.bottom <= (window.innerWidth || document.documentElement.clientWidth) && 
    rect.left <=   (window.innerWidth || document.documentElement.clientWidth) && 
    rect.top <= (window.innerWidth || document.documentElement.clientWidth)
  ));
}