(function(window){
  var byeSpeaker ={};//object
  var speakWord = "Good Bye";  //string var

  byeSpeaker.speak = function(name) {//function attached to byeSpeaker obj
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;//exposing the byeSpeaker obj to the window/global obj
})(window);
