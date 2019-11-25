const images = document.querySelectorAll('.slide');
document.addEventListener('scroll', debounce(handleScroll))

function handleScroll(e) {
  images.forEach(image => {
    const scrollHeight = window.scrollY + window.innerHeight;
    const slideInAt = scrollHeight - image.height / 2;
    const imgBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imgBottom;
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}
// taken from Underscore.js
function debounce(func, wait = 20, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};