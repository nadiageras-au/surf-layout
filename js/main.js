$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows--left" src="images/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows " src="images/arrows-right.svg" alt="">',
        asNavFor: '.slider-dots'
        });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
        });


    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows--left" src="images/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows " src="images/arrows-right.svg" alt="">',
        asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false, 
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });
    

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows--left" src="images/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows" src="images/arrows-right.svg" alt="">',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    //Input add nights and persons "Sleep section"
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    }); // The end add nights and persons

    //Calc summ for resort
    // изначальный просчёт цены по умолчанию
    var parents = $(this).parents('.holder-slider');
    let summ = ($('.nights', parents).val() * $('.summ', parents).data('nights') + ($('.guests', parents).val() -1) * $('.summ', parents).data('guests')) - 1;
    
    $('.summ', parents).html('$' + summ);
    
    // изменение цены при клике для каждого слайда
    $('.quantity').on('click', function() {
        var parents = $(this).parents('.slick-current');
        let summ = ($('.nights', parents).val() * $('.summ', parents).data('nights') + ($('.guests', parents).val() -1) * $('.summ', parents).data('guests')) - 1;
    
        $('.summ', parents).html('$' + summ);
    });

    //features of surfboard
    $('.surfboard-feature__circle').on('click', function(){
      $(this).toggleClass('active');
    });
   
});