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

document.querySelector(".name h2").style.fontSize = "6vw";

const player = new Plyr('Video');

const panels = gsap.utils.toArray(".panel");
gsap.to(panels, {
  xPercent: (i) => -100 * i,
  x: (i) => 100 * i,
  duration: (i) => i,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "+=" + 100 * panels.length + "5",
    scrub: true,
    pin: true,
  }
});




// (() => {
//   gsap.registerPlugin(ScrollTrigger);

//   let container = document.querySelector('.container');
//   let sections = gsap.utils.toArray(".panel");
//   let getRandomColor = gsap.utils.random("red,blue,orange,purple".split(","), true);
  
//   let scrollTween = gsap.to('.container', {
//     x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//     ease: "none",
//     scrollTrigger: {
//       trigger: container,
//       pin: true,
//       scrub: 1,
//       end: () => "+=" + container.offsetWidth,
//       invalidateOnRefresh: true,
//     }
//   });
  
  
//   const addSection = () => {
//     const sectionEl = document.createElement("section");
//     sectionEl.classList.add('panel', getRandomColor());
//     sectionEl.textContent = "New section " + sections.length;
    
//     const st = scrollTween.scrollTrigger,
//           oldProgress = st.progress;
    
//     container.append(sectionEl);
    
//     sections.push(sectionEl);
    
//     // we use a CSS variable because when you pin something with ScrollTrigger, it must record the width/height initially and then revert that when refreshing, thus if we directly set the width inline, it'll be lost during refresh().
//     gsap.set(container, { "--width": (sections.length * 100) + "%" });
    
//     // update scrolltrigger
//     ScrollTrigger.refresh();
//     // adjust the scroll position according to the previous ratio to make it appear seamless even though the ratios changed
//     st.scroll(st.start + (st.end - st.start) * oldProgress * (sections.length - 2) / (sections.length - 1));
//     st.update(); // don't wait for the scroll event to trigger the scrub animation - force it immediately so we can force it to the end
//     st.endAnimation(); // get rid of the scrub animation to the new scroll position (to make it look seamless)
//   }
// })()

// (() => {
//     const header = document.querySelector('header')
//     function stickHeader() {
//       if(window.scrollX > 100) {
//         header.classList.add("sticky");} 
//         else{header.classList.remove("sticky")
//       }
//     }

//     window.addEventListener("scroll",stickHeader);
// })()

// (() => {
//   ScrollTrigger.create({
//     start: 'top -80',
//     end: 99999,
//     toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
//   });
// })()
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

