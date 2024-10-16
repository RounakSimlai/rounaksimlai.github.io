AOS.init({
  duration: 800,
  easing: "slide",
});

(function ($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // Burger Menu
  $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
    event.preventDefault();

    if ($("#ftco-nav").is(":visible")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
    event.preventDefault();

    var href = $.attr(this, "href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 70,
      },
      500,
      function () {}
    );
  });
  $(document).on("click", '#ftco-footer-nav a[href^="#"]', function (event) {
    event.preventDefault();

    var href = $.attr(this, "href");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 70,
      },
      500,
      function () {}
    );
  });

  $(".home-slider").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: false,
    dots: false,
    pullDrag: false,
    touchDrag: false,
    mouseDrag: false,
    autoplayHoverPause: false,
    items: 1,
  });

  // scroll
  $(window).scroll(function () {
    var $w = $(this),
      st = $w.scrollTop(),
      navbar = $(".ftco_navbar"),
      sd = $(".js-scroll-wrap");

    if (st > 150) {
      if (!navbar.hasClass("scrolled")) {
        navbar.addClass("scrolled");
      }
    }
    if (st < 150) {
      if (navbar.hasClass("scrolled")) {
        navbar.removeClass("scrolled sleep");
      }
    }
    if (st > 350) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }

      if (sd.length > 0) {
        sd.addClass("sleep");
      }
    }
    if (st < 350) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
      if (sd.length > 0) {
        sd.removeClass("sleep");
      }
    }
  });

  $("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(
    function (direction) {
      if (
        direction === "down" &&
        !$(this.element).hasClass("ftco-animated")
      ) {
        var comma_separator_number_step =
          $.animateNumber.numberStepFactories.separator(",");
        $(".number").each(function () {
          var $this = $(this),
            num = $this.data("number");
          console.log(num);
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step,
            },
            7000
          );
        });
      }
    },
    { offset: "95%" }
  );

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".nav-link").click(function () {
    $("#ftco-nav").collapse("hide");
  });
})(jQuery);
