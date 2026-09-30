$(function () {

  /* 공통 - 탭 */
  $('.tabWrap .tabContent').hide();
  $('.tabWrap .tabContent:first-child').show();

  $('.tabWrap .tabBtn').click(function () {
    $(this).closest('.tabWrap').find('.tabBtn')
      .removeClass('active')
      .attr('aria-selected', 'false');
    $(this)
      .addClass('active')
      .attr('aria-selected', 'true');
    $(this).closest('.tabWrap').find('.tabContent')
      .hide()
      .eq($(this).index())
      .show();
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
      $('body').removeClass('mobileMenuOpen');
    } else {
      $(this).attr('aria-label', '모바일메뉴 닫기');
      $('body').addClass('mobileMenuOpen');
    }
  });

  /* 모바일 2차 메뉴 */
  $('.mobileMenu > li > h2 > a').click(function (e) {

    if ($(this).parent().next('.mobileSubMenu02').length) {
      e.preventDefault();
      $(this).closest('li').siblings().removeClass('active').children('.mobileSubMenu02').stop(true, true).slideUp(300);
      $(this).closest('li').siblings().find('.mobileSubMenu03').stop(true, true).slideUp(300);
      $(this).closest('li').siblings().find('li').removeClass('active');
      $(this).closest('li').toggleClass('active');
      $(this).parent().next('.mobileSubMenu02').stop(true, true).slideToggle(300);
      $(this).attr('aria-expanded', $(this).closest('li').hasClass('active') ? 'true' : 'false');
    }

  });

  /* 모바일 3차 메뉴 */
  $('.mobileSubMenu02 > li > h3 > a').click(function (e) {

    if ($(this).parent().next('.mobileSubMenu03').length) {
      e.preventDefault();
      $(this).closest('li').siblings().removeClass('active').children('.mobileSubMenu03').stop(true, true).slideUp(300);
      $(this).closest('li').toggleClass('active');
      $(this).parent().next('.mobileSubMenu03').stop(true, true).slideToggle(300);
      $(this).attr('aria-expanded', $(this).closest('li').hasClass('active') ? 'true' : 'false');
    }

  });

  /* 서브메뉴 */
  $('#headerWrap .headerMenu > li').mouseenter(function () {

    if ($(this).hasClass('active')) {
      return;
    }

    $('#headerWrap .headerMenu > li').removeClass('active');
    $(this).addClass('active');

    if ($('body').hasClass('subMenuOpen')) {
      $('#headerWrap .headerMenu > li')
        .find('.subMenuWrap').hide();
      $(this).find('.subMenuWrap').show();
    } else {
      $(this)
        .find('.subMenuWrap').slideDown(300);
    }

    $('body').addClass('subMenuOpen');

  });

  $('#headerWrap').mouseleave(function () {

    $('#headerWrap .headerMenu > li').removeClass('active');

    $('#headerWrap .headerMenu > li')
      .find('.subMenuWrap:visible')
      .stop(true, true)
      .slideUp(300);

    $('body').removeClass('subMenuOpen');

  });

  /* 서브메뉴 키보드 포커스 */
  $('#headerWrap .headerMenu > li').focusin(function () {

    if ($(this).hasClass('active')) {
      return;
    }

    $('#headerWrap .headerMenu > li').removeClass('active');
    $(this).addClass('active');

    if ($('body').hasClass('subMenuOpen')) {

      $('#headerWrap .subMenuWrap')
        .stop(true, true)
        .hide();

      $(this).find('.subMenuWrap').show();

    } else {

      $(this)
        .find('.subMenuWrap')
        .stop(true, true)
        .slideDown(300);

    }

    $('body').addClass('subMenuOpen');

  });

  /* 헤더 영역에서 포커스가 벗어났을 때 */
  $('#headerWrap').focusout(function (event) {

    if (!event.relatedTarget || !this.contains(event.relatedTarget)) {

      $('#headerWrap .subMenuWrap:visible')
        .stop(true, true)
        .slideUp(300);

      $('#headerWrap .headerMenu > li').removeClass('active');
      $('body').removeClass('subMenuOpen');

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

