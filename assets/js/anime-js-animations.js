/*anime({
    targets: '#logo-text .logo-text-svg #layer_2 path',
    strokeDashoffset: [anime.setDashoffset, 0],

});*/


anime({
    targets: '#logo-text .logo-text-svg .evg-text-path',
    translateX: [
      { value: 100, duration: 1200 },
      { value: 0, duration: 800 }
    ],
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 2000,
    loop: true
  });