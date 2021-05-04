// <!-- Scripts -->
// <!--Scripts For NavigationBar Scrolling Effect-->


    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
            $('nav li a').addClass('color');
            $('.moblabel').addClass('color');
            $('.logo').addClass('color');
            $('.menu').addClass('color');
        }
        else {
            $('nav').removeClass('black');
            $('nav li a').removeClass('color');
            $('nav h1').removeClass('color');
            $('.logo').removeClass('color');
            $('.menu').removeClass('color');
        }
    });

// <!--Scripts For Navigation Bar Toggle-->

    $(document).ready(function () {
        $('.menu').click(function () {
            $('nav ul').toggleClass('actives');
        })
    })
