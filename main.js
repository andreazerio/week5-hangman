$(document).ready(function (){

  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        $('#letters').append('<ul id="letList"></ul>');
      for (var i = 0; i <alphabet.length; i++) {
        $('#letList').append('<li class ="letC">'+alphabet[i]+'</li');
      }

var words = ['ruler','laptop','wolf','lamp','serendipity','keyboard','mouse','glass','stand','book','radio','frequency','wave','paper','document','digit','wood','armchair','number'];
var word = words[Math.floor(Math.random()*words.length)];
$('#guesses').append('<ul id="guessList"></ul>');
for (var i = 0; i < word.length; i++) {
  var guess = $('<li></li>').html('_').attr('class','guessC').attr('id',i);
  $('#guessList').append(guess);
}

var counter = 0;
var lives = 10;
$('.letC').click(function(){
  var ug = $(this);              // ug === userGuess
  ug.css('opacity','0.5');
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ug.html().toLowerCase()) {
      counter+= 1;
      $('#'+i).html(ug.html());
    }
    }
    if (word.indexOf(ug.html().toLowerCase()) === -1) lives-= 1;
});

});
