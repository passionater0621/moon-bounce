// ==UserScript==
// @name         Moonbounce Chat Keybind
// @namespace    https://github.com/diary001/moonbounce
// @supportURL   https://discord.gg/mbe
// @license      MIT
// @version      1.0.1
// @description  ((made with <3 by lune))
// @author       lune / linktr.ee/moon
// @match        *://*/*
// @icon         https://framerusercontent.com/images/iuVZmsE2sifPExZXNrETQrDkU.png
// @grant        none
// @downloadURL  https://update.greasyfork.org/scripts/490052/Moonbounce%20Chat%20Keybind.user.js
// @updateURL    https://update.greasyfork.org/scripts/490052/Moonbounce%20Chat%20Keybind.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const simulateClick = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    function toggleChatbox() {
        const chatBoxContainer = document.querySelector("div#moonbounce-ext-container-mbheeaapbjpckahhciogfdodofjjldem");
        if (chatBoxContainer) {
            //console.log("%cChatbox container found.", "background: #44515a; color: #aef0ff; font-size: x-large");
            const chatBoxButton = chatBoxContainer.shadowRoot.querySelector("#MOONBOUNCE\\.PORTAL > div:nth-child(2) > div > div > div > div._frame_1htaw_72 > button");
            if (chatBoxButton) {
                //console.log("%cChatbox button found.", "background: #44515a; color: #aef0ff; font-size: x-large");
                chatBoxButton.dispatchEvent(simulateClick);
            } else {
                //console.log("%cChatbox button not found.", "background: #44515a; color: #aef0ff; font-size: x-large");
            }
        } else {
            //console.log("%cChatbox container not found.", "background: #44515a; color: #aef0ff; font-size: x-large");
        }
    }

    function focusInput() {
        const inputContainer = document.querySelector("div#moonbounce-ext-container-mbheeaapbjpckahhciogfdodofjjldem");
        if (inputContainer) {
            //console.log("%cInput container found.", "background: #44515a; color: #aef0ff; font-size: x-large");
            const input = inputContainer.shadowRoot.querySelector("#MOONBOUNCE\\.PORTAL > div:nth-child(2) > div > div > div._base_1jfm3_1._overlay_card_mdpvo_9 > div > div:nth-child(5) > div > form > div > input");
            if (input) {
                //console.log("%cInput found.", "background: #44515a; color: #aef0ff; font-size: x-large");
                input.focus();
            } else {
                //console.log("%cInput not found.", "background: #44515a; color: #aef0ff; font-size: x-large");
            }
        } else {
            //console.log("%cInput container not found.", "background: #44515a; color: #aef0ff; font-size: x-large");
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === '/') {
            //console.log("%c/ has been pressed.", "background: #44515a; color: #aef0ff; font-size: x-large");
            toggleChatbox();

            setTimeout(function() {
                focusInput();
                //console.log("%cWaited 1ms.", "background: #44515a; color: #aef0ff; font-size: x-large");
            }, 1);
        }
    });
})();
