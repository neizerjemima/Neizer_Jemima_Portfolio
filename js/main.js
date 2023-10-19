(() => {
    (function () {
        "use strict";
        console.log("fired");
    

        let button = document.querySelector("#button");
        let burgerMenu = document.querySelector("#burger-con");

        function hamburgerMenu() {
            burgerMenu.classList.toggle("slide-toggle");
            button.classList.toggle("expanded");
        }

        button.addEventListener("click", hamburgerMenu, false);
    })();
})();

// (() => {
//     const heroImage = gsap.utils.toArray('.hero-image');

//     heroImage.forEach(box => {
//   gsap.to('.hero-image', { // this will animate ALL boxes
//     x: -300,
//     scrollTrigger: {
//       trigger: '.hero-image',  // this will use the first box as the trigger
//       scrub: true
//     }
//   })
// });
    
// })();
(() => {
const boxes = gsap.utils.toArray('.hero-image');
boxes.forEach(box => {
  const anim = gsap.to(box, { x: 300, paused: true });
  
  heroImage.forEach(box => 
    gsap.to('.hero-image',
    ScrollTrigger.create({
    trigger: box,
    start: "left 70%",
    onEnter: () => anim.play()
  });
  
  ScrollTrigger.create({
    trigger: box,
    start: "right left",
    onLeaveBack: () => anim.pause(0)
  });
});
});