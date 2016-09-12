
function update(){
  $('body').on('click', '.title', function(){
    this.setAttribute('contentEditable', 'true');
    var dataId = $(this).data('id');
    var id = $(this).attr('id');
    $('#' + id).on('blur keydown', function(event){
      if (event.type === 'blur' || event.keyCode === 13) {
        this.setAttribute('contentEditable', 'false');
        editLink(dataId, this, { title: $(this).text()});
      }
    });
  });

  $('body').on('click', '.linkUrl', function(){
    this.setAttribute('contentEditable', 'true');
    var dataId = $(this).data('id');
    var id = $(this).attr('id');
    $('#' + id).on('blur keydown', function(event){
      if (event.type === 'blur' || event.keyCode === 13) {
        this.setAttribute('contentEditable', 'false');
        editLink(dataId, this, { url: $(this).text()});
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
