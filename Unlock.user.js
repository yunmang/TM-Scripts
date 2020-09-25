// ==UserScript==
// @name         Unlock
// @namespace    https://github.com/yunmang/TM-Scripts
// @downloadURL  https://github.com/yunmang/TM-Scripts/raw/master/Unlock.user.js
// @version      0.1
// @description  Unlock user-select
// @author       yunmang
// @match        http*://*/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function () {
    // Get all elements that have a style attribute
    var elms = document.querySelectorAll("*[style]");

    // Loop through them
    Array.prototype.forEach.call(elms, function(elm) {
        if (elm.style.userSelect = "none")
        {
            elm.style.userSelect = "auto";
        }
    });
})
