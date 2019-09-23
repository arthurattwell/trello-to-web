/*jslint browser, for */

// Click to filter

// Options
// 1. Clickable elements
var clickableElements = '.card-list';

// Check if filter is ready
function filterReady() {
    'use strict';
    if (document.querySelectorAll('.visible').length > 0) {
        return true;
    } else {
        return false;
    }
}

// Copy text to the filter box
function copyToFilter(event) {
    'use strict';
    var element = event.target;
    var filterBox = document.querySelector('input[type="search"');
    filterBox.value = element.textContent;

    // Trigger filter event
    // (https://github.com/rjsf-team/react-jsonschema-form/issues/934#issuecomment-395460396)
    filterBox.dispatchEvent(new Event('input', { bubbles: true }))

    // Also replace the h1 with that search
    var heading = document.querySelector('h1');
    heading.innerText = element.textContent;
}

// Listener
function listenForClicksOnClickableElements(element) {
    'use strict';
    element.addEventListener('click', function (event) {
        copyToFilter(event);
    });
}

// For each clickable element, copy its content to the filter
function makeClickable() {
    'use strict';

    // Listen for clicks and filter when clicked
    var elements = document.querySelectorAll(clickableElements);
    var i;
    for (i = 0; i < elements.length; i += 1) {
        listenForClicksOnClickableElements(elements[i]);
    }
}

// Go when filter is ready
setInterval(function () {
    'use strict';
    if (filterReady) {
        makeClickable();
        clearInterval();
    }
}, 500);
