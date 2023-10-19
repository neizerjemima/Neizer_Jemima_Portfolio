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
