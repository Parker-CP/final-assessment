function reading(){
  $(document).on('click', '.markRead', function(event){
    var postId = $(this).parent().data('postId');
    $.ajax({
      method: "PATCH",
      url: "/api/v1/links/" + postId + "/read",
      success: read(postId)
    });
  });

  $(document).on('click', '.thumbsDown', function(event){
    var postId = $(this).parent().data('postId');
    $.ajax({
      method: "PATCH",
      url: "/api/v1/links/" + postId + "/unread",
      success: unread(postId)
    });
  });
}

function read(id){
  var quality = $('#' + id).children('span').text();
  console.log(quality);
  var qualityHash = {"Read: true ": "Read: true ",
                     "Read: false ": "Read: true "};
  var newQuality = qualityHash[quality];
  $('#' + id).children('span').text(newQuality);
  $('#' + id).children('a').addClass('text-muted');

}

function unread(id){
  var quality = $('#' + id).children('span').text();
  var qualityHash = {"Read: true ": "Read: false ",
                     "Read: false ": "Read: false "};
  var newQuality = qualityHash[quality];
  $('#' + id).children('span').text(newQuality);
  $('#' + id).children('a').removeClass('text-muted');
}