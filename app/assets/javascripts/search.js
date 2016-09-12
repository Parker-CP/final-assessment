function search() {
  $('#search').keyup(function(){
     var searchInput = $(this).val().toLowerCase();

     if(searchInput === ""){
       $('div.post').show();
     } else {
       $('div.post').each(function(){

        var title = $(this).find('.linkTitle').html().toLowerCase();
        var url = $(this).find('.linkUrl').html().toLowerCase();

        var searchTitle = title.indexOf(searchInput) >= 0;
        var searchUrl  = url.indexOf(searchInput) >= 0;

        if (searchTitle || searchUrl) {
          $(this).show();
        } else {
          $(this).hide();
        }
       });
     }
  });
}
