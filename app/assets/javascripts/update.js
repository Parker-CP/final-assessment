
function update(){
  $('body').on('click', '.title', function(){
    var dataId = $(this).data('id');
    var id = $(this).attr('id');
    $('#' + id).on('blur keydown', function(event){
      if (event.type === 'blur' || event.keyCode === 13) {
        editLink(dataId, this, {title: $(this).text().trim()});
      }
    });
  });

  $('body').on('click', '.linkUrl', function(){
    var dataId = $(this).data('id');
    var id = $(this).attr('id');
    $('#' + id).on('blur keydown', function(event){
      if (event.type === 'blur' || event.keyCode === 13) {
        editLink(dataId, this, {url: $(this).text().trim()});
      }
    });
  });
}

function editLink(id, div, updatedContent){
  $.ajax({
    method: 'PATCH',
    url: '/api/v1/links/' + id,
    dataType: 'JSON',
    data: updatedContent,
  });
}
