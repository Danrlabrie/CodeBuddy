var controls = {
  rate: 0.8,
  pitch: 0.25
} 
var app = angular.module('sliderCodyApp', ['ui.slider']);
    
    app.factory('controlsFactory', function() {
      return controls;
    })
    app.controller('sliderCodyCtrl', function($scope, $log, controlsFactory) {
      
      
      // Slider options with event handlers
      $scope.slider = {
        'options': {
          start: function (event, ui) { $log.info('Event: Slider start - set with slider options', event); },
          stop: function (event, ui) { $log.info('Event: Slider stop - set with slider options', event); }
        }
      }
      $scope.controls = controlsFactory;
      $scope.thepitch=0.25;
      $scope.thespeed=0.8;
      $scope.update = function () {
        console.log("update hit!");
        $scope.controls.rate = $scope.thespeed;
        $scope.controls.pitch = $scope.thepitch;
      };
    });
(function(a){"use strict";var b=this,c=b.SpeechRecognition||b.webkitSpeechRecognition||b.mozSpeechRecognition||b.msSpeechRecognition||b.oSpeechRecognition;if(!c)return b.annyang=null,a;var d,e,f=[],g={start:[],error:[],end:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},h=0,i=!1,j="font-weight: bold; color: #00f;",k=!1,l=/\s*\((.*?)\)\s*/g,m=/(\(\?:[^)]+\))\?/g,n=/(\(\?)?:\w+/g,o=/\*\w+/g,p=/[\-{}\[\]+?.,\\\^$|#]/g,q=function(a){return a=a.replace(p,"\\$&").replace(l,"(?:$1)?").replace(n,function(a,b){return b?a:"([^\\s]+)"}).replace(o,"(.*?)").replace(m,"\\s*$1?\\s*"),new RegExp("^"+a+"$","i")},r=function(a){var b=Array.prototype.slice.call(arguments,1);a.forEach(function(a){a.callback.apply(a.context,b)})},s=function(){t()||b.annyang.init({},!1)},t=function(){return d!==a},u=function(a,c,d){f.push({command:a,callback:c,originalPhrase:d}),i&&b.console.log("Command successfully loaded: %c"+d,j)};b.annyang={init:function(l,m){m=m===a?!0:!!m,d&&d.abort&&d.abort(),d=new c,d.maxAlternatives=5,d.continuous="http:"===b.location.protocol,d.lang="en-US",d.onstart=function(){r(g.start)},d.onerror=function(a){switch(r(g.error),a.error){case"network":r(g.errorNetwork);break;case"not-allowed":case"service-not-allowed":e=!1,r((new Date).getTime()-h<200?g.errorPermissionBlocked:g.errorPermissionDenied)}},d.onend=function(){if(r(g.end),e){var a=(new Date).getTime()-h;1e3>a?setTimeout(b.annyang.start,1e3-a):b.annyang.start()}},d.onresult=function(a){if(k)return i&&b.console.log("Speech heard, but annyang is paused"),!1;for(var c=a.results[a.resultIndex],d=[],e=0;e<c.length;e++)d[e]=c[e].transcript;r(g.result,d);for(var h,l=0;l<d.length;l++){h=d[l].trim(),i&&b.console.log("Speech recognized: %c"+h,j);for(var m=0,n=f.length;n>m;m++){var o=f[m].command.exec(h);if(o){var p=o.slice(1);return i&&(b.console.log("command matched: %c"+f[m].originalPhrase,j),p.length&&b.console.log("with parameters",p)),f[m].callback.apply(this,p),r(g.resultMatch,h,f[m].originalPhrase,d),!0}}}return r(g.resultNoMatch,d),!1},m&&(f=[]),l.length&&this.addCommands(l)},start:function(c){k=!1,s(),c=c||{},e=c.autoRestart!==a?!!c.autoRestart:!0,c.continuous!==a&&(d.continuous=!!c.continuous),h=(new Date).getTime();try{d.start()}catch(f){i&&b.console.log(f.message)}},abort:function(){e=!1,t&&d.abort()},pause:function(){k=!0},resume:function(){b.annyang.start()},debug:function(a){i=arguments.length>0?!!a:!0},setLanguage:function(a){s(),d.lang=a},addCommands:function(a){var c;s();for(var d in a)if(a.hasOwnProperty(d))if(c=b[a[d]]||a[d],"function"==typeof c)u(q(d),c,d);else{if(!("object"==typeof c&&c.regexp instanceof RegExp)){i&&b.console.log("Can not register command: %c"+d,j);continue}u(new RegExp(c.regexp.source,"i"),c.callback,d)}},removeCommands:function(b){return b===a?void(f=[]):(b=Array.isArray(b)?b:[b],void(f=f.filter(function(a){for(var c=0;c<b.length;c++)if(b[c]===a.originalPhrase)return!1;return!0})))},addCallback:function(c,d,e){if(g[c]!==a){var f=b[d]||d;"function"==typeof f&&g[c].push({callback:f,context:e||this})}}}}).call(this);

(function () {
// instantiate variables.

var definition = '';
var definition2='';
var gotoURL = '';


var speakListener = function(utterance, options, sendTtsEvent) {
        sendTtsEvent({'event_type': 'start', 'charIndex': 0});
      
        // (start speaking)
      
        sendTtsEvent({'event_type': 'end', 'charIndex': utterance.length});
      };
      
      var stopListener = function() {
        // (stop all speech)
      };
      
      chrome.ttsEngine.onSpeak.addListener(speakListener);
      chrome.ttsEngine.onStop.addListener(stopListener);

document.addEventListener('DOMContentLoaded', function() {
      chrome.tts.speak("Hi! How can I help?", {'pitch': 0.25, 'rate': 0.8});
    }, function(errorMessage) {
      renderStatus('Something is wrong...');

});



    var getRandomFromArray = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var greetings = [
        'how can i help?',
        'Hello, friend!',
        'is there a party?',
        'Hello, human companion.',
        'What a beautiful day!',
        'Yes?',
        'What do you want?',
        'Let\'s code together!',
        'I love you!',
        'All the javascripts',
        'what?',
        'what\'s going on?',
        'I\'m just a sad robot'
    ];
var hasDocs = function() {
   chrome.tts.speak("I've found some documentation, do you want me to open it for you in a new tab?", {'pitch': controls.pitch, 'rate': controls.rate, 'enqueue' : true});
};


    // Let's define a command.
      var commands = {
        'hello :name': {'regexp': /^(?:hello|howdy|hi) (\w*)$/, 'callback': function(name) { console.log(name)}},
        'yes': function() {
          if(gotoURL) {
            chrome.tts.speak("you got it!", {'pitch': controls.pitch, 'rate': controls.rate});
            chrome.tabs.create({url: gotoURL});
            gotoURL='';
            definition='';
            definition2='';
          }else{
            chrome.tts.speak("yes what?", {'pitch': controls.pitch, 'rate': controls.rate});
          }
        },
        'no': function() {
          if(gotoURL) {
          chrome.tts.speak("fine", {'pitch': controls.pitch, 'rate': controls.rate});
          gotoURL='';
          definition='';
          definition2='';
          }else {
            chrome.tts.speak("no what?", {pitch: controls.pitch, rate: controls.rate});
          }
        },
        '(cody) (i need) (can i get some) help (me)': function() { 
        chrome.tts.speak("How can I help?", {'pitch': controls.pitch, 'rate': controls.rate});
        },
        '(cody) whats :thing': {'regexp': /^(?:whats|tell me about|what is|find|i need information on|give me|look up|find me|find me information on|find me info on) (\w*)$/, 'callback': function(thing) { 
          console.log('hit fn', thing);
          // $.get('http://devdocs.io/').then(function(response) {
          //   response.getElementbyTag
          // })
          definition='';
          definition2='';
          gotoURL='';
          switch(thing) {
            case 'JavaScript':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript';
            definition="JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, most known as the scripting language for Web pages";
            definition2= "It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles;";
            break;
            case 'array':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array';
            definition="The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects."
            break;
            case 'from':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from';
            definition="The Array.from method creates a new Array instance from an array-like or iterable object. In ES6, class syntax allows for the subclassing of both built-in and user defined classes";
            definition2="as a result, class-side static methods such as Array.from are 'inherited' by subclasses of Array and create new instances of the subclass, not Array.";
            break;
            case 'slice':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice';
            definition="The slice method returns a shallow copy of a portion of an array into a new array object.";
            break;
            case 'split':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split';
            definition="The split method splits a String object into an array of strings by separating the string into substrings.";
            break;
            case 'splice':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice';
            definition="The splice method changes the content of an array by removing existing elements and or adding new elements.";
            break;
            case 'map':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map';
            definition="The map method creates a new array with the results of calling a provided function on every element in this array.";
            break;
            case 'filter':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter';
            definition="The filter method creates a new array with all elements that pass the test implemented by the provided function";
            break;
            case '4H':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach';
            definition="The for Each method executes a provided function once per array element.";
            break;
            case 'reduce':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce';
            definition="The reduce method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.";
            break;
            case 'join':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join';
            definition="The join method joins all elements of an array into a string.";
            break;
            case 'pop':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop';
            definition="The pop method removes the last element from an array and returns that element.";
            break;
            case 'push':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push';
            definition="The push method adds one or more elements to the end of an array and returns the new length of the array.";
            break;
            case 'shift':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift';
            definition="The shift method removes the first element from an array and returns that element. This method changes the length of the array.";
            break;
            case 'unshift':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift';
            definition="The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.";
            break;
            case 'length':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length';
            definition="The length property represents an unsigned, 32-bit integer that is always greater than the highest index in the array. see also string length and function length.";
            break;
            case 'sort':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort';
            definition="The sort method sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.";
            break;
            case 'reverse':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse';
            definition="The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.";
            break;
            case 'indexes':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexof';
            definition="The index of method returns the first index at which a given element can be found in the array or string, or -1 if it is not present.";
            break;
            case 'delete':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete';
            definition="The delete operator removes a property from an object.";
            break;
            case 'replace':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace';
            definition="The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a Regular Expression, and the replacement can be a string or a function to be called for each match.";
            break;
            case 'KitKat':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat';
            definition="The concat() method returns a new array or string comprised of the array or string on which it is called joined with the value  s provided as arguments.";
            break;
            case 'call':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call';
            definition="The call() method calls a function with a given this value and arguments provided individually.";
            break;
            case 'apply':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply';
            definition="The apply method calls a function with a given this value and arguments provided as an array (or an array-like object).";
            break;
            case 'bind':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind';
            definition="The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.";
            break;
            case 'closure':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures';
            definition="Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.";
            break;
          }
          if(gotoURL) {
          chrome.tts.speak(definition, {'pitch': controls.pitch, 'rate': controls.rate});
          if(definition2) chrome.tts.speak(definition2, {'pitch': controls.pitch, 'rate': controls.rate, 'enqueue': true});    
          hasDocs();
        }}},
        '(hi) (hey) (hello) cody (are you there) (are you still there)': function() {
          chrome.tts.speak(getRandomFromArray(greetings), {'pitch': controls.pitch, 'rate': controls.rate});
        },
        '(cody) (tell me a) (give me a) (can i get a) (how about a) (i need a) joke': function() {
          $.getJSON('http://api.yomomma.info/').then(function(joke) {
          chrome.tts.speak(joke.joke, {'pitch': controls.pitch, 'rate': controls.rate});
           });
        },
        '(cody) say *thing to *term': function(thing, term) {
          chrome.tts.speak(thing + ", " + term, {'pitch': controls.pitch, 'rate': controls.rate});
        },
        '(cody) (i need a) (give me a) (show me a) (can i get a) (open) (open a) new :site tab': function(site) {
          switch(site) {
            case 'Google':
            gotoURL='https://www.google.com';
            break;
            case 'Facebook':
            gotoURL='https://www.facebook.com';
            break;
            case 'MDN':
            gotoURL='https://developer.mozilla.org/en-US/docs/Web/JavaScript';
            break;
            case 'html5rocks':
            gotoURL='https://www.html5rocks.com/en/';
            break;
            case 'XKCD':
            gotoURL='http://xkcd.com/';
            break;
            case 'YouTube':
            gotoURL='https://www.youtube.com';
            break;
            case 'Spotify':
            gotoURL='https://play.spotify.com/';
            break;

          }
          if(gotoURL) {
          chrome.tts.speak('you got it!', {'pitch': controls.pitch, 'rate': controls.rate});
          chrome.tabs.create({url: gotoURL});
            gotoURL='';
          }
        },
        '(cody) (i need a) (give me a) (show me a) (can i get a) (open a) new tab': function() {
          chrome.tts.speak('you got it!', {'pitch': controls.pitch, 'rate': contorols.rate});
          chrome.tabs.create({});
        },
        '(cody) go away' : function() {
          chrome.tabs.getCurrent(function(tab) {
            chrome.tabs.remove(tab.id, function() { });
            });
          chrome.tts.speak('goodbye!', {'pitch': controls.pitch, 'rate': controls.rate});
        },
        '(cody) (hows) (how is) (whats) (the) weather (like) (today)' : function () {
            $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=10002,us').then(function(weather) {
              var temp = Math.floor(((weather.main.temp-273.15)*1.8) + 32);
              console.log(temp, weather.main.temp);
            chrome.tts.speak('the current weather in ' + weather.name + 'is ' + weather.weather[0].description + ' with a temperature of ' + temp + 'degrees farenheit', {'pitch': controls.pitch, 'rate': controls.rate});
           });
        },
        '(cody) close current tab': function () {
          chrome.tabs.query({'active': true, 'currentWindow': true}, function(tab) {
          chrome.tts.speak('you got it!', {'pitch': controls.pitch, 'rate': controls.rate});
          chrome.tabs.remove(tab[0].id);
          });
        }
        // '(cody) whats mongoose :thing': {'regexp': /^(?:whats|tell me about|what is|find|i need information on|give me|look up|find me|find me information on|find me info on) (\w*)$/, 'callback': function(thing) { 
          
          
        // }
        // }
      };


      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
})();
  



