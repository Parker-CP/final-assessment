function buildLinks(){
  $.ajax({
    method: "GET",
    url: "/api/v1/links",
    dataType: "JSON",
    success: function(links){
      links.sort(function(x,y){
        return (y.created_at < x.created_at) ? -1 : ((y.created_at > x.created_at) ? 1 : 0);
      });
      $(links).each(function(index, link){
        $('#links').append(buildLink(link));
      });
    }
  });
}

function buildLink(link) {
  return (
    "<div class='post col-md-12' id='" + link.id + "' data-post-id='"+ link.id + "' data-post-read='" + link.read + "'>" +
    "<div class='linkTitle'><h2 class='title' data-id='" + link.id + "' id='title-" + link.id + "'> " + link.title + "</h2></div>" +
    "<a href='" + link.url + "' class='linkUrl' data-id='" + link.id + "' id='body-" + link.id + "'>" + link.url + "</a>" +
    "<br><span class='linkQuality'>Read: " + link.read + " </span><br>" +
    "<input type='button' class='deletePost btn-danger glyphicon' value='Delete'></input><br><br><hr><br></div>"
  );
}
