$(document).ready(init);

function init(){
  $('.edit').on('click', sendEdit)
}

function sendEdit(){
  var cookies = document.cookie;
  console.log(cookies)
  var data = {cookie: cookies}
  data.email = $('.editEmail').val();
  data.name = $('.editName').val();
  data.picture = $('.editPic').val();
  console.log($('.editPic').val())

  $.ajax({
    type: 'POST',
    url: '/turtles/yourMother',
    data: data
  })
  .done(function(data){
    window.location.href = 'turtles/edited'
  })
}