$('#submit_form_button').on('click', function () {
    let type_bien = $("#type_bien").val();
    let piece = $("#piece").val();
    let chambre = $("#chambre").val();
    let place = $("#place").val();
    let type = $("#type").val();
    let surface_min = $("#surface_min").val();
    let prix_max = $("#prix_max").val();

    if (type_bien != 0 && piece != 0 && chambre != 0 && place && type && surface_min && prix_max) {
        $("#submit_form").submit();
    }
});