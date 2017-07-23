$(document).ready(function (){

  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        $('#letters').append('<ul id="letList"></ul>');
      for (var i = 0; i <alphabet.length; i++) {
        $('#letList').append('<li class ="letC">'+alphabet[i]+'</li');
      }
});
