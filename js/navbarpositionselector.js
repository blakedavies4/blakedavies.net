$(document).ready(function(){$('#home div.layer header div.container div.hidden-container nav a.home-nav').addClass("nav-position");});$(window).scroll(function(){if($(window).scrollTop()>=$('#home div.layer div.box').position().top-74){$('#home div.layer header div.container nav a.home-nav').addClass("nav-position");$('#home div.layer header div.container nav a.about-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.benefits-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.pricing-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.contact-nav').removeClass("nav-position");}else{$('#home div.layer header div.container nav a.home-nav').removeClass("nav-position");$('#home div.layer header div.container div.hidden-container nav a.home-nav').addClass("nav-position");}if($(window).scrollTop()>=$('#about-anchor').position().top-74){$('#home div.layer header div.container nav a.home-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.about-nav').addClass("nav-position");$('#home div.layer header div.container nav a.benefits-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.pricing-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.contact-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#pricing-anchor').position().top-74){$('#home div.layer header div.container nav a.home-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.about-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.benefits-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.pricing-nav').addClass("nav-position");$('#home div.layer header div.container nav a.contact-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#benefits-anchor').position().top-74){$('#home div.layer header div.container nav a.home-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.about-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.benefits-nav').addClass("nav-position");$('#home div.layer header div.container nav a.pricing-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.contact-nav').removeClass("nav-position");} if($(window).scrollTop()>=$('#contact-anchor').position().top-74){$('#home div.layer header div.container nav a.home-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.about-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.benefits-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.pricing-nav').removeClass("nav-position");$('#home div.layer header div.container nav a.contact-nav').addClass("nav-position");}});