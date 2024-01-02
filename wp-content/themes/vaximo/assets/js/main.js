(function($) {
	'use strict';
	jQuery(document).on('ready', function () {
		// Mean Menu JS
		jQuery('.mean-menu').meanmenu({ 
			meanScreenWidth: "991"
		});

		// Preloader JS
		$(function() {
			$('body').addClass('loaded');
		});

		// Nice Select JS
		$('select').niceSelect();
		
		// Header Sticky JS
		$(window).on('scroll', function() {
			if ($(this).scrollTop() >150){  
				$('.navbar-area').addClass("is-sticky");
			}
			else{
				$('.navbar-area').removeClass("is-sticky");
			}
		});

		//  Hero Slider Wrap JS
		$('.hero-slider-wrap').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			mouseDrag: true,
			items:1,
			dots: false,
			autoHeight: true,
			autoplay: true,
			smartSpeed:800,
			autoplayHoverPause: true,
			navText: [
				"<i class='bx bx-chevrons-left'></i>",
				"<i class='bx bx-chevrons-right'></i>",
			],
		});

		// Odometer JS
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Go to Top JS
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').addClass('active');
			if (scrolled < 300) $('.go-top').removeClass('active');
		});  

		// Click Event JS
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});

		// FAQ Accordion JS
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});

		// Animation JS
		new WOW().init();
			
		// Popup Video JS
		$('.popup-youtube, .popup-vimeo').magnificPopup({
			disableOn: 300,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false,
		});

		// Input Plus & Minus Number JS
		$('.input-counter').each(function() {
			var spinner = jQuery(this),
			input = spinner.find('input[type="text"]'),
			btnUp = spinner.find('.plus-btn'),
			btnDown = spinner.find('.minus-btn'),
			min = input.attr('min'),
			max = input.attr('max');
			
			btnUp.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue + 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
			btnDown.on('click', function() {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				} else {
					var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
		});

		// Home Six JS

		// Search Popup JS
		$('.close-btn').on('click', function() {
			$('.search-overlay').fadeOut();
			$('.search-btn').show();
			$('.close-btn').removeClass('active');
		});
		$('.search-btn').on('click', function() {
			$(this).hide();
			$('.search-overlay').fadeIn();
			$('.close-btn').addClass('active');
		});

		// Sidebar Modal JS
		$(".burger-menu").on('click',  function() {
			$('.sidebar-modal').toggleClass('active');
		});
		$(".sidebar-modal-close-btn").on('click',  function() {
			$('.sidebar-modal').removeClass('active');
		});

	});

	// Odometer Wrap JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Vaximo_Funfacts.default', function($scope, $){
			// Odometer JS
			$('.odometer').appear(function(e) {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
            
        });
	});
	// Partner Wrap JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Partner_Logo.default', function($scope, $){
			$('.partner-wrap').owlCarousel({
				loop:true,
				nav:false,
				autoplay: true,
				autoplayHoverPause: true,
				mouseDrag: true,
				margin: 0,
				center: false,
				dots: false,
				smartSpeed:1500,
				responsive:{
					0:{
						items:2
					},
					576:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:5
					},
					1200:{
						items:5
					}
				}
			});

			// Partner Wrap JS
			$('.partner-slider-six').owlCarousel({
				loop: true,
				nav: false,
				autoplay: true,
				autoplayHoverPause: true,
				mouseDrag: true,
				margin: 10,
				center: false,
				dots: false,
				smartSpeed:1500,
				responsive:{
					0:{
						items:1
					},
					576:{
						items:2
					},
					768:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});
            
        });
	});

	// Tabs JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Tabs_Electronic_Section.default', function($scope, $){
			
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
			$('.tab ul.tabs li').on('click', function (g) {
				var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
				g.preventDefault();
			});
        });
	});

	// Choose Us Tabs JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/choose-us-tab.default', function($scope, $){
			
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
			$('.tab ul.tabs li').on('click', function (g) {
				var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
				g.preventDefault();
			});
        });
	});

	// Services Tabs JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Tabs_Services_Section.default', function($scope, $){
			
			$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
			$('.tab ul.tabs li').on('click', function (g) {
				var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
				tab.find('ul.tabs > li').removeClass('current');
				$(this).closest('li').addClass('current');
				tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
				tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
				g.preventDefault();
			});

			// Services Slider
			$('.services-tab-slider').owlCarousel({
				items:1,
				loop: true,
				margin: 30,
				nav: true,
				mouseDrag: true,
				items:1,
				dots: false,
				autoHeight: true,
				autoplay: true,
				smartSpeed:1500,
				autoplayHoverPause: true,
				center: true,
				navText: [
					"<i class='bx bx-left-arrow-alt'></i>",
					"<i class='bx bx-right-arrow-alt'></i>",
				],
			});

        });
	});
	
	// Client Wrap JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Vaximo_Testimonials.default', function($scope, $){
			$('.client-wrap').owlCarousel({
				loop:true,
				margin: 30,
				nav:false,
				mouseDrag: true,
				items:1,
				dots: false,
				autoHeight: true,
				autoplay: true,
				smartSpeed:1500,
				autoplayHoverPause: true,
				center: true,
				responsive:{
					0:{
						items:1,
					},
					576:{
						items:1,
					},
					768:{
						items:2,
					},
					992:{
						items:3,
					},
					1200:{
						items:3,
					}
				}
			});

			// Testimonials Slider JS
			$('.testimonials-slider').owlCarousel({
				items:1,
				loop: true,
				margin: 30,
				nav: true,
				mouseDrag: true,
				items:1,
				dots: false,
				autoHeight: true,
				autoplay: true,
				smartSpeed:1500,
				autoplayHoverPause: true,
				center: true,
				navText: [
					"<i class='bx bx-left-arrow-alt'></i>",
					"<i class='bx bx-right-arrow-alt'></i>",
				],
			});

        });
	});
	
	// Solutions Wrap JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Services_Area.default', function($scope, $){
		
			$('.solutions-wrap').owlCarousel({
				loop:true,
				margin: 30,
				nav:false,
				mouseDrag: true,
				items:1,
				dots: false,
				autoHeight: true,
				autoplay: true,
				smartSpeed:1500,
				autoplayHoverPause: true,
				center: true,
				responsive:{
					0:{
						items:1,
					},
					576:{
						items:1,
					},
					768:{
						items:2,
					},
					992:{
						items:3,
					},
					1200:{
						items:3,
					}
				}
			});
        });
	});

	// Single Security Wrap JS
    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/Services_Area.default', function($scope, $){
			$('.single-security-wrap').owlCarousel({
				loop:true,
				margin: 30,
				nav:false,
				mouseDrag: true,
				items:1,
				dots: true,
				autoHeight: true,
				autoplay: true,
				smartSpeed:1500,
				autoplayHoverPause: true,
				center: false,
				responsive:{
					0:{
						items:1,
					},
					576:{
						items:2,
					},
					768:{
						items:2,
					},
					992:{
						items:3,
					},
					1200:{
						items:4,
					}
				}
			});
        });
	});
})(jQuery);