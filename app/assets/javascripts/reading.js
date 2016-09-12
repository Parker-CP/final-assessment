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
      url: "/api/v1/links/" + postId + "/downvote",
      success: downVote(postId)
    });
  });
}

function read(id){
  var quality = $('#' + id).children('span').text();
  console.log(quality);
  var qualityHash = {"Read: true ": "Read: false ",
                     "Read: false ": "Read: true "};
  var newQuality = qualityHash[quality];
  $('#' + id).children('span').text(newQuality);
}

function downVote(id){
  var quality = $('#' + id).children('span').text();
  var qualityHash = {"Quality: swill ": "Quality: swill ",
                     "Quality: plausible ": "Quality: swill ",
                     "Quality: genius ": "Quality: plausible "};
  var newQuality = qualityHash[quality];
  $('#' + id).children('span').text(newQuality);
}
