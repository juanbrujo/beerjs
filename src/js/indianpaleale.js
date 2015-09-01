// fancy console.log
console.log('%c  _______  _______  _______  ______        ___  _______        _______  ___      \r\n |  _    ||       ||       ||    _ |      |   ||       |      |       ||   |     \r\n | |_|   ||    ___||    ___||   | ||      |   ||  _____|      |       ||   |     \r\n |       ||   |___ |   |___ |   |_||_     |   || |_____       |       ||   |     \r\n |  _   | |    ___||    ___||    __  | ___|   ||_____  | ___  |      _||   |___  \r\n | |_|   ||   |___ |   |___ |   |  | ||       | _____| ||   | |     |_ |       | \r\n |_______||_______||_______||___|  |_||_______||_______||___| |_______||_______| \r\n                                                                                 ', 'background: #222; color: #ffCC00')
console.log('%c Compartiendo sobre JS, en un bar cercano ', 'background: #222; color: #ffCC00');
console.log('%c salud@beerjs.cl ', 'background: #222; color: #ffCC00');

// bubbles
(function(){

  var c = document.getElementById('bubbles'),
      randomN = function(start, end){
        return Math.random()*end+start;
      },
      i = 0,
      generateBubble = function(){
      	if(i < 20){
          var el = document.createElement('div'),
              size = randomN(5, 10);
          el.setAttribute('style','width: '+size+'px; height: '+size+'px; left:'+randomN(1, c.offsetWidth-(size+4) )+'px;');
          c.appendChild(el);
          i++;
        } else {
          clearInterval(inter);
        }
      };

      generateBubble();

      var inter = setInterval(generateBubble, 500);

})();

// parallax
function backgroundParallax() {
  window.onscroll = function() {
    var elems = document.querySelectorAll("[data-scroll]");
    
    if( elems.length ) {
      for ( var i=0; i < elems.length; i++ ) {
        var speed = elems[i].getAttribute('data-scroll');
        elems[i].style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
      }
    }
    
  }
}
if (!Modernizr.touch) { 
  backgroundParallax();
}

// disable anchor jump
// document.querySelector('.button-register').addEventListener('click',function(e){
//   e.preventDefault();
// });


// analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-62394125-1', 'auto');
ga('send', 'pageview');

