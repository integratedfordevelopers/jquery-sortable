$(function  () {
  $("ol.nav").integratedSortable({
    group: 'nav',
    nested: false,
    vertical: false,
    exclude: '.divider-vertical',
    onDragStart: function($item, container, _super) {
      $item.find('ol.dropdown-menu').integratedSortable('disable');
      _super($item, container);
    },
    onDrop: function($item, container, _super) {
      $item.find('ol.dropdown-menu').integratedSortable('enable');
      _super($item, container);
    }
  });
  
  $("ol.dropdown-menu").integratedSortable({
    group: 'nav'
  });
});
