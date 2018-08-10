"use strict";

$(document).ready(function(){
  console.log("Welcome to Beachy App's Website");

  // parallax effect on hero image
  function makeParallax(x) {
    if (x.matches) {
      $(window).scroll(function(event) {
        var scrollval = $(this).scrollTop();
        $(".hero-image").css("transform", 'translate(0px, '+scrollval/10+'%)');
      });
    }
  };

  var x = window.matchMedia("(min-width: 769px)");
  makeParallax(x);
  x.addListener(makeParallax);

  // animation on elements when in view
  window.sr = ScrollReveal();
  sr.reveal('.intro', {
    delay: 400, mobile: true
  })
  sr.reveal('.sub-intro', {
    delay: 800, mobile: true
  })
  sr.reveal('.reveal-1', {
    delay: 400, mobile: true, origin: 'top', distance: '500px', duration: 500, easing: 'ease-out'
  })
  sr.reveal('.reveal-2', {
    delay: 800, mobile: true, origin: 'bottom', distance: '500px', duration: 500, easing: 'ease-out'
  });
  sr.reveal('.reveal-3', {
    delay: 800, mobile: true, origin: 'bottom', distance: '500px', duration: 500, easing: 'ease-out'
  });
  sr.reveal('.reveal-4', {
    delay: 800, mobile: true, origin: 'top', distance: '500px', duration: 500, easing: 'ease-out'
  });
  sr.reveal('.reveal-5', {
    delay: 800, mobile: true,
  });
  sr.reveal('.reveal-6', {
    delay: 800, mobile: true,
  });
  
  // Interactive Image
  $('map').imageMapResize();
  
  $('.map1').on("mouseover click", function(){
    $('.content').hide().empty().append(
      `<h3>Attendant App</h3>
      <p>
      Streamline the rental and transaction process for your beach employees with our mobile app. Process sales and manage guest reservations with just a few swipes.
      </p>`
    ).slideDown("slow");
  });
  
  $('.map2').on("mouseover click", function(){
    $('.content').hide().empty().append(
      `<h3>Customer Storefront</h3>
      <p>
        Put your guests in charge of their booking with our mobile storefront. Customers can book everything from chairs to kayaks to pontoons and bonfires.
        </p>`
    ).slideDown("slow");
  });
  
  $('.map3').on("mouseover click", function(){
    $('.content').hide().empty().append(
      `<h3>Management Suite</h3>
      <p>
      Total control of your rentals is right at your fingertips with our management suite. Quantify and analyze your rental business in real time.
      </p>`
    ).slideDown("slow");
  });
});

// handlebars templates
let photogrid = require('../templates/photo_grid.hbs');
let photogridAdvisors = require('../templates/photo_grid_advisors.hbs');

// team data in json file
const { team } = require('../data/team.json');
const { advisors } = require('../data/advisors.json');

let teamInfoGrid = photogrid({ team });
$('.team').append(teamInfoGrid);

let advisorsInfoGrid = photogridAdvisors({ advisors });
$('.team').append(advisorsInfoGrid);

// Owl Carousel
$('#owl1').owlCarousel({
  loop:true,
  margin:10,
  center:true,
  responsiveClass:true,
  autoWidth:true,
  responsive:{
    0:{
      items:1,
      nav:false,
      },
    576:{
      items:2,
      nav:false,
      },
    768:{
      items:3,
      nav:true,
      },
    // 992:{
    //   items:4,
    //   nav:true,
    //   },
    // 1200:{
    //   items:5,
    //   nav:true,
    //   }
    }
});

$('#owl2').owlCarousel({
  loop:true,
  margin:10,
  center:true,
  responsiveClass:true,
  autoWidth:true,
  responsive:{
    0:{
      items:1,
      nav:false,
      },
    576:{
      items:2,
      nav:false,
      },
    768:{
      items:3,
      nav:true,
      },
    992:{
      items:4,
      nav:true,
      },
    }
});

$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').find('.owl-dots').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
  $(this).find('.owl-dots').removeClass('disabled');
});

// copyright note in the footer; will always reflect current year
let d = new Date();
let yyyy = d.getFullYear();
$(".copyright").append(`<p>Copyright &copy; ${yyyy} | Beachy | Website Designed and Developed by <a href="https://www.jevonthomas.com">Jevon Thomas</a></p>`);