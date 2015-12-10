$("input[type='checkbox']").change(function(){
    if($(this).is(":checked")){
        $(this).parent().parent().addClass("checked-div"); 
    }else{
        $(this).parent().parent().removeClass("checked-div");  
    }
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var tabId = $(this).attr('id').replace('tab-', '');
  $('.tab-content')
      .find('#' + tabId)
      .find('.form-group:nth(1)')
      .find('.form-control:nth(0)')[0].focus ();
});

$('#video-modal').on('shown.bs.modal', function () {
  $('a').find('iframe').focus();
});

$('#share-modal').on('shown.bs.modal', function () {
  $(this).find('input').focus();
});

$(document).ready(function(){
    $('.modal').each(function(){
        var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);

        });
    });

    $(window.location.hash.replace('#', '#tab-')).click();
});
