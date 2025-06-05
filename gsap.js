import { gsap } from "https://cdn.skypack.dev/gsap";
import SplitType from "https://esm.sh/split-type";

let HeaderHello = new SplitType("#about-header1", { types: "chars" });
let HeaderYou = new SplitType("#about-header2", { types: "chars" });

document.addEventListener("DOMContentLoaded", () => {
  startAnimation();
})
function startAnimation() {
  let timeLineone = gsap.timeline();

  timeLineone.from(HeaderHello.chars, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: "back.out(1.7)",
  });

  timeLineone.from(
    HeaderYou.chars,
    {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  );
}
