$(document).ready(function() {
  var myItems;

  $.getJSON('cal�ados.json', function(data) {
      myItems = data.items;
      console.log(myItems);
  });
});