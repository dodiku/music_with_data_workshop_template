console.log('hi, this is sound.js');

/********
1 - single notes
********/

var synthOne = new Tone.Synth().toMaster();

synthOne.triggerAttackRelease('B4', 0.5);
synthOne.triggerAttackRelease('C4', 0.5, 0.5);


/********
2 - loops
********/

var loop = new Tone.Loop(function(time){
  synthOne.triggerAttackRelease('E3', 0.5, time);
  synthOne.triggerAttackRelease('A3', 0.5, time + 1);
}, 2.0);

loop.start(0);

//Will it play? nahhhhhh
Tone.Transport.start();


/********
3 - synth props
********/

var synthOne = new Tone.Synth({
 oscillator:{
    type: 'square8'
  },
  envelope : {
     attack : 0.001,
      decay : 2,
      sustain : 0
  }
}).toMaster();


/********
4 - syth types
********/

var synthTwo = new Tone.MonoSynth().toMaster();
synthTwo.triggerAttackRelease('B2', 0.5);


function Note(note){
  synthTwo.triggerAttackRelease(note, 0.5);
}

/******
5 - synth two props
******/
var synthTwo = new Tone.MonoSynth({
     oscillator: {
       type : "fatsawtooth4"
     },
     filter: {
       type:"peaking"
     },
     envelope: {
       attack : 2,
       decay : 1,
       sustain : 4,
       release : 16
     },
     filterEnvelope:{
       attack : 2,
       decay : 1,
       sustain : 1,
       release : 10,
       baseFrequency:100,
       octaves:2,
       exponent:4
    }
  }
).toMaster();
