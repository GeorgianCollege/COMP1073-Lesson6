"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    var checkMeOut;

    checkMeOut = document.getElementById("checkMeOut");



    /*
    checkMeOut.onclick(function(){
        console.log("checkMeOut clicked");
    });
    */


    checkMeOut.addEventListener("change", function () {
        
        if (checkMeOut.checked) {
            console.log("It's checked");
        } else {
            console.log("It's unchecked");
        }
        
        /* ternary form
        (checkMeOut.checked) ? console.log("It's checked") : console.log("It's unchecked");
        */
    });




})();

