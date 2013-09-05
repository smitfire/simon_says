$(document).ready(function(){
  $('#get_color').click(function(event) {
    event.preventDefault();
    var url = ('/color');
    $.post(url, function(data, status, server){
      console.log(data);
      $('#color_me li:nth-child(' + data['cell'] + ')').css('background', data['color']);
    }, 'json');
  });
});
