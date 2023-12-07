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

(() => {
    var tl = new TimelineMax({
        paused:true
      });
      // letter animation
      tl.fromTo(".anim-typewriter", 8, {
        width: "0",
      }, {
        width: "20.18em", /* same as CSS .line-1 width */
        ease:  SteppedEase.config(37)
      }, 0);
      // text cursor animation
      tl.fromTo(".anim-typewriter", 0.5, {
        "border-right-color": "rgba(255,255,255,0.75)"
      }, {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease:  SteppedEase.config(37)
      }, 0);
      
      tl.play();
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
