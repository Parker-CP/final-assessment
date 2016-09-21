function buildLinks(){
  $.ajax({
    method: "GET",
    url: "/api/v1/links",
    dataType: "JSON",
    success: function(links){
      links.sort(function(x,y){
        return (y.title < x.title) ? 1 : ((y.title > x.title) ? -1 : 0);
      });
      $(links).each(function(index, link){
        $('#links').append(buildLink(link));
      });
    }
  });
}

function buildLink(link) {
  return (
    "<div class='" + link.read + " post col-md-12' id='" + link.id + "' data-post-id='"+ link.id + "' data-post-read='" + link.read + "'>" +
    "<div class='linkTitle'><h2 contenteditable='true' class='title' data-id='" + link.id + "' id='title-" + link.id + "'> " + link.title + "</h2></div>" +
    "<a contenteditable='true' class='linkUrl' data-id='" + link.id + "' id='body-" + link.id + "'>" + link.url + "</a> --- " +
    "<a href='" + link.url + "' class='linkUrl' data-id='" + link.id + "' id='body-" + link.id + "'>Visit</a>" +
    "<br><span class='linkQuality'>Read: " + link.read + " </span><br>" +
    "<input type='button' class='markRead btn-success' value='Mark As Read'></input>" +
    "<input type='button' class='markUnread btn-warning' value='Mark Unread'></input>"
  );
}
