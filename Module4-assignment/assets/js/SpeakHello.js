(function(window){
  var helloSpeaker={};//object
  var speakWord = "Hello";//string var

  helloSpeaker.speak  = function(name) {//function attached to helloSpeaker obj
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;//exposing the helloSpeaker obj to the window/global obj
})(window);
