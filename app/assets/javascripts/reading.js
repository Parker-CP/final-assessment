function reading(){
  $(document).on('click', '.markRead', function(event){
    var postId = $(this).parent().data('postId');
    $.ajax({
      method: "PATCH",
      url: "/api/v1/links/" + postId + "/read",
      success: read(postId)
    });
  });

  $(document).on('click', '.markUnread', function(event){
    var postId = $(this).parent().data('postId');
    $.ajax({
      method: "PATCH",
      url: "/api/v1/links/" + postId + "/unread",
      success: unread(postId)
    });
  });
}

function read(id){
  $('#' + id).children('span').text("Read: true");
  $('#' + id).addClass('read-back');
}

function unread(id){
  $('#' + id).children('span').text("Read: false");
  $('#' + id).removeClass('read-back');
  $('#' + id).removeClass('true');
}
