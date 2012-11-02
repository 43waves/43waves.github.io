jQuery(document).ready(function($){
  $('#twitter').mouseover(function(){
    $('#mousing').text("Twitter");
  });

  $('#twitter').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#play').mouseover(function(){
    $('#mousing').text("Apps");
  });

  $('#play').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#about').mouseover(function(){
    $('#mousing').text("About");
  });

  $('#about').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });
});
