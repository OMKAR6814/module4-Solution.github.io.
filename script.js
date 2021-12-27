

(function () {

    var names = ["raj", "ashu", "deepak", "prathamesh", "Pawan", "pranay", "atharva", "shubham", "nikhil", "jeevan"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    
    
    