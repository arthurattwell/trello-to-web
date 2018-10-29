/*jslint browser */
/* globals holmes*/

// Options for holmes.js
// This function runs after filter.js, where
// the holmes() function is created.
holmes({
    input: '.filter input',
    find: '.card',
    placeholder: '<p>Sorry, nothing matches your filter.</p>',
    class: {
        visible: 'visible',
        hidden: 'visuallyhidden'
    }
});
