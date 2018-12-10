(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// $(".dropdown-trigger").dropdown();

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });


// putting at last so that materialize.js works

// ScrollReveal library
// ScrollReveal().reveal('.heya', { delay: 900, reset: true, duration: 4000, origin: 'top' });

// ScrollReveal().reveal('#average-guy', { delay: 1000, reset: true });
// ScrollReveal().reveal('#index-banner', { delay: 600 });

// ScrollReveal().reveal('#info', { delay: 500, reset: true});
// ScrollReveal().reveal('#box-out', { delay: 300, reset: true });

// ScrollReveal().reveal('.carousel', { delay: 300, duration: 2000});
// ScrollReveal().reveal('.responsive-img', { delay: 600});
// ScrollReveal().reveal('.other-projects', { delay: 300});

// ScrollReveal().reveal('.page-footer', { delay: 200});
// ScrollReveal().reveal('.hand', { delay: 1500, scale: 0, reset: true, easing: 'cubic-bezier(1,0,0,1)', distance: '50px', duration: 950});



// new TypeIt('#stay', {
//   speed: 150,
//  // autoStart: true,
//   cursor: false,
//   startDelay: 200,
//   loop: true
// });

// new TypeIt('#after-stay', {
//   speed: 150,
//   //autoStart: true,
//   cursor: false,
//   startDelay: 5800
// });

// new TypeIt('#nostay', {
//   speed: 50,
//   breakLines: false,
//   //autoStart: true,
//   //startDelay: 8000,
//   //loop: true
// }).type("whats this?");



// --------------LOOP:true NOT WORKING------------

new TypeIt('#nostay', {
  speed: 100,
  startDelay: 600,
  //loop: true
}).type('playing with CSS.')
.pause(600)
.options({speed: 200})
.delete(17)
.options({speed: 45})
.pause(300)
.type('JavaScrilt')
.pause(600)
.options({speed: 200})
.delete(2)
.options({speed: 45})
.pause(300)
.type('pt.')
.pause(400)
.options({speed: 200})
.delete(24)
.type('Ruby on Rails.')
.pause(500)
.options({speed: 45})
.delete(14)
.options({speed: 45})
.pause(900)
.type('Codeeng')
.pause(800)
.options({speed: 200})
.delete(4)
.options({speed: 200})
.pause(300)
.type('ing.')
// .pause(600)
// .options({speed: 100})
// .delete(24)
// .type('Zumba.')
// .pause(600)
// .options({speed: 200})
// .delete(1)
// .options({speed: 45})
// .pause(300)
// .type('!')
