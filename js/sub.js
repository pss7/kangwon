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

  /* 파일 업로드 */
  $('.fileUploadBox input[type="file"]').change(function () {
    const $fileUploadText = $(this)
      .siblings('.fileUploadLabel')
      .find('.fileUploadText');

    const fileName = this.files.length
      ? this.files[0].name
      : $fileUploadText.data('placeholder');

    $fileUploadText.text(fileName);
  });



});