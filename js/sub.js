$(function () {

  //달력
  $('.equipmentReservationWrap .dateBtn').click(function () {
    $('.equipmentReservationWrap .dateBtn').removeClass('active');
    $(this).addClass('active');
  });

  
  /* 감염유래시료 여부 */
  $('input[name="infectiousSample"]').change(function () {

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






});