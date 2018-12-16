import 'intersection-observer';

const SELECTOR = '.animate-item';
const ANIMATE_CLASS_NAME = 'fade-in';

let observer = null;

const animateItems = document.querySelectorAll(SELECTOR);

const enable = () => {
  console.log('ani.js is loaded')
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        // in view
        entry.target.classList.add(ANIMATE_CLASS_NAME);
        observer.unobserve(entry.target);
      } else {
        // out of view
        entry.target.classList.remove(ANIMATE_CLASS_NAME);
      }
    });
  });
  animateItems.forEach(animateItem => {
    observer.observe(animateItem);
  });
};

const ani = () => {


  if (!window.IntersectionObserver) {

    throw Error(`
      Your browser does not support IntersectionObserver!
      Get a polyfill from here:
      https://github.com/w3c/IntersectionObserver/tree/master/polyfill
    `);
  }

    enable();

  return {
    enable,
  };
};

export default ani;