/**
 * Layout object
 */
let layout = {};
var self = layout;

layout.tableSelector = '.rf-table-wrapper';

let $table = $(layout.tableSelector);

// Init function
layout.init = function () {
  
  if ($(window).height() > 700) {
    let topOffset = $table.offset().top;
    let marginOffset = 35;
    let fullOffset = topOffset + marginOffset;
    $table.attr('style', 'max-height: calc(100vh - ' + fullOffset + 'px)');
  }
  
};

layout.init();