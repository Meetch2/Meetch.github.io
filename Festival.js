$(document).ready(function(){
      
  to_top();
  set_height();
  cloudmove();
  particles();
  paralax_animation_frontp();
  tweenMaxAnim();

});

$( window ).resize(function() {

  location.reload();

});

function tweenMaxAnim() {

  var one = $("#Stringone");
  var four = $("#Stringfour");
  var six = $("#Stringsix");
  var eight = $("#Stringeight");
  TweenMax.set(one, {y:2000});
  TweenMax.set(four, {y:2000});
  TweenMax.set(six, {y:2000});
  TweenMax.set(eight, {y:2000});

  var two = $("#Stringtwo");
  var three = $("#Stringthree");
  var five = $("#Stringfive");
  var seven = $("#Stringseven");
  TweenMax.set(two, {y:-2000});
  TweenMax.set(three, {y:-2000});
  TweenMax.set(five, {y:-2000});
  TweenMax.set(seven, {y:-2000});

  TweenMax.to(one, 2 , {y:0});
  TweenMax.to(two, 2 , {y:0});
  TweenMax.to(three, 2 , {y:0});
  TweenMax.to(four, 2 , {y:0});
  TweenMax.to(five, 2 , {y:0});
  TweenMax.to(six, 2 , {y:0});
  TweenMax.to(seven, 2 , {y:0});
  TweenMax.to(eight, 2 , {y:0});

  setInterval(function() {
    TweenMax.to(one, 0.5, {opacity:1});
    TweenMax.to(one, 0.3, {opacity:0.2});
    setTimeout(function() {
      TweenMax.to(one, 0.6, {opacity:1});
    }, 80);
    setTimeout(function() {
        TweenMax.to(five, 0.5, {opacity:1});
        TweenMax.to(five, 0.3, {opacity:0.2});
        setTimeout(function() {
          TweenMax.to(five, 0.6, {opacity:1});
        }, 80);
    }, 2000)
    setTimeout(function() {
      TweenMax.to(six, 0.5, {opacity:1});
      TweenMax.to(six, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(six, 0.6, {opacity:1});
      }, 80);
    }, 1500)
  }, 3500);

  var ImgSeven = $("#sSeven");
  var ImgFive = $("#sFive");
  var ImgEight = $("#sEight");
  setInterval(function() {
    TweenMax.to(ImgSeven, 0.5, {opacity:1});
    TweenMax.to(ImgSeven, 0.3, {opacity:0.2});
    setTimeout(function() {
      TweenMax.to(ImgSeven, 0.6, {opacity:1});
    }, 80);
    setTimeout(function() {
        TweenMax.to(ImgFive, 0.5, {opacity:1});
        TweenMax.to(ImgFive, 0.3, {opacity:0.2});
        setTimeout(function() {
          TweenMax.to(ImgFive, 0.6, {opacity:1});
        }, 80);
    }, 2000)
    setTimeout(function() {
      TweenMax.to(ImgEight, 0.5, {opacity:1});
      TweenMax.to(ImgEight, 0.3, {opacity:0.2});
      setTimeout(function() {
        TweenMax.to(ImgEight, 0.6, {opacity:1});
      }, 80);
    }, 1500)
  }, 3500);
}

function set_height() {
  $(".fade").height($(".sperre").height());
  $(".fade").width($(".sperre").width());

  $("#particles-js").height($("footer").outerHeight()*1.3);
  $("#particles-js").width($("footer").outerWidth());
}

function particles() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "random" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 4},
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        speed: 40,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },

     
      line_linked: {
        enable: true,
        distance: 150,
        color: "#777",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2.5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: false
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
}

function to_top() {
  $(window).scroll(function(){
        if ($(this).scrollTop() < 200) {
            $('.up') .fadeOut("fast");
        } else {
            $('.up') .fadeIn("fast");
        }
    });
    $('.up').on('click', function(){
        $('html, body').animate({scrollTop:0}, 'fast');
        return false;
    });
}

function paralax_animation_frontp() {
    let request = null;
    let mouse = { x: 0, y: 0 };
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    
    document.querySelector('body').addEventListener('mousemove', function(event) {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
        cancelAnimationFrame(request);
        request = requestAnimationFrame(update);
    });
    
    function update() {
      dx = mouse.x - cx;
      dy = mouse.y - cy;
      let tiltx = (dy / cy );
      let tilty = - (dx / cx);

      // TweenMax.to(".logo", 1, {x:tilty*30, y:tiltx*30, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".Hintergrund", 1, {x:-tilty*20, y:-tiltx*20, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".back", 1, {x:-tilty*5, y:-tiltx*40, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".front", 1, {x:-tilty*-5, y:-tiltx*20, rotation:0.05, ease:Power2.easeOut});
      TweenMax.to(".middle", 1, {x:-tilty*0, y:-tiltx*55, rotation:0.05, ease:Power2.easeOut});
    }
    
    window.addEventListener('resize', function(event){
        window.innerWidth / 2;
        window.innerHeight / 2;
    });
}

function cloudmove(){
  var cloudone = $("#cloudone");
  var cloudtwo = $("#cloudtwo");
  var cloudthree = $("#cloudthree");
  var clouds = $(".clouds");
  var cloudtimeline = new TimelineLite( {onComplete:function(){this.restart()}});
  var cloudtimelinetwo = new TimelineLite( {onComplete:function(){this.restart()}});
  var cloudtimelinethree = new TimelineLite( {onComplete:function(){this.restart()}});

  cloudtimeline.to(cloudone, 20, {x:0}).to(cloudone, 80, {x: 2000})
  cloudtimelinetwo.to(cloudtwo, 50, {x:0, y: -200}).to(cloudtwo, 100, {x: 2000});
  cloudtimelinethree.to(cloudthree, 110, {x: 2000});
  cloudtimeline.play();
  cloudtimelinetwo.play();
  cloudtimelinethree.play();
}