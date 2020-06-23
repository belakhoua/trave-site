import "../styles/styles.css";
import MenuItem from "./modules/MobileMenu";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

const mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 60);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 75);

if (module.hot) {
  module.hot.accept();
}
