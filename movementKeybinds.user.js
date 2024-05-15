// ==UserScript==
// @name         Moonbounce Movement Keybinds
// @namespace    https://github.com/diary001/moonbounce
// @supportURL   https://discord.gg/mbe
// @license      MIT
// @version      1.0.1
// @description  ((made with <3 by lune))
// @author       lune / linktr.ee/moon
// @match        *://*/*
// @icon         https://framerusercontent.com/images/iuVZmsE2sifPExZXNrETQrDkU.png
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/495082/Moonbounce%20Movement%20Keybinds.user.js
// @updateURL https://update.greasyfork.org/scripts/495082/Moonbounce%20Movement%20Keybinds.meta.js
// ==/UserScript==

(function() {
  'use strict';

  const keyMap = {
    'w': 'ArrowUp',
    's': 'ArrowDown',
    'a': 'ArrowLeft',
    'd': 'ArrowRight'
  };

  function handleKeyEvent(e) {
    const mappedKey = keyMap[e.key];
    if (mappedKey) {
      dispatchKeyEvent(e.type, mappedKey);
    }
  }

  document.addEventListener('keydown', handleKeyEvent);
  document.addEventListener('keyup', handleKeyEvent);

  function dispatchKeyEvent(type, key) {
    var event = new KeyboardEvent(type, {
      key: key,
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }
})();
