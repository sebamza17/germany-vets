/**
 * Sidebar object
 */
let navbar = {};
var self = navbar;

self.isOpen = false;

self.selector = '.navbar';
self.itemSelector = '.navbar-item';

let $navbar = $(self.selector);
let $navbarItems = $(self.selector + ' ' + self.itemSelector);

// Init function
sidebar.init = function () {
    $navbarItems.on('mouseenter', function (event) {
        event.stopPropagation();
        $(this).toggleClass('navbar-item--active');
    });
    $navbarItems.on('mouseleave', function (event) {
        $(this).removeClass('navbar-item--active');
        $(this).find(self.itemSelector).removeClass('navbar-item--active');
    })
};

sidebar.init();