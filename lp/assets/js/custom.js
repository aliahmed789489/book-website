//***** Sticky Header JS Start Here *****//
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});
//***** Sticky Header JS End Here *****//

//***** Banner Step Form JS Fold1 Start *****//
$(document).on('change', '.form-check-input', function(e) {
    $(this).closest('.selceted-box').hide();
    $(this).closest('.selceted-box').next().show();
});
$(document).on('click', '.next-btn', function(e) {
    var value = $(this).closest('.selceted-box').find('.must-required')
    var number_count = $('.number_count').val();
    if (number_count != "" && number_count != null) {
        $(this).closest('.selceted-box').hide();
        $(this).closest('.selceted-box').next().show();
    } else {
        alert("please check a value")
    }
});
$(document).on('click', '.previous-btn', function(e) {
    $(this).closest('.selceted-box').hide();
    $(this).closest('.selceted-box').prev().show();
});
//***** Banner Step Form JS Fold1 End *****//

//***** Banner Main Slider JS Start Here *****//
$('.banner-main-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
//***** Banner Main Slider JS End Here *****//

//***** Banner Down Brands Slider JS Start Here *****//
$('.bandown-brands-item').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
});
//***** Banner Down Brands Slider JS End Here *****//

//*****  Service Offer Slider JS Start Here *****//
$('.service-offer-slider').slick({
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
//***** Service Offer Slider JS End Here *****//

//*****  Award Brands Slider JS Start Here *****//
$('.award-brands-slider').slick({
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
});
//***** Award Brands Slider JS End Here *****//

//***** Feedback Content Slider JS Start Here *****//
$('.customer-feedback-slider').slick({
    dots: false,
    arrow: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.customer-feedbcack-images',
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.customer-feedbcack-images').slick({
    dots: false,
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.customer-feedback-slider',
    focusOnSelect: true,
});
//***** Feedback Content Slider JS End Here *****//

//***** Banner Main Slider JS Start Here *****//
$('.before-after-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
});
//***** Banner Main Slider JS End Here *****//

//***** Counter Timer JS Start Here *****//
$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: '',
        point_tag: 0
    }, options);

    var thisElement = $(this);

    $({
        count: settings.start
    }).animate({
        count: settings.end
    }, {
        duration: settings.duration,
        easing: settings.easing,
        point_tag: settings.point_tag,
        step: function() {

            if (settings.point_tag == 1) {

                var mathCount = parseFloat(this.count).toFixed(1);

            } else {

                var mathCount = Math.ceil(this.count);
            }
            thisElement.text(mathCount);

        },
        complete: settings.complete
    });
};

$('#number1').jQuerySimpleCounter({
    end: parseFloat($('#number1').text()),
    duration: 2000,
    point_tag: 0
});
$('#number2').jQuerySimpleCounter({
    end: parseInt($('#number2').text()),
    duration: 5000,
    point_tag: 0
});
$('#number3').jQuerySimpleCounter({
    end: parseInt($('#number3').text()),
    duration: 3000,
    point_tag: 0
});
$('#number4').jQuerySimpleCounter({
    end: parseInt($('#number4').text()),
    duration: 4000,
    point_tag: 0
});
$('#number5').jQuerySimpleCounter({
    end: parseInt($('#number5').text()),
    duration: 5000,
    point_tag: 0
});
//***** Counter Timer JS End Here *****//

//***** Popup And Flaot Buttons JS Start Here *****//
// $(window).ready(function () {
//     setTimeout(function () {
//         $("#staticBackdrop").modal("show");
//     }, 5000);
// }),

// $(".float-form-clickbtn").click(function () {
//   $(".float-side-form").toggleClass("active");
// });
//***** Popup And Flaot Buttons JS End Here *****//

//***** Tilt Hover Effect Js Start Here *****//
VanillaTilt.init(document.querySelector(".box1"), {
    max: 10,
    speed: 1000,
    scale: 1,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 700,
    glare: true
});
VanillaTilt.init(document.querySelector(".box3"), {
    max: 10,
    speed: 1000,
    perspective: 900
});
VanillaTilt.init(document.querySelectorAll(".box2"), {
    max: 30,
    speed: 600,
    scale: 1,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 600,
    glare: true
});
//***** Tilt Hover Effect Js End Here *****//



$('.best-seller-inner').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
});


$('.why-choose-inner').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});



$('.portfolioinner_mb').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
});
// $('.step-works-inner').slick({
//   dots: false,
//   arrows: false,
//   infinite: true,
//   speed: 400,
//   slidesToShow:  4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   margin:10,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 520,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }

//   ]
// });


$('.reviewSlider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 10,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

//***** Country Code JS Start Here *****//
$("#countryCode , #countryCode-second , #countryCode-third , #countryCode-four , #countryCode-five , #countryCodesix , #countryCode-seven").intlTelInput({
    initialCountry: "us",
    separateDialCode: true,
});
$(document).ready(function() {
    $("#countryCode , #countryCode-second , #countryCode-third , #countryCode-four , #countryCode-five , #countryCodesix , #countryCode-seven").on("input", function() {
        var maxLength = 10;
        if ($(this).val().length > maxLength) {
            $(this).val($(this).val().slice(0, maxLength)); // Truncate to 10 characters
        }
    });
});
//***** Country Code JS End Here *****//