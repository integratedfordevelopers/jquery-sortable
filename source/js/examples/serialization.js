$(function  () {
  var group = $("ol.serialization").integratedSortable({
    group: 'serialization',
    delay: 500,
    onDrop: function ($item, container, _super) {
      var data = group.integratedSortable("serialize").get();

      var jsonString = JSON.stringify(data, null, ' ');

      $('#serialize_output2').text(jsonString);
      _super($item, container);
    }
  });
});
