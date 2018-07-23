
    var bLazy = new Blazy({
        breakpoints: [{
	    width: 420 // Max-width
          , src: 'data-src-small'
	}]
      , success: function(element){
	    setTimeout(function(){
		// We want to remove the loader gif now.
		// First we find the parent container
		// then we remove the "loading" class which holds the loader image
		var parent = element.parentNode;
		parent.className = parent.className.replace(/\bloading\b/,'');
	    }, 200);
        }
   });
 


   $(document).ready(function(){
    $("ul.nav .drop-link").click(function(){
         $("ul.nav  li ul.drop-menu").toggle();
     });
 }); 


 function reveal() {
    // window sizes
    var winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    // if animating return
    if (this.isAnimating) {
        return false;
    }
    this.isAnimating = true;
    var widthVal, heightVal, transform;
    var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
    widthVal = heightVal = pageDiagonal + 'px';
    transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)';
    var revealerWrapper = document.getElementById("revealer");
    revealerWrapper.style.width = widthVal;
    revealerWrapper.style.height = heightVal;
    revealerWrapper.style.WebkitTransform = revealerWrapper.style.transform = transform;
    revealerWrapper.style.opacity = 1;
    setTimeout(function() {
        revealerWrapper.style.opacity = 0;
    }, 1600);
    setTimeout(function() {
        $("#loader-wrapper").fadeOut();
    }, 750);
}
$(window).ready(function() {
    if ($('body').hasClass("main")) {
        reveal();
    }
    $("body").addClass("loaded");
});


(function ($) {


// General Settings
window.sr = ScrollReveal({ reset: false });

// Custom Settings

sr.reveal('.widgets-panels .large-6:nth-child(2)', { 
  origin: 'right', 
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once',
  easing     : 'ease-out'
});

sr.reveal('.widgets-panels .large-6:nth-child(1)', { 
  origin: 'left', 
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once',
  easing     : 'ease-out'
});

sr.reveal('.widgets-panels .large-6:nth-child(3)', { 
  origin: 'bottom', 
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once',
  easing     : 'ease-out'
});

sr.reveal('.widgets-panels .large-6:nth-child(4)', { 
  origin: 'bottom', 
  duration: 1200,
  scale: 1,
  distance: '200px',
  useDelay: 'once',
  easing     : 'ease-out'
});


 sr.reveal('.banner h1', { 
  origin   : "bottom",
        distance : "64px",
        duration : 900,
        delay    : 1500,
        scale    : 1,
        easing     : 'ease-out'
});  



})(jQuery);









$(document).foundation()


