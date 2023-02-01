$(function() {
    $('.gallery').slick({
        infinite: true,
        fade: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
    });

    $('.choice-btn').slick({
        infinite: true,
        slidesToShow: 100,
        focusOnSelect: true,
        asNavFor: '.gallery'
    });

    $('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.choice-btn .slick-slide').removeClass('slick-current').eq(nextSlide).addClass('slick-current');
    });
    
    $('.modal-close, .modal-bg').on('click', function() {
        $('.modal-area').fadeOut();
    });
});

function MakeShop_afterItemOptionChange(data) {
    if (data.isSoldout) {
        $('.instock').removeClass('on').addClass('off');
        $('.outstock').removeClass('off').addClass('on');
    } else {
        $('.instock').removeClass('off').addClass('on');
        $('.outstock').removeClass('on').addClass('off');
    }
}

function MakeShop_afterCartEntry(data) {
    if (data.result) {
        $('.cart-badge').text(data.totalQuantity).show();
        $('.modal-area').fadeIn();
    } else {
        data.method.modal(data.error.message);
    }
    
    return false;
}
