anime({
    targets:'div.box.red',
    translateY: [
        { value: 200, duration: 500 },
        { value: 0, duration: 1200 }
      ],
      rotate:'1turn',
      delay:1000,
      loop:true,
});


anime({
    targets: '#drawlines .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false,
  });



