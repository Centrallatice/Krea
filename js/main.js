$(document).ready(function(){
	
	$(".element").typed({
        strings: ["pour présenter mes produits ^2000","pour vendre en ligne ^1000","pour ma mairie ^1000","pour mon association ^1000","mon entreprise ^1000"],
        typeSpeed: 100,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
		callback: function() {
			setTimeout(function() {
				$('h1.wow').fadeOut(2000,function(){
					$('h1.wow').html("La seule limite est <p class='colormeBlue'><span class='elementtwice'></span></p></h1>").fadeIn("fast");
					$(".elementtwice").typed({
						strings: ["Votre imagination !"],
						typeSpeed: 200,
						contentType: 'html'
					});
				});
			},2000);
		}
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