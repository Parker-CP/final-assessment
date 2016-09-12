function filter(){
  $("#filter").on('change', function() {
    var $links = $('#links').children();
    var currentStatus = $("#filter").val();
    $links.each(function (index,link) {
    var $link = $(link);
    var str = $link.children('span').text();
    console.log(str);
      if((str.indexOf(currentStatus) >= 0)) {
        $link.parent().show();
      } else {
        $link.parent().hide();
      }
    });
  });
}
