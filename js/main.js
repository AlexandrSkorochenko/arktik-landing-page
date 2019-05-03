function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initReviewsSlider() {
    var reviews = $(".reviews-slider");
    var reviewsNavText = $('.reviews-slider-navigation__text');
    var reviewsLeftBtn = $('.reviews-slider-navigation__left');
    var reviewsRightBtn = $('.reviews-slider-navigation__right');
    var reviewsCurrent = 1;
    var reviewsTotal = 1;

    reviews.on('changed.owl.carousel', function (e) {
        reviewsCurrent = e.item.index + 1;
        reviewsTotal = e.item.count;
        reviewsNavText.text(reviewsCurrent + ' отзыв из ' + reviewsTotal);

        reviewsLeftBtn.prop('disabled', reviewsCurrent === 1);
        reviewsRightBtn.prop('disabled', reviewsCurrent === reviewsTotal);
    });

    reviews.owlCarousel({
        items: 1,
        dots: false
    });

    reviewsLeftBtn.click(function(){
        reviews.trigger('prev.owl.carousel');
    });

    reviewsRightBtn.click(function(){
        reviews.trigger('next.owl.carousel');
    });
}

function initCapture() {
    var firstNum = getRandomInt(1, 10);
    var secondNum = getRandomInt(1, 10);
    var $notRobotText = $('.not-robot-text');
    var $orderForm = $('.order-us-form');
    var $notRobotInput = $('.field__input--not-robot');

    $orderForm.submit(function(e) {
        if ($notRobotInput.val() != firstNum + secondNum) {
            e.preventDefault();
            $notRobotInput.addClass('field__input--has-error')
        }
    })

    $notRobotText.text(firstNum + ' + ' + secondNum + ' = ')
}

function initNumbers() {
    $('.our-company__item-number span').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

function initModalBox() {
    var modalBoxCaller = $('.modal-box-caller');
    var modalBox = $('.modal-box');
    var modalBoxCloseBtn = $('.modal-box__close-btn');
    var modalBackDrop = $('.modal-back-drop');
    var pageContent = $('.page-content');

    function closeModalBox () {
        modalBackDrop.hide();
        modalBox.hide();
        pageContent.removeClass('page-content--blured');
    }

    modalBoxCaller.click(function() {
        modalBackDrop.show();
        modalBox.show();
        pageContent.addClass('page-content--blured');
    });

    modalBoxCloseBtn.click(function() {
        closeModalBox();
    });

    modalBackDrop.click(function() {
        closeModalBox();
    });
}

function initStikyHeader () {
    $( window ).scroll(function() {
        if($( window ).scrollTop() == 0) $('.header').css('display','');
        if ($( window ).scrollTop() > 650){

            $('.header').addClass('header--fixed').fadeIn();
        } else {

            $('.header').removeClass('header--fixed');
        }
    });
}

function initMobileNav() {
    $('.mobile-menu-btn').click(function () {
        $(this).toggleClass('mobile-menu-btn--open');
        $('.header__bott').slideToggle();
    });
}

$(document).ready(function(){
    initReviewsSlider();
    initCapture();
    initModalBox();
    initStikyHeader();
    initMobileNav();
    // initNumbers();
});