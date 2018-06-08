console.log('hi, this is sound.js');



//// WRITE CODE HERE 👆

var tweetCount = 0;

/*****************************
Array of notes of the pentatonic scale
*****************************/
var notes = ['A2', 'C2', 'D2', 'E2', 'G2'];

function triggerNote(type, tweet, _synthOne, _synthTwo){

  // getting tweet position on the page radomally
  var height = Math.floor(Math.random() * 80);
  var width = Math.floor(Math.random() * 50);

  // adding html tags to tweet
  var tweetHtml = '<div class="tweet" id="' + tweetCount + '" style="top:' + height + 'vh; left:' + width + 'vw"><p>' + tweet + '</p></div>';

  // coloring the relevant hashtags
  tweetHtml = tweetHtml.replace('#thishashtag', '<span id="hashtag">#thishashtag</span>');

  // getting note randomally
  var note = notes[Math.round(Math.random()*notes.length - 1)];
  console.log(note);

  // playing the note
  // using 'regular' synth
  if (type === 'high') {
    _synthOne.triggerAttackRelease(note, 0.5);

  // using 'rare' synth
  } else {
    _synthTwo.triggerAttackRelease(note, 5);
  }

  // adding the tweet to the page
  $('.container').append(tweetHtml);

  // making tweet disappear gradually
  var id = '#' + tweetCount;

    $(id).delay(500).animate({
      'opacity': 0
    }, 4000, function(){
      $(id).remove();
    });


  // incrementing tweetCount
  tweetCount++;

}
