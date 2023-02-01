$(function() {
    // �إå����Υ�����Ĵ��
    headerAdjust();
    $(window).on('scroll', function() {
        headerAdjust();
    });
    
    // ��������������������
    $('.day-list').each(function() {
        var month = $(this).attr('data-month');
        var day = $(this).attr('data-day');
        var color = $(this).attr('data-color');

        $('.makeshop-calendar' + month +' .day' + day).css({
            'background-color': color,
            'color': '#fff',
            'font-weight': 'bold',
            'height': '14px'
        });
    });
    
    // �����ե�����
    $('.search-keyword, .search-price, .original-code').on('keypress', function(e) {
        if (e.keyCode == 13) {
            $('.search-url')[0].click();
        }
    });
    
    // �ϥ�С�������˥塼
    $('.openbtn').on('click', function() {
        $(this).toggleClass('active');
        $('#g-nav').toggleClass('panelactive');
    });
    
    // �����ɥ�˥塼���Ĥ���
    $('#g-nav a').on('click', function() {
        $('.openbtn').removeClass('active');
        $('#g-nav').removeClass('panelactive');
    });
    
    // �����ɥ�˥塼�Υ��ƥ��꡼����
    $('.accordion').on('click', function() {
        $(this).toggleClass('on').next().slideToggle();
        $('.accordion').not(this).removeClass('on').next('.close').slideUp();
    });
});

function headerAdjust() {
    var adjustPoint = 20;
    var scrollTop = $(window).scrollTop();
    if(scrollTop > adjustPoint) {
        $('.header').addClass('fix');
    } else {
        $('.header').removeClass('fix');
    }
}

function MakeShop_afterListCartEntry(data){
    if (!data.result) {
        data.method.modal(data.error.message, function() {
            location.href = '/view/item/' + data.systemCode;
        });

        return false;
    }
}
