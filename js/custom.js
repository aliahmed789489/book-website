$(".packag-slider").slick({
    dots: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    prevArrow: '<img src="../images/leftarrow.png" class="leftarrow_cls" />',
    nextArrow: '<img src="../images/rightarrow.png" class="rightarrow_cls" />',
    autoplaySpeed: 4000,
    responsive: [{
            breakpoint: 1700,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }
    ]
});







$(".row_one_click").click(function() {

    $("#open_tab_genre_two").slideUp(1000);
    $("#open_tab_genre_three").slideUp(1000);
    $(".row_one_click_two").removeClass("activeedd");
    $(".row_one_click_three").removeClass("activeedd");



    $("#open_tab_genre").slideDown(1000);
    $("#genre_side_div h4").html($(this).attr("data-booktitle"));
    $("#genre_side_div h2").html($(this).attr("data-heading"));
    $("#genre_side_div p").html($(this).attr("data-para"));

    $(".open_tab_genre").css("background-color", $(this).attr("data-color"));
    $(this).find("i").css("color", $(this).attr("data-color"));



    $("#row_one_main_img").attr("src", $(this).attr("data-main-image"));
    var d = $(this).attr("data-image-row");
    var a = d.split(",");
    $("#cat_img_1").attr("src", a[0]);
    $("#cat_img_2").attr("src", a[1]);
    $("#cat_img_3").attr("src", a[2]);
    $("#cat_img_4").attr("src", a[3]);
    $("#cat_img_5").attr("src", a[4]);
    $(".row_one_click").removeClass("activeedd");
    $(this).addClass("activeedd")

});

$(".row_one_click_two").click(function() {

    $("#open_tab_genre").slideUp(1000);
    $("#open_tab_genre_three").slideUp(1000);
    $(".row_one_click").removeClass("activeedd");
    $(".row_one_click_three").removeClass("activeedd");


    $("#open_tab_genre_two").slideDown(1000);
    $("#open_tab_genre_two h4").html($(this).attr("data-booktitle"));
    $("#open_tab_genre_two h2").html($(this).attr("data-heading"));
    $("#open_tab_genre_two p").html($(this).attr("data-para"));

    $(".open_tab_genre").css("background-color", $(this).attr("data-color"));
    $(this).find("i").css("color", $(this).attr("data-color"));



    $("#row_one_two_img").attr("src", $(this).attr("data-main-image"));
    var d = $(this).attr("data-image-row");
    var a = d.split(",");
    $("#cat_2_img_1").attr("src", a[0]);
    $("#cat_2_img_2").attr("src", a[1]);
    $("#cat_2_img_3").attr("src", a[2]);
    $("#cat_2_img_4").attr("src", a[3]);
    $("#cat_2_img_5").attr("src", a[4]);



    $(".row_one_click_two").removeClass("activeedd");
    $(this).addClass("activeedd");

});



$(".row_one_click_three").click(function() {
    $(".row_one_click").removeClass("activeedd");
    $(".row_one_click_two").removeClass("activeedd");



    $("#open_tab_genre").slideUp(1000);
    $("#open_tab_genre_two").slideUp(1000);



    $("#open_tab_genre_three").slideDown(1000);
    $("#open_tab_genre_three h4").html($(this).attr("data-booktitle"));
    $("#open_tab_genre_three h2").html($(this).attr("data-heading"));
    $("#open_tab_genre_three p").html($(this).attr("data-para"));


    $(".open_tab_genre").css("background-color", $(this).attr("data-color"));
    $(this).find("i").css("color", $(this).attr("data-color"));




    $("#row_three_main_img").attr("src", $(this).attr("data-main-image"));
    var d = $(this).attr("data-image-row");
    var a = d.split(",");
    $("#cat_3_img_1").attr("src", a[0]);
    $("#cat_3_img_2").attr("src", a[1]);
    $("#cat_3_img_3").attr("src", a[2]);
    $("#cat_3_img_4").attr("src", a[3]);
    $("#cat_3_img_5").attr("src", a[4]);


    $(".row_one_click_three").removeClass("activeedd");
    $(this).addClass("activeedd");

});







$(".close-sign-genre").click(function() {

    $("#open_tab_genre").slideUp(1000);
    $(".row_one_click").removeClass("activeedd");


    $("#open_tab_genre_two").slideUp(1000);
    $(".row_one_click_two").removeClass("activeedd");


    $("#open_tab_genre_three").slideUp(1000);
    $(".row_one_click_three").removeClass("activeedd");
});



$(document).ready(function() {
    $(".moreBox").slice(0, 12).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 12).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
});



$(".banner-inner-r").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1
        }
    }]
});


$(".partnerslider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1
        }
    }]
});

$(".portfolio_inner").slick({
    dots: false,
    arrows: false,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    width: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]

});

$(".gwservices_inner2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1
        }
    }]

});

$('.testimonial_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 0,
    arrows: false,
    speed: 20000,
    cssEase: 'linear',
    Swiping: true,
    vertical: true,
    verticalSwiping: true,
    margin: 0,
    responsive: [{
            breakpoint: 1366,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});



/* RESPONSIVE JS */
// if ($(window).width() < 825) {

//     $('.mainBanList,.tabViewList').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       dots: true,
//       autoplay: false,
//       autoplaySpeed: 4000,
//     });

// }




var a = 0;
$(window).scroll(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        a = 0;
    }
});






$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();