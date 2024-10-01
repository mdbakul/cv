
(function ($) {
  "use strict";  

    $(document).ready(function () {  
  /*==== header Section Start here =====*/
  document.querySelector(".bar i").addEventListener("click", function () {
    let bar = document.querySelector(".bar i");
    bar.classList.toggle("fa-times");
    let target = document.querySelector(".target");
    target.classList.toggle("open");
  });

  /*==== header Section Start here =====*/
  // $("ul>li>ul").parent("li").addClass("menu-item-has-children");
  // // drop down menu width overflow problem fix
  // $('ul').parent('li').on('hover', function () {
  //     var menu = $(this).find("ul");
  //     var menupos = $(menu).offset();
  //     if (menupos.left + menu.width() > $(window).width()) {
  //         var newpos = -$(menu).width();
  //         menu.css({
  //             left: newpos
  //         });
  //     }
  // });
  // $('.header__nav li a').on('click', function (e) {
  //     var element = $(this).parent('li');
  //     if (screen.width < 1200) {
  //         if (element.hasClass('open')) {
  //             element.removeClass('open');
  //             element.find('li').removeClass('open');
  //             element.find('ul').slideUp(300, "swing");
  //         } else {
  //             element.addClass('open');
  //             element.children('ul').slideDown(300, "swing");
  //             element.siblings('li').children('ul').slideUp(300, "swing");
  //             element.siblings('li').removeClass('open');
  //             element.siblings('li').find('li').removeClass('open');
  //             element.siblings('li').find('ul').slideUp(300, "swing");
  //         }
  //     }
  // })
      
// Menu Nav

function smoothSctollTop() {
	$('.mainactive ul li > a,.mean-nav ul li > a').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 100
			}, 1000);
		}
	});
}
smoothSctollTop();
// menu active class

$('.mainactive ul li:first-child > a').addClass('active');



//for menu active class

$('.mainactive ul li > a').on('click',function () {
	$('.basic-menu li a').removeClass("active");
	  $(this).addClass("active");
});


 //Header     
  var fixed_top = $(".header__top");
  $(window).on('scroll', function () {
      if ($(this).scrollTop() > 100) {
          fixed_top.addClass("header-fixed animated fadeInDown");
      } else {
          fixed_top.removeClass("header-fixed animated fadeInDown");
      }
  });

  // side-bar
	$('.bar').on("click", function() {
		$('.btn-menu-main').addClass('btn-menu-main-right');
	});

	$('.crose').on("click", function() {
		$('.btn-menu-main').removeClass('btn-menu-main-right');
	});   
    
// food menu filter
  var $grid = $(".projectfilter__filter").isotope({
    transitionDuration: "0.9s",
  });
// sort items on button click
  $(".item").on("click", function () {
    var filterValue = $(this).attr("data-sort-by");
    $grid.isotope({ filter: filterValue });
  });

  $(".item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });   
    
 

// cusotomer tomato
  // var swiper = new Swiper(".testmonial__slider", {
  //   direction: "vertical",
  //   slidesPerView: 1,
  //   paginationClickable: true,
  //   spaceBetween: 0,
  //   mousewheelControl: true,
  //   loop: true,
  //   height: 180,
  //   autoHeight: true,
  //   speed: 700,
  //   pagination: {
  //     el: ".testmonial__pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     992: {
  //       height: 170,
  //     },
  //     500: {
  //       height: 305,
  //     },  
  //     450: {
  //       height: 320,
  //     }, 
  //     0: {
  //       height: 380,
  //     }, 
  //   },
  //   autoplay: {
  //     delay: 3000,
  //   },
  // });

// event tomato
  // var swiper = new Swiper(".event__slider", {
  //   direction: "vertical",
  //   slidesPerView: 1,
  //   paginationClickable: true,
  //   spaceBetween: 0,
  //   mousewheelControl: true,
  //   loop: true,
  //   height: 180,
  //   autoHeight: true,
  //   speed: 700,
  //   pagination: {
  //     el: ".even__pagination",
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     1200: {
  //       height: 425,
  //     },
  //     992: {
  //       height: 840,
  //     },
  //     768: {
  //       height: 740,
  //     },
  //     375: {
  //       height: 770,
  //     }
  //   },
  //   autoplay: {
  //     delay: 3000,
  //   },
  // });

  
// // countdown
  // $(document).ready(function () {
  //   $(".countdown1").syotimer({
  //     year: 2024,
  //     month: 4,
  //     day: 19,
  //     hour: 10,
  //     minute: 0,
  //   });

  //   $(".countdown2").syotimer({
  //     year: 2024,
  //     month: 4,
  //     day: 1,
  //     hour: 9,
  //     minute: 30,
  //   });

  //   $(".countdown3").syotimer({
  //     year: 2024,
  //     month: 6,
  //     day: 5,
  //     hour: 12,
  //     minute: 30,
  //   });
    
  // });

// dish event start here
  // var swiper = new Swiper(".dish__slider", {
  //   spaceBetween: 24,
  //   loop: true, 
  //   freeMode: true,
  //   watchSlidesProgress: true,  
  //   navigation: {
  //     nextEl: ".case__next",
  //     prevEl: ".case__pre",
  //   },
  //   breakpoints: {    
  //     992: {
  //       slidesPerView: 3,
  //     }, 
  //     768: {
  //       slidesPerView: 2,
  //     },
  //   },
  //   autoplay: {
  //     delay: 5000,
  //   },
  // });

 // Search option start here
  // $(document).on("click", ".searchbtn, .closer", function () {
  //   $(".orginalsearch").toggleClass("active");
  // });  
      
// lightcase
  $('a[data-rel^=lightcase]').lightcase({
    transition: 'fade',
    showCaption: false,
    closeButton: true,      // Display close button
    arrow: true,            // Display navigation arrows
    maxWidth: 1200,         // Set the maximum width of the lightbox

    // Custom icons (using Font Awesome)
    closeIcon: '<i class="fas fa-times"></i>',
    leftArrow: '<i class="fas fa-chevron-left"></i>',
    rightArrow: '<i class="fas fa-chevron-right"></i>'
  });


// scroll up start here
  $(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").css({
          bottom: "2%",
          opacity: "1",
          transition: "all .5s ease",
        });
      } else {
        $(".scrollToTop").css({
          bottom: "-30%",
          opacity: "0",
          transition: "all .5s ease",
        });
      }
    });
    //Click event to scroll to top
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
  });
});
      
   
// shop cart + - start here
  // var CartPlusMinus = $('.cart-plus-minus');
  // $(".qtybutton").on("click", function() {
  //     var $button = $(this);
  //     var oldValue = $button.parent().find("input").val();
  //     if ($button.text() === "+") {
  //         var newVal = parseFloat(oldValue) + 1;
  //     } else {
  //         if (oldValue > 0) {
  //             var newVal = parseFloat(oldValue) - 1 ;
  //         } else {
  //             newVal = 1;
  //         }
  //     }
  // $button.parent().find("input").val(newVal);
  // });
      
  // products details start here
    // var swiper = new Swiper(".productsdetails1", {
    // loop: true,
    // spaceBetween: 20,
    // height: 370,
    // slidesPerView: 4,
    // freeMode: true,
    // watchSlidesProgress: true,
    // });
        
    // var swiper2 = new Swiper(".productsdetails2", {
    // loop: true,
    // spaceBetween: 0,        
    // thumbs: {
    // swiper: swiper,
    // },
    // });         
 
  //contact form js
    // $(function () {
    //       var form = $('#contact-form');
    //       var formMessages = $('.form-message');
    //       $(form).submit(function (e) {
    //           e.preventDefault();
    //           var formData = $(form).serialize();
    //           $.ajax({
    //               type: 'POST',
    //               url: $(form).attr('action'),
    //               data: formData
    //           })
    //           .done(function (response) {
    //               $(formMessages).removeClass('error');
    //               $(formMessages).addClass('success');
    //               $(formMessages).text(response);
    //               $('#contact-form input, #contact-form textarea').val('');
    //           })
    //           .fail(function (data) {
    //               $(formMessages).removeClass('success');
    //               $(formMessages).addClass('error');
    //               if (data.responseText !== '') {
    //                   $(formMessages).text(data.responseText);
    //               } else {
    //                   $(formMessages).text('Oops! An error occured and your message could not be sent.');
    //               }
    //           });
    //       });
    // }); 
    
 // text aniamtion
  var words = ['Md Bakul', 'Front end developer','Wordpress Developer'],  
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 35,
  speed = 70;
  var wordflick = function () {
  setInterval(function () {
  if (forwards) {
    if (offset >= words[i].length) {
      ++skip_count;
      if (skip_count == skip_delay) {
        forwards = false;
        skip_count = 0;
      }
    }
  }
  else {
    if (offset == 0) {
      forwards = true;
      i++;
      offset = 0;
      if (i >= len) {
        i = 0;
      }
    }
  }
  part = words[i].substr(0, offset);
  if (skip_count == 0) {
    if (forwards) {
      offset++;
    }
    else {
      offset--;
    }
  }
  $('.word').text(part);
  },speed);
  };

  $(document).ready(function () {
    wordflick();
  });  
  
  });
}(jQuery));

