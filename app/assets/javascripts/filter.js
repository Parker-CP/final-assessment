function filter(){
  $("#filter").on('change', function() {
    var $links = $('#links').children();
    var currentStatus = $("#filter").val();
    
    $links.each(function (index,link) {
    var $link = $(link);
    var str = $link.children('span').text();
      if((str.indexOf(currentStatus) >= 0)) {
        $link.show();
      } else {
        $link.hide();
      }
    });
  });
}
