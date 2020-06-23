import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
  constructor(elements, scrollPct) {
    this.itemsToReveal = elements;
    this.scrollPercent = scrollPct;
    this.hideInitially();
    this.browserHeight = window.innerHeight;
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight;
      })
    );
  }

  calcCaller() {
    this.itemsToReveal.forEach((el) => {
      if (el.isRevealed === false) {
        this.calculateIfScrolledTo(el);
      }
    });
  }

  calculateIfScrolledTo(el) {
    //window.innerHeight is the height of window viewport in pixels
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      const scrollPercent =
        (el.getBoundingClientRect().top / this.browserHeight) * 100;
      if (scrollPercent < this.scrollPercent) {
        el.classList.add("reveal-item--is-visible");
        el.isRevealed = true;
        if (el.isLastItem === true) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((el) => {
      el.classList.add("reveal-item");
      el.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
