$(document).ready(function () {

    $('.main_btna, .main_btn, div.col-sm-7 > nav > ul > li:eq(1)').on('click', function () {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('button.close').on('click', function () {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    });
});