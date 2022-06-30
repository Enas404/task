$(document).ready(function(){

    /* when collapse nave enter*/
    var myCollapsible = document.getElementById('navbarSupportedContent');

        myCollapsible.addEventListener('hide.bs.collapse', function () {
            $(this).parent('.container').parent('nav').removeClass("bg-light").addClass('bg-transparent')
        });

        myCollapsible.addEventListener('show.bs.collapse', function () {
            $(this).parent('.container').parent('nav').removeClass('bg-transparent').addClass('bg-light');
        });

    /* slider categories buttons*/
    $(".categories-links .btn-light").on("click", function(){
        $(this).parent(".col-md-4").siblings().children(".btn-light").removeClass("active");
        $(this).addClass("active");
        
    });

    /* cart-shopping & favorite buttons */
    $("#cart-links .favorite").click(function(){
        $(this).parent().siblings("#favorite").toggle();
        $(this).parent().siblings("#cart-shopping").hide();
        
        
    });
    $("#cart-links .cart-shopping").click(function(){
        $(this).parent().siblings("#cart-shopping").toggle();
        $(this).parent().siblings("#favorite").hide();
    });
    //hide them when scroll
    $(window).scroll(function(){
        $("#cart-shopping ,#favorite").hide();
    })

    /* hover bg-product */
    $(".best-seller .img-product").hover(function(){
        $(this).children(".overly,.hover-links").show();

    },function(){
        $(this).children(".overly,.hover-links").hide();
    });

    //slider
    $('.pro1').click(function(){
        $(this).parent().parent().siblings().children('#img-1').addClass('active');
        $(this).parent().parent().siblings().children('#img-2,#img-3,#img-4').removeClass('active');
    });
    $('.pro2').click(function(){
        $(this).parent().parent().siblings().children('#img-2').addClass('active');
        $(this).parent().parent().siblings().children('#img-1,#img-3,#img-4').removeClass('active');
    });
    $('.pro3').click(function(){
        $(this).parent().parent().siblings().children('#img-3').addClass('active');
        $(this).parent().parent().siblings().children('#img-2,#img-4,#img-1').removeClass('active');
    });
    $('.pro1').click(function(){
        $(this).parent().parent().siblings().children('#img-4').addClass('active');
        $(this).parent().parent().siblings().children('#img-2,#img-3,#img-1').removeClass('active');
    });


});