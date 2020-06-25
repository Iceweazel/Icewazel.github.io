$(document).ready(function(){

    // hide #back-top first
    $("#myBtn").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#myBtn').fadeIn();
            } else {
                $('#myBtn').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#myBtn').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    });

    });
