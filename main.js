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

var showLives = function() {
  $('#lives').html('You have '+lives+' lives left');
if (lives < 1) $('#lives').html('Game Over');
if(counter === word.length) $('#lives').html('You Win!');
}

var hangman = function () {
switch(lives) {
  case 9: $('#hangman').append('<img id = "hang1" src="http://i65.tinypic.com/bjfh5h.png">');
  break;
  case 8: $('#hang1').attr('src','http://i68.tinypic.com/2iqyepz.png');
  break;
  case 7: $('#hang1').attr('src','http://i66.tinypic.com/2v9zqx1.pn');
  break;
  case 6: $('#hang1').attr('src','http://i63.tinypic.com/28kmr61.png');
  break;
  case 5: $('#hang1').attr('src','http://i64.tinypic.com/el4pdx.png');
  break;
  case 4: $('#hang1').attr('src','http://i64.tinypic.com/2rpqnuv.png');
  break;
  case 3: $('#hang1').attr('src','http://i63.tinypic.com/2iqeeeq.png');
  break;
  case 2: $('#hang1').attr('src','http://i64.tinypic.com/9iquyx.png');
  break;
  case 1: $('#hang1').attr('src','http://i66.tinypic.com/2z4mqzn.png');
  break;
  case 0: $('#hang1').attr('src','http://i65.tinypic.com/1xzz8m.png');
}
};


var counter = 0;
var lives = 10;
$('.letC').click(function(){
  var ug = $(this);
  ug.css('opacity','0.5');
  for (var i = 0; i < word.length; i++) {
    if (word[i] === ug.html().toLowerCase()) {
      counter+= 1;
      $('#'+i).html(ug.html());
    }
    }
    if (word.indexOf(ug.html().toLowerCase()) === -1) lives-= 1;
    showLives();
    hangman();
});

$('button').click(function(){
  location.reload();
})
});
