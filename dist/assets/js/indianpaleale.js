// fancy console.log
console.log('%c  _______  _______  _______  ______        ___  _______        _______  ___      \r\n |  _    ||       ||       ||    _ |      |   ||       |      |       ||   |     \r\n | |_|   ||    ___||    ___||   | ||      |   ||  _____|      |       ||   |     \r\n |       ||   |___ |   |___ |   |_||_     |   || |_____       |       ||   |     \r\n |  _   | |    ___||    ___||    __  | ___|   ||_____  | ___  |      _||   |___  \r\n | |_|   ||   |___ |   |___ |   |  | ||       | _____| ||   | |     |_ |       | \r\n |_______||_______||_______||___|  |_||_______||_______||___| |_______||_______| \r\n                                                                                 ', 'background: #222; color: #ffCC00')
console.log('%c Compartiendo sobre JS, en un bar cercano ', 'background: #222; color: #ffCC00');
console.log('%c salud@beerjs.cl ', 'background: #222; color: #ffCC00');

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

// analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-62394125-1', 'auto');
ga('send', 'pageview');

// NEW BUBBLES
var canvas = document.getElementById('bubbling');
var ctx = canvas.getContext('2d');
var particles = [];
var particleCount = 280;

for (var i = 0; i < particleCount; i++) {
  particles.push(new particle());
}

function particle() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 300;
  this.speed = .5 + Math.random();
  this.radius = Math.random() * 3;
  this.opacity = (Math.random() * 300) / 1000;
}

function loopBubbles() {
  requestAnimationFrame(loopBubbles);
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 0; i < particles.length; i++) {
    var p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,' + p.opacity + ')';
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
    ctx.fill();
    p.y -= p.speed;
    if (p.y <= -10)
      particles[i] = new particle();
  }
}

// start bubbles
loopBubbles();

(function fullSlide(){

  var counter = 0, // to keep track of current slide
      $items = document.querySelectorAll('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
      numItems = $items.length; // total number of slides

  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

    // remove .show from whichever element currently has it
    // http://stackoverflow.com/a/16053538/2006057
    [].forEach.call( $items, function(el){
      el.classList.remove('show');
    });

    // add .show to the one item that's supposed to have it
    $items[itemToShow].classList.add('show');
  };

  // add click events to prev & next buttons
  document.querySelector('.next').addEventListener('click', function() {
       counter++;
       showCurrent();
    }, false);

  document.querySelector('.prev').addEventListener('click', function() {
       counter--;
       showCurrent();
    }, false);

})();
