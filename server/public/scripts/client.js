console.log('sourced!');
$(document).ready(function(){
  console.log('jquery was correctly sourced!');

  getFishData();
function getFishData(){
  $.ajax({
    type: 'GET',
    url: '/fish',
    success: function(response) {
      console.log('response', response); // returns fishList array
      $('#fishTank').empty();
      for (var i = 0; i < response.length; i++) { //response is the array
        $('#fishTank').append('<li>' + response[i].name + '</li>'); //append fish name to li in DOM
      }
    }
  });

  $.ajax({
    type: 'GET',
    url: '/fish/first/name',
    success: function(response) {
      console.log('response', response); // returns fishList array
        $('#fishFishy').text(response);
      }
  });
} //

  $('#newFishButton').on('click', function(){
    var newFishObject = {};
    newFishObject.name = $('#newFishName').val();
    $.ajax({
      type: 'POST',
      url: '/fish/new',
      data: newFishObject,
      success: function(response) {
        console.log(response);
        getFishData();
      },
      error: function(error){
      alert('ERROR: Please Enter A New Fish Name!');
    }
    });
  });




});
