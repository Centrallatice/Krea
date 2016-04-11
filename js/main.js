$(function(){
     
    $(".element").typed({
        strings: ["Votre budget", "Votre projet.","Votre envie", "Votre imagination."],
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    $('.template-nav').singlePageNav({
        offset: $(".template-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".template-nav").addClass("sticky");
        }
        else{
            $(".template-nav").removeClass("sticky");
        }
    });
    
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    $('body').bind('touchstart', function() {});
  
    new WOW().init();
});

$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
