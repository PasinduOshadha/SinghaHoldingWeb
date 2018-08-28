anime({
    targets: '#logo-text-container .svg-logo-text path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  });


//holdings-container

// anime({
//     targets: '#logo-text-container .holdings-container path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 2000,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: false,
//   });

/*.letter-h,
.letter-o,
.letter-l,
.letter-d,
.letter-i,
.letter-n,
.letter-g,
.letter-s*/

anime({
    targets: '#logo-text-container .letter-h .letter-o .letter-l .letter-d .letter-i .letter-n .letter-g .letter-s path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 500,
    //delay: function(el, i) { return i * 350 },
    direction: 'alternate',
    loop: false,
  });

$(document).ready(function () {
  $("#our-work").click(function(){
    //alert("dobe");
    $(".our-work").slideToggle();
    $(".about-us, .contact-us, .blog").hide();//hides all other classes except current

  });


  $("#about-us").click(function(){
    //alert("dobe");
    $(".about-us").slideToggle();
    $(".our-work, .contact-us, .blog").hide();//hides all other classes except current
  });


  $("#contact-us").click(function(){
    //alert("dobe");
    $(".contact-us").slideToggle();
    $(".about-us, .our-work, .blog").hide();//hides all other classes except current
  });


  $("#blog").click(function(){
    //alert("dobe");
    $(".blog").slideToggle();
    $(".about-us, .contact-us, .our-work").hide();//hides all other classes except current
  });

  $(".btn-light").click(function() {
  	$(".about-us, .contact-us, .our-work, .blog").slideUp();
  });
});
