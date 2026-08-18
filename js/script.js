$(function () {

  /* 공통 - 탭 */
  $('.tabWrap .tabContent').hide();
  $('.tabWrap .tabContent:first-child').show();

  $('.tabWrap .tabBtn').click(function () {
    let $tabWrap = $(this).closest('.tabWrap');
    let index = $(this).index();

    $tabWrap.find('.tabBtn')
      .removeClass('active')
      .attr('aria-selected', 'false');

    $(this)
      .addClass('active')
      .attr('aria-selected', 'true');

    $tabWrap.find('.tabContent').hide();
    $tabWrap.find('.tabContent').eq(index).show();
  });

  //공통 - 드롭다운
  $('.toggleBtn').click(function (e) {
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    if ($(this).parent().hasClass('active')) {
      $(this).attr('aria-expanded', 'true');
    } else {
      $(this).attr('aria-expanded', 'false');
    }
  });

  //관련사이트 토글
  $('.footerSiteBtn').click(function () {
    if ($(this).attr('aria-expanded') === 'false') {
      $(this).attr('aria-label', '관련사이트 열기');
    } else {
      $(this).attr('aria-label', '관련사이트 닫기');
    }
  });

  //모바일메뉴 토글
  $('.mobileMenuBtn').click(function () {
    if ($(this).attr('aria-expanded') === 'false') {
      $(this).attr('aria-label', '모바일메뉴 열기');
    } else {
      $(this).attr('aria-label', '모바일메뉴 닫기');
    }
  });

  /* 서브메뉴 */
  $('#headerWrap .headerMenu > li').mouseenter(function () {
    $('#headerWrap').addClass('shadow');
    $('#headerWrap .headerMenu > li').removeClass('active');
    $(this).addClass('active');
    $('#headerWrap .subMenuWrap')
      .not($(this).find('.subMenuWrap'))
      .stop(true, true)
      .slideUp(300);
    $(this).find('.subMenuWrap')
      .stop(true, true)
      .slideDown(300);
  });

  $('#headerWrap').mouseleave(function () {
    $('#headerWrap').removeClass('shadow');
    $('#headerWrap .subMenuWrap')
      .stop(true, true)
      .slideUp(300);
    $('#headerWrap .headerMenu > li')
      .removeClass('active');
  });

  /* 서브메뉴 키보드 포커스 */
  $('#headerWrap .headerMenu > li').focusin(function () {
    $('#headerWrap').addClass('shadow');
    $('#headerWrap .headerMenu > li').removeClass('active');
    $(this).addClass('active');
    $('.subMenuWrap')
      .stop(true, true)
      .hide();
    $(this)
      .find('.subMenuWrap')
      .stop(true, true)
      .slideDown(300);
  });

  /* 헤더 영역에서 포커스가 벗어났을 때 */
  $('#headerWrap').focusout(function () {
    if (!$(this).find(':focus').length) {
      $('#headerWrap').removeClass('shadow');
      $('.subMenuWrap')
        .stop(true, true)
        .slideUp(300);
      $('#headerWrap .headerMenu > li').removeClass('active');
    }
  });

  //헤더 스크롤
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('#headerWrap').addClass('scroll');
    } else {
      $('#headerWrap').removeClass('scroll');
    }
  })

  //헤더 메뉴 클릭 시 부드럽게 이동
  $('#headerWrap .link').click(function (e) {
    const target = $(this).attr('href');

    if (target == '#') return;

    e.preventDefault();

    const headerHeight = $(window).width() <= 1199 ? 20 : 80;

    const position = $(target).offset().top - headerHeight;

    $('html, body').animate({
      scrollTop: position
    }, 600);
  });

  /* 상단으로 이동 */
  $('#aside .asideTopBtn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    },
      500);
    return false;
  });

  /* 스크롤 시 top 버튼 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#aside').fadeIn();
    } else {
      $('#aside').fadeOut();
    }
  });

});

