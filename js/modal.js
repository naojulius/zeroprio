$("#modal-show").on('click', function () {
    $("#log-in").modal();
    $('#sign-up').modal('close');
});
$("#contact").on('click', function () {
    $("#contact-box").modal();
});
$('#contact').on('hidden.bs.modal', function () {
    $(this).find('#contact-form').trigger('reset');
});

$("#modal-popup").on('click', function () {
    $("#sign-up").modal();
    $("#log-in").modal("toggle");
});

$("#modal-popup2").on('click', function () {
    $("#sign-up").modal();
});
$("#phone-button").on('click', function () {
    $("#phone-box").modal();
});

$('#log-in').on('hidden.bs.modal', function () {
    $(this).find('#login-form').trigger('reset');
});
$('#sign-up').on('hidden.bs.modal', function () {
    $(this).find('#signup-form').trigger('reset');
});

$('#abonnement').modal();


