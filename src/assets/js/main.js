$(document).ready(function(){
    var $toggle  = $('.menu-sable'),
    $menuWrap = $('.menu-wrap')
    $toggle.on('click',function(){
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');


      })

      $('#mstrar_mas').click(function(){
        alert("sad");
          $('.flip-card-inner').css({
            "transform":"rotateY(180deg)"
          });
      })

      carousel();

  });

carousel = function () {
    // Control buttons
    $('.next').click(function () {
      $('.carousel').carousel('next');
      return false;
    });
    $('.prev').click(function () {
      $('.carousel').carousel('prev')

      return false;
    });

    // On carousel scroll
    $("#carouselExampleControls").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".flex-item").length;
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(
              ".flex-item").eq(i).appendTo(".carousel-inner");
          } else {
            $(".flex-item").eq(0).appendTo(".carousel-inner");
          }
        }
      }
    });
  }
