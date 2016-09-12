function createLink(){
  $('#submit-link').on('click', function(){
    console.log("You tried to create a link");
    var title = $('#link-title').val();
    var url = $('#link-url').val();
    var data = {title: title, url: url};
    $.ajax({
      method: 'POST',
      url: '/api/v1/links',
      dataType: "JSON",
      data: data,
      success: function(link){
        resetFields();
        insertLink(link);
      }
    });
  });
}

function resetFields(){
  $('#link-title').val('');
  $('#link-url').val('');
}

function insertLink(link){
  $('#links').prepend(buildLink(link));
}
