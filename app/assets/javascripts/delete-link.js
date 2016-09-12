function deleteLink() {
  $(document).on('click', '.deletePost', function(){
    var postId = $(this).parent().data('postId');
    $.ajax({
      method: "DELETE",
      url: "/api/v1/links/" + postId,
      data: {id: postId},
      success: function(deletedPost){
        $(".post[data-post-id=" + postId + "]").animate({
          padding: "0px",
          'margin-top':'-10px',
          'font-size':'0px'
        }, 500, function(){
          $(".post[data-post-id=" + postId + "]").remove();
        });
      }
    });
  });
}
