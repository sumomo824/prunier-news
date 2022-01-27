$(function(){
    
    $('#menu-icon').click(function(){
        $('.hide-menu').css('left','0');
        $('#menu-icon').hide();
        $('.fa-times').show();
    });
    $('.fa-times').click(function(){
        $('.hide-menu').css('left','100%');
        $('#menu-icon').show();
        $('.fa-times').hide();
    });

    $('.news').click(function(){
        
        var $newsContent=$(this).find('.news-content');
        if($newsContent.hasClass('open')){
            $newsContent.removeClass('open');
            $newsContent.slideUp();
    
        }else{
            $newsContent.addClass('open');
            $newsContent.slideDown();
        }
    });


});
