/**
 * Layout object
 */
let layout = {};
var self = layout;

layout.tableSelector = '.rf-table-wrapper';

let $table = $(layout.tableSelector);

// Init function
layout.init = function () {
  
  $('table.autotable').on('scroll', function () {
    $("table > *").width($("table.autotable").width() + $("table.autotable").scrollLeft());
  });
  
  return;
  setTimeout(function () {
    
    // Init table
    var table = $('.rf-table');
    
    // Init table headers
    var thead = $('.rf-table-wrapper thead');
    var headers = $('.rf-table-wrapper thead tr > *');
    thead.css({
      width: thead.offsetWidth + 'px',
    });
    headers.map(function (key, header) {
      console.log(header.offsetWidth + 'px');
      $(header).css({
        width: header.offsetWidth + 'px'
      });
    });
    
    // Init table subheaders
    var subheaders = $('td.table__subtitle');
    subheaders.map(function (key, subheder) {
      $(subheder).css({
        width: $(subheder).outerWidth() + 'px',
      });
    });
    
    // Init table body
    var tableBody = $('.rf-table-wrapper tbody');
    
    table.addClass('rf-table--fixed');
    
    var thead = $(this).find('thead');
    var tsubheads = $(this).find('tr.to-fixed-row');
    
    if (true) {
      
      // Head
      thead.addClass('fixed');
      thead.css({
        'display': 'block',
        'top': $(this).scrollTop() + 'px'
      });
      
      // Subhead
      tsubheads.addClass('fixed-row');
      tsubheads.css({
        top: ($(thead).outerHeight() + $(this).scrollTop()) + 'px',
      });
      
      // Body
      if ($(window).height() > 700) {
        let topOffset = $table.offset().top;
        let marginOffset = 90;
        let fullOffset = topOffset + marginOffset;
        tableBody.css({
          'display': 'block',
          'padding-top': (tsubheads.outerHeight() + thead.outerHeight()) + 'px',
          'max-height': 'calc(100vh - ' + fullOffset + 'px)'
        })
        tableBody.attr('style', 'max-height: calc(100vh - ' + fullOffset + 'px)');
      }
      
    } else {
      // thead.removeClass('fixed');
      // tsubheads.removeClass('fixed-row');
    }
  }, 2000)
  
};

layout.init();

/**
 * Sidebar object
 */
let sidebar = {};
var self = sidebar;

sidebar.isOpen = false;

sidebar.selector = '.sidebar';
sidebar.togglerSelector = '.sidebar .sidebar__item.sidebar__item--toggle';
sidebar.openIcon = $('.sidebar a.sidebar__open-icon');
sidebar.closeIcon = $('.sidebar a.sidebar__close-icon');

let $sidebar = $(sidebar.selector);
let $openIcon = sidebar.openIcon;
let $closeIcon = sidebar.closeIcon;

// Init function
sidebar.init = function () {
  
  if (!self.isOpen) {
    $openIcon.show();
    $closeIcon.hide();
  } else {
    $openIcon.hide();
    $closeIcon.show();
  }
  
  $(self.togglerSelector).on('click', function () {
    self.isOpen = !self.isOpen;
    $sidebar.toggleClass('sidebar--open');
    console.log(self.isOpen);
    if (self.isOpen) {
      $openIcon.hide();
      $closeIcon.show();
    } else {
      $openIcon.show();
      $closeIcon.hide();
    }
  });
  
};

sidebar.init();