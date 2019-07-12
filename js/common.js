document.addEventListener('DOMContentLoaded', function() {

	// init controller
	var controller = new ScrollMagic.Controller();


	// Home screen
	var tl = new TimelineMax();
	tl.to('.toggle_menu_button', 1, {opacity:1}, '+=1')
		.to('.hero-section', 1, {opacity:1}, 1)
		.to('.logo-box', .8, {scale:1, opacity:1, rotation:360}, '-=.2')
		.staggerTo('.top-nav li', .3, {opacity:1, scale:1, ease:Back.easeOut.config(3)}, .1)
		.fromTo('.phone-numbers', .3, {opacity:0, right:-100},{opacity:1, right:0})
		.from('.main-heading', .5, {opacity:0, left:-200, position:'relative', ease:Back.easeOut.config(2)})
		.from('.door-type-btn', .5, {scale: 0})
		.from('.feature-item-1', .7, {left:-200, opacity:0, skewX:90, position:'relative'})
		.from('.feature-item-2', .7, {scale:0, opacity:0}, '-=.7')
		.from('.feature-item-3', .7, {right:-200, opacity:0, skewX:-90, position:'relative'}, '-=.7')
		.from('.proof-text-box', .3, {width:0, opacity:0})
		.from('.proof-text', .2, {opacity:0, fontSize:0});


	// GALLERY SECTION
	// Gallery heading
	var galleryHeadingAnima = TweenMax.fromTo('.gallery .heading-of-sections', 1, {opacity:0, top:100},{opacity:1, top:0});
	var galleryHeadingScene = new ScrollMagic.Scene({
    triggerElement: '.gallery .heading-of-sections',
    reverse: false,
    triggerHook: .9
  })
  .setTween(galleryHeadingAnima);

  // Gallery items
  if (window.matchMedia('(max-width: 991px)').matches) {
		var galleryItemsAnima1 = new TimelineMax();
		galleryItemsAnima1.to('.gallery-item-1', 1, {opacity:1}, .5);
		var galleryScene1 = new ScrollMagic.Scene({
	    triggerElement: '.gallery-item-1',
	    reverse: false,
	    triggerHook: .7
	  })
	  .setTween(galleryItemsAnima1);

	  var galleryItemsAnima2 = new TimelineMax();
		galleryItemsAnima2.to('.gallery-item-2', 1, {opacity:1}, .5);
		var galleryScene2 = new ScrollMagic.Scene({
	    triggerElement: '.gallery-item-2',
	    reverse: false,
	    triggerHook: .7
	  })
	  .setTween(galleryItemsAnima2);

	  var galleryItemsAnima3 = new TimelineMax();
		galleryItemsAnima3.to('.gallery-item-3', 1, {opacity:1}, .5);
		var galleryScene3 = new ScrollMagic.Scene({
	    triggerElement: '.gallery-item-3',
	    reverse: false,
	    triggerHook: .7
	  })
	  .setTween(galleryItemsAnima3);
	}
	else {
		var galleryItemsAnima = new TimelineMax();
		galleryItemsAnima.staggerTo('.gallery-item', 1, {opacity:1}, .5);
		var galleryScene = new ScrollMagic.Scene({
	    triggerElement: '.gallery-item',
	    reverse: false,
	    triggerHook: .7
	  })
	  .setTween(galleryItemsAnima);
	}


  // STAGES SECTION
  // Stages heading
	var stagesHeadingAnima = TweenMax.fromTo('.stages .heading-of-sections', 1, {opacity:0, top:100},{opacity:1, top:0});
	var stagesHeadingScene = new ScrollMagic.Scene({
    triggerElement: '.stages .heading-of-sections',
    reverse: false,
    triggerHook: .9
  })
  .setTween(stagesHeadingAnima);

  // Stages steps
  // Mobile resolution
	if (window.matchMedia('(max-width: 767px)').matches) {
		var stagesAnima1 = new TimelineMax();
		stagesAnima1.staggerTo('.stage-item-1', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-1', .3, {color:'#73b257'}, .1)
							  .staggerFrom('.stage-line-1', .1, {width:0}, .2);
		var stagesScene1 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-1',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima1);

	  var stagesAnima2 = new TimelineMax();
		stagesAnima2.staggerTo('.stage-item-2', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-2', .3, {color:'#73b257'}, .1)
							  .staggerFrom('.stage-line-2', .1, {width:0}, .2);
		var stagesScene2 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-2',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima2);

	  var stagesAnima3 = new TimelineMax();
		stagesAnima3.staggerTo('.stage-item-3', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-3', .3, {color:'#73b257'}, .1)
							  .staggerFrom('.stage-line-3', .1, {width:0}, .2);
		var stagesScene3 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-3',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima3);

	  var stagesAnima4 = new TimelineMax();
		stagesAnima4.staggerTo('.stage-item-4', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-4', .3, {color:'#73b257'}, .1)
							  .staggerFrom('.stage-line-4', .1, {width:0}, .2);
		var stagesScene4 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-4',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima4);

	  var stagesAnima5 = new TimelineMax();
		stagesAnima5.staggerTo('.stage-item-5', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-5', .3, {color:'#73b257'}, .1)
							  .staggerFrom('.stage-line-5', .1, {width:0}, .2);
		var stagesScene5 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-5',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima5);

	  var stagesAnima6 = new TimelineMax();
		stagesAnima6.staggerTo('.stage-item-6', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-6', .3, {color:'#73b257'}, .1)
							  .staggerFrom('.stage-line-6', .1, {width:0}, .2);
		var stagesScene6 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-6',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima6);

	  var stagesAnima7 = new TimelineMax();
		stagesAnima7.staggerTo('.stage-item-7', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-7', .3, {color:'#73b257'}, .1)
							  .staggerFrom('.stage-line-7', .1, {width:0}, .2);
		var stagesScene7 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-7',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima7);

	  var stagesAnima8 = new TimelineMax();
		stagesAnima8.staggerTo('.stage-item-8', .3, {opacity:1}, .2)
							  .staggerFrom('.stage-order-8', .3, {color:'#73b257'}, .1);
		var stagesScene8 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-8',
	    reverse: false,
	    triggerHook: .8
	  })
	  .setTween(stagesAnima8);
	}

  // Tablet resolution
  else if (window.matchMedia('(max-width: 991px)').matches) {
		var stagesAnima_1to4 = new TimelineMax();
		stagesAnima_1to4.staggerTo('.stage-item-1,.stage-item-2,.stage-item-3,.stage-item-4', .3, {opacity:1}, .2)
							 .staggerFrom('.stage-order-1,.stage-order-2,.stage-order-3,.stage-order-4', .3, {color:'#73b257'}, .1)
							 .staggerFrom('.stage-line-1,.stage-line-2,.stage-line-3,.stage-line-4', .1, {width:0}, .2);
		var stagesScene_1to4 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-1',
	    reverse: false,
	    triggerHook: .5
	  })
	  .setTween(stagesAnima_1to4);

	  var stagesAnima_5to8 = new TimelineMax();
		stagesAnima_5to8.staggerTo('.stage-item-5,.stage-item-6,.stage-item-7,.stage-item-8', .3, {opacity:1}, .2)
							 .staggerFrom('.stage-order-5,.stage-order-6,.stage-order-7,.stage-order-8', .3, {color:'#73b257'}, .1)
							 .staggerFrom('.stage-line-5,.stage-line-6,.stage-line-7', .1, {width:0}, .2);
		var stagesScene_5to8 = new ScrollMagic.Scene({
	    triggerElement: '.stage-item-5',
	    reverse: false,
	    triggerHook: .5
	  })
	  .setTween(stagesAnima_5to8);
	}

	else {
		var stagesAnima = new TimelineMax();
		stagesAnima.staggerTo('.stage-item', .3, {opacity:1}, .2)
							 .staggerFrom('.stage-order', .3, {color:'#73b257'}, .1)
							 .staggerFrom('.stage-line', .1, {width:0}, .2);
		var stagesScene = new ScrollMagic.Scene({
	    triggerElement: '.stage-item',
	    reverse: false,
	    triggerHook: .5
	  })
	  .setTween(stagesAnima);
	}


  // INFO SECTION
  // Info heading
  var infoHeadingAnima = TweenMax.fromTo('.info .heading-of-sections', 1, {opacity:0, top:100},{opacity:1, top:0});
  var infoHeadingScene = new ScrollMagic.Scene({
    triggerElement: '.info .heading-of-sections',
    reverse: false,
    triggerHook: 1
  })
  .setTween(infoHeadingAnima);

  // Info items
  if (window.matchMedia('(max-width: 767px)').matches) {
		var infoItemsAnima1 = new TimelineMax();
	  infoItemsAnima1.to('.info-item-1', .2, {opacity:1})
	  							.to('.info-heading-1', .3, {opacity:1, scaleX:1}, '-=.2')
	  							.to('.info-text-1', .4, {opacity:1, scaleY:1}, '-=.1')
	  							.from('.more-btn-1', .2, {opacity:0, left:-300, position:'relative'});
	  var infoScene1 = new ScrollMagic.Scene({
	    triggerElement: '.info-item-1',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(infoItemsAnima1);

	  var infoItemsAnima2 = new TimelineMax();
	  infoItemsAnima2.to('.info-item-2', .2, {opacity:1})
	  							.to('.info-heading-2', .3, {opacity:1, scaleX:1}, '-=.2')
	  							.to('.info-text-2', .4, {opacity:1, scaleY:1}, '-=.1')
	  							.from('.more-btn-2', .2, {opacity:0, left:-300, position:'relative'});
	  var infoScene2 = new ScrollMagic.Scene({
	    triggerElement: '.info-item-2',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(infoItemsAnima2);

	  var infoItemsAnima3 = new TimelineMax();
	  infoItemsAnima3.to('.info-item-3', .2, {opacity:1})
	  							.to('.info-heading-3', .3, {opacity:1, scaleX:1}, '-=.2')
	  							.to('.info-text-3', .4, {opacity:1, scaleY:1}, '-=.1')
	  							.from('.more-btn-3', .2, {opacity:0, left:-300, position:'relative'});
	  var infoScene3 = new ScrollMagic.Scene({
	    triggerElement: '.info-item-3',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(infoItemsAnima3);

	  var infoItemsAnima4 = new TimelineMax();
	  infoItemsAnima4.to('.info-item-4', .2, {opacity:1})
	  							.to('.info-heading-4', .3, {opacity:1, scaleX:1}, '-=.2')
	  							.to('.info-text-4', .4, {opacity:1, scaleY:1}, '-=.1')
	  							.from('.more-btn-4', .2, {opacity:0, left:-300, position:'relative'});
	  var infoScene4 = new ScrollMagic.Scene({
	    triggerElement: '.info-item-4',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(infoItemsAnima4);
	}
	
	else {
		var infoItemsAnima = new TimelineMax();
	  infoItemsAnima.staggerTo('.info-item', .2, {opacity:1}, .2)
	  							.staggerTo('.info-heading', .3, {opacity:1, scaleX:1}, '-=.2')
	  							.staggerTo('.info-text', .4, {opacity:1, scaleY:1}, '-=.1')
	  							.staggerFrom('.more-btn', .2, {opacity:0, left:-300, position:'relative'}, .5)
	  							.fromTo('.view-all-link', .1, {scale:1},{scale:2.5}, '+=.2')
	  							.to('.view-all-link', .1, {scale:1});
	  var infoScene = new ScrollMagic.Scene({
	    triggerElement: '.info-item',
	    reverse: false,
	    triggerHook: .5
	  })
	  .setTween(infoItemsAnima);
	}


  // 3D SECTION
  var _3D = new TimelineMax();
  _3D.staggerTo('.three-d-tur', .7, {opacity:1, scale:1})
  _3D.staggerTo('.spinner-box', .7, {rotation:720, scale:1}, '+=1.5');
  var _3DScene = new ScrollMagic.Scene({
    triggerElement: '.three-d-tur',
    reverse: false,
    triggerHook: .7
  })
  .setTween(_3D);


  // Q&A

  // Q&A items
  if (window.matchMedia('(max-width: 1199px)').matches) {

  	// Heading
	  var qa = TweenMax.fromTo('.q-a .heading-of-sections', 1, {opacity:0, top:100},{opacity:1, top:0});
	  var qaScene = new ScrollMagic.Scene({
	    triggerElement: '.q-a .heading-of-sections',
	    reverse: false,
	    triggerHook: .7
	  })
	  .setTween(qa);

		var qaItems1 = new TimelineMax();
	  qaItems1.to('.q-a-1', .5, {opacity:1, scaleX:1, transformOrigin:'left top'})
	  			 .fromTo('.btn-answer-1', .5, {scale:0, rotation:-1440},{scale:1, rotation:0});
	  var qaItemsScene1 = new ScrollMagic.Scene({
	    triggerElement: '.q-a-1',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(qaItems1);

	  var qaItems2 = new TimelineMax();
	  qaItems2.to('.q-a-2', .5, {opacity:1, scaleX:1, transformOrigin:'left top'})
	  			 .fromTo('.btn-answer-2', .5, {scale:0, rotation:-1440},{scale:1, rotation:0});
	  var qaItemsScene2 = new ScrollMagic.Scene({
	    triggerElement: '.q-a-2',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(qaItems2);

	  var qaItems3 = new TimelineMax();
	  qaItems3.to('.q-a-3', .5, {opacity:1, scaleX:1, transformOrigin:'left top'})
	  			 .fromTo('.btn-answer-3', .5, {scale:0, rotation:-1440},{scale:1, rotation:0});
	  var qaItemsScene3 = new ScrollMagic.Scene({
	    triggerElement: '.q-a-3',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(qaItems3);

	  var qaItems4 = new TimelineMax();
	  qaItems4.to('.q-a-4', .5, {opacity:1, scaleX:1, transformOrigin:'left top'})
	  			 .fromTo('.btn-answer-4', .5, {scale:0, rotation:-1440},{scale:1, rotation:0});
	  var qaItemsScene4 = new ScrollMagic.Scene({
	    triggerElement: '.q-a-4',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(qaItems4);

	  var qaItems5 = new TimelineMax();
	  qaItems5.to('.q-a-5', .5, {opacity:1, scaleX:1, transformOrigin:'left top'})
	  			 .fromTo('.btn-answer-5', .5, {scale:0, rotation:-1440},{scale:1, rotation:0});
	  var qaItemsScene5 = new ScrollMagic.Scene({
	    triggerElement: '.q-a-5',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(qaItems5);

	  var qaItems6 = new TimelineMax();
	  qaItems6.to('.q-a-6', .5, {opacity:1, scaleX:1, transformOrigin:'left top'})
	  			 .fromTo('.btn-answer-6', .5, {scale:0, rotation:-1440},{scale:1, rotation:0});
	  var qaItemsScene6 = new ScrollMagic.Scene({
	    triggerElement: '.q-a-6',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(qaItems6);
	}

	else {

		// Heading
	  var qa = TweenMax.fromTo('.q-a .heading-of-sections', 1, {opacity:0, top:100},{opacity:1, top:0});
	  var qaScene = new ScrollMagic.Scene({
	    triggerElement: '.q-a .heading-of-sections',
	    reverse: false,
	    triggerHook: 1
	  })
	  .setTween(qa);

		var qaItems = new TimelineMax();
	  qaItems.staggerTo('.q-a-item', .5, {opacity:1, scaleX:1, transformOrigin:'left top'}, .2)
	  			 .staggerFromTo('.btn-text-answer', .5, {scale:0, rotation:1440},{scale:1.5, rotation:0}, .2)
	  			 .staggerTo('.btn-text-answer', .5, {scale:1, rotation:720}, .2, '-=2.1');
	  var qaItemsScene = new ScrollMagic.Scene({
	    triggerElement: '.q-a-item',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(qaItems);
	}


  // MAP
  var mapAnima = TweenMax.from('.map', 2, {opacity:0});
  var mapScene = new ScrollMagic.Scene({
    triggerElement: '.map',
    reverse: false,
    triggerHook: .6
  })
  .setTween(mapAnima);


  // FOOTER
  if (window.matchMedia('(max-width: 767px)').matches) {

  	// Video items
		var footerVideo1 = new TimelineMax();
	  footerVideo1.to('.footer', .5, {opacity:1})
							 .from('.video-item-1', 1, {opacity:0}, .5)
							 
	  var footerVideoScene1 = new ScrollMagic.Scene({
	    triggerElement: '.video-item-1',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(footerVideo1);

	  var footerVideo2 = new TimelineMax();
	  footerVideo2.from('.video-item-2', 1, {opacity:0}, .5); 
	  var footerVideoScene2 = new ScrollMagic.Scene({
	    triggerElement: '.video-item-2',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(footerVideo2);

	  var footerVideo3 = new TimelineMax();
	  footerVideo3.from('.video-item-3', 1, {opacity:0}, .5); 
	  var footerVideoScene3 = new ScrollMagic.Scene({
	    triggerElement: '.video-item-3',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(footerVideo3);

	  // Phones
	  var footerPhones = new TimelineMax();
	  footerPhones.staggerFrom('.phones div', .4, {opacity:0, left:-50, position:'relative'}, .3)
	  						.from('.callback', .7, {color:'transparent', borderBottom:'none', top:20, position:'relative'});
	  var footerPhonesScene = new ScrollMagic.Scene({
	    triggerElement: '.phones',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(footerPhones);

	  // Address
	  var footerAddress = new TimelineMax();
	  footerAddress.staggerFrom('.address-block > *', 1, {opacity:0}, .2, '+=1');
	  var footerAddressScene = new ScrollMagic.Scene({
	    triggerElement: '.address-block',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(footerAddress);

	  // Menu list
	  var footerMenuList = new TimelineMax();
	  footerMenuList.staggerFrom('.footer-menu-list li', 1, {opacity:0, top:50, position:'relative'}, .3);
	  var footerListScene = new ScrollMagic.Scene({
	    triggerElement: '.footer-menu-list li:nth-child(3)',
	    reverse: false,
	    triggerHook: .7
	  })
	  .setTween(footerMenuList);

	  // Footer bottom info
	  var footerBottomInfo = new TimelineMax();
	  footerBottomInfo.from('.social h5', .7, {opacity:0, top:-50, position:'relative', ease: Bounce.easeOut}, '-=.5')
										.staggerFrom('.social-icon-block > *', 1, {
										 	 opacity:0,
											 right:-100,
											 position:'relative',
											 ease:Elastic.easeOut.config(1, 0.4)
										}, .3, '-=.2')
										.to('.impreza', .2, {text:'IMPREZA', ease:Linear.easeNone})
										.from('.copyright', .5, {opacity:0, top:50, position:'relative'}, '-=.2');
	  var footerBottomScene = new ScrollMagic.Scene({
	    triggerElement: '.social',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(footerBottomInfo);
	}

	else {
		var footerAnima = new TimelineMax();
	  footerAnima.to('.footer', .5, {opacity:1})
							 .staggerFrom('.video-item', 1, {opacity:0}, .5)
							 .staggerFrom('.footer .phones div', .3, {opacity:0, left:-50, position:'relative'}, .3, '-=1.5')
							 .from('.callback', .3, {color:'transparent', borderBottom:'none', top:20, position:'relative'}, '-=1.5')
							 .staggerFrom('.address-block > *', 1, {opacity:0}, .2, '-=1')
							 .staggerFrom('.footer-menu-list li', .5, {opacity:0, top:50, position:'relative'}, .3, '-=1')
							 .from('.social h5', .7, {opacity:0, top:-50, position:'relative', ease: Bounce.easeOut}, '-=.5')
							 .staggerFrom('.social-icon-block > *', 1, {
							 	 opacity:0,
								 right:-100,
								 position:'relative',
								 ease:Elastic.easeOut.config(1, 0.4)
							 }, .3, '-=.2')
							 .to('.impreza', .2, {text:'IMPREZA', ease:Linear.easeNone})
							 .from('.copyright', .5, {opacity:0, top:50, position:'relative'}, '-=.2');
	  var footerScene = new ScrollMagic.Scene({
	    triggerElement: '.footer',
	    reverse: false,
	    triggerHook: .6
	  })
	  .setTween(footerAnima);
	}

  // Add scenes to controller
  controller.addScene([
	  galleryHeadingScene,
	  // Animate gallery items one by one for mobile
	  galleryScene1,
	  galleryScene2,
	  galleryScene3,
	  // Animation on large screen
	  galleryScene,

	  stagesHeadingScene,
	  // Animation on mobile
	  stagesScene1,
	  stagesScene2,
	  stagesScene3,
	  stagesScene4,
	  stagesScene5,
	  stagesScene6,
	  stagesScene7,
	  stagesScene8,
	  // Animation on tablet
	  stagesScene_1to4,
	  stagesScene_5to8,
	  stagesScene,

	  infoHeadingScene,
	  infoScene1,
	  infoScene2,
	  infoScene3,
	  infoScene4,
	  infoScene,

	  _3DScene,

	  qaScene,
	  qaItemsScene1,
	  qaItemsScene2,
	  qaItemsScene3,
	  qaItemsScene4,
	  qaItemsScene5,
	  qaItemsScene6,
	  qaItemsScene,

	  mapScene,

	  // Footer video fade in
	  footerVideoScene1,
	  footerVideoScene2,
	  footerVideoScene3,
	  // Footer phones animation
	  footerPhonesScene,
	  // Footer address animation
	  footerAddressScene,
	  // Footer menu list animation
	  footerListScene,
	  // Footer bottom animation
	  footerBottomScene,
	  footerScene
	]);

});








$(".toggle_menu_button").click(function() {
	$(this).fadeOut("fast");
	$(".mobile_menu").addClass("open_mobile_menu");
	$(".mask_bg").fadeIn("fast");
})

$(".mask_bg").click(function() {
	$(".mask_bg").fadeOut("fast");
	$(".mobile_menu").removeClass("open_mobile_menu");
	$(".toggle_menu_button").fadeIn("fast");
})

$(".close_menu_button").click(function() {
	$(".mask_bg").fadeOut("fast");
	$(".mobile_menu").removeClass("open_mobile_menu");
	$(".toggle_menu_button").fadeIn("fast");
})

$(".nav_open_inner").click(function(){									
	$(".shortmenu").slideToggle();
	$(this).toggleClass("nav_open__active");
});