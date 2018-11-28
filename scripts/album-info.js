$(document).ready(function(){
  $('#album-title').text(album.title);
  $('img#ablum-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
});
