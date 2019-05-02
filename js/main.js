$(document).ready(function(){

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
});