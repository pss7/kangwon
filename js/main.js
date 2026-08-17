$(function () {

  //로드
  $(window).load(function () {
    $('#visualWrap').addClass('active');
  });

  //예약현황 버튼
  $('#reserveWrap .reserveDateBtn').click(function () {
    $('#reserveWrap .reserveDateBtn').removeClass('active');
    $(this).addClass('active');
  });

  // 스크롤 시 해당 영역 active 클래스 적용
  $(window).scroll(function () {

    const scrollPos = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.sectionWrap').each(function () {

      const $this = $(this);

      if ($this.hasClass('active')) {
        return;
      }

      const elementOffset = $this.offset().top;

      if (scrollPos + windowHeight * 0.6 > elementOffset) {
        $this.addClass('active');
      }

    });

  });

  //연구소개
  $('#researchWrap .slick').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    prevArrow: $('#researchWrap .prev'),
    nextArrow: $('#researchWrap .next'),
  });

  //모아보기
  $('#contentWrap .slick').slick({
    autoplay: false,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
    variableWidth: true
  });



});