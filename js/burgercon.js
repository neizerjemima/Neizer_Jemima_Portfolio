    (function () {
        "use strict";
        console.log("fired");
    

        let button = document.querySelector("#button");
        let burgerMenu = document.querySelector("#burger-con");

        function hamburgerMenu() {
            burgerMenu.classList.toggle("slide-toggle");
            button.classList.toggle("expanded");
        }
    })();

export {hamburgerMenu};
// export {greet, depart, family};