// ==UserScript==
// @name         Moonbounce Networth Calculator
// @namespace    https://github.com/diary001/moonbounce
// @supportURL   https://discord.gg/mbe
// @license      MIT
// @version      1.0.0
// @description  ((made with <3 by lune))
// @author       lune / linktr.ee/moon
// @match        *://moonbounce.gg/*
// @icon         https://framerusercontent.com/images/iuVZmsE2sifPExZXNrETQrDkU.png
// @grant        none
// @downloadURL  https://github.com/diary001/moonbounce/raw/main/networth.user.js
// @updateURL    https://github.com/diary001/moonbounce/raw/main/networth.user.js
// ==/UserScript==


(function() {
  'use strict';

  function updateAllItemsText(totalValue) {
    const allItemsElement = document.querySelector('div._text-xl_128i6_229._neutral-700_128i6_727._semibold_128i6_30');
    if (allItemsElement) {
      allItemsElement.textContent = `All Items Worth ${totalValue} MP`;
    }
  }

  function fetchAndUpdateData() {
    fetch('https://moonbounce.gg/u/@me/backpack?_data=routes%2Fu.%5B%40me%5D%2B%2Fbackpack%2B%2F_index')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('API request failed');
        }
      })
      .then(data => {
        if (data.hasOwnProperty('batched')) {
          const items = data.batched;
          let totalValue = 0;
          for (let item of items) {
            totalValue += item.stack * item.alch_price;
          }
          updateAllItemsText(totalValue);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function observeDOM() {
    const targetNode = document.body;
    const observerOptions = {
      childList: true,
      subtree: true
    };
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          const allItemsElement = document.querySelector('div._text-xl_128i6_229._neutral-700_128i6_727._semibold_128i6_30');
          if (allItemsElement) {
            fetchAndUpdateData();
          }
        }
      });
    });
    observer.observe(targetNode, observerOptions);
  }

  function checkAndUpdateText() {
    const allItemsElement = document.querySelector('div._text-xl_128i6_229._neutral-700_128i6_727._semibold_128i6_30');
    if (allItemsElement && allItemsElement.textContent === 'All Items') {
      fetchAndUpdateData();
    }
  }

  observeDOM();
  fetchAndUpdateData();
  setInterval(checkAndUpdateText, 500);
})();
