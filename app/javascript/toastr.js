import toastr from 'toastr';
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
// Display an info toast with no title
function grabNoticeText() {
    const noticeElement = $('.notice');
    if (noticeElement.length) {
        // show toastr with element text
        toastr.info(noticeElement.text());
        // delete the element
        noticeElement.remove();
    }
}

// Display an alert toast, with a title
function grabAlertText() {
    const alertElements = $('.alert_toast');
    alertElements.each(function() {
        debugger;
        // show toastr with element text
        toastr.error($(this).text());
        // delete the element
        $(this).remove();
    });
}

$(document).on("turbo:load", function() {
    grabNoticeText();
    grabAlertText();
});

// turbo event listener after a form submission
$(document).on("turbo:submit-end", function() {
    grabNoticeText();
    grabAlertText();
});