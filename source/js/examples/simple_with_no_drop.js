$(function() {
  $("ol.simple_with_drop").integratedSortable({
    group: 'no-drop',
    handle: 'i.icon-move',
    onDragStart: function ($item, container, _super) {
      // Duplicate items of the no drop area
      if(!container.options.drop)
        $item.clone().insertAfter($item);
      _super($item, container);
    }
  });
  $("ol.simple_with_no_drop").integratedSortable({
    group: 'no-drop',
    drop: false
  });
  $("ol.simple_with_no_drag").integratedSortable({
    group: 'no-drop',
    drag: false
  });
});
