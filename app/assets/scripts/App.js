import "../styles/styles.css";
import MenuItem from "./modules/MobileMenu";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 60);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 75);

if (module.hot) {
  module.hot.accept();
}
