function createLink(){
  $('#submit-link').on('click', function(){
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
      },
      error: function(data){
        alert("Please enter a valid URL");
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
