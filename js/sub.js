$(function () {

  //달력
  $('.equipmentReservationWrap .dateBtn').click(function () {
    $('.equipmentReservationWrap .dateBtn').removeClass('active');
    $(this).addClass('active');
  });

  /* 감염 유래 시료 여부 */
  $('input[name="infectiousSample"]').change(function () {
    $('.sampleTypeBox').toggleClass(
      'active',
      $('#infectiousSampleYes').is(':checked')
    );

    if ($('#infectiousSampleYes').is(':checked')) {
      $('#infectiousSampleType')
        .prop('disabled', false)
        .prop('required', true)
        .focus();
    } else {
      $('#infectiousSampleType')
        .prop('disabled', true)
        .prop('required', false)
        .val('');
    }
  });

  //파일
  $('#businessRegistrationFile').change(function () {
    const fileName = this.files.length
      ? this.files[0].name
      : '사업자등록증을 업로드해 주세요';

    $(this)
      .siblings('.fileUploadLabel')
      .find('.fileUploadText')
      .text(fileName);
  });




});