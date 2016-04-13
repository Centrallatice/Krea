$(document).ready(function(){
	
	$(".element").typed({
        strings: ["pour présenter mes produits \" ^2000","pour vendre mes produits en ligne \" ^2000","pour ma mairie \" ^2000","pour mon association \" ^2000","pour mon entreprise \" ^2000"],
        typeSpeed: 10,
        contentType: 'html',
        showCursor: false,
        loop: false,
        loopCount: true,
		callback: function() {
			setTimeout(function() {
				$('h1.principale').fadeOut(2000,function(){
					$('h1.principale').html("La seule limite est <p class='colormeBlue'><span class='elementtwice'></span></p></h1>").fadeIn("fast");
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