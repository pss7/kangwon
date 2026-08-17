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
  let subMenuOpen = false;

  $('#headerWrap .headerMenu > li').mouseover(function () {

    $('#headerWrap').addClass('shadow');
    $('#headerWrap .headerMenu > li').removeClass('active');
    $(this).addClass('active');

    const $subMenu = $(this).find('.subMenuWrap');

    if (!subMenuOpen) {
      $subMenu
        .stop(true, true)
        .slideDown(300);
      subMenuOpen = true;
    } else {
      $('.subMenuWrap').hide();
      $subMenu.show();
    }

  });

  $('#headerWrap').mouseleave(function () {
    $('#headerWrap').removeClass('shadow');
    $('.subMenuWrap')
      .stop(true, true)
      .slideUp(300);
    $('#headerWrap .headerMenu > li').removeClass('active');
    subMenuOpen = false;
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

