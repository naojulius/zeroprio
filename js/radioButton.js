var target = [$('#achat'), $('#location')];
target[0].click(function () {
    $(this).addClass('underlined-white').removeClass('underlined-gray');
    $(this).addClass('lato-bold').removeClass('lato-light');
    $('#location').addClass('lato-light').removeClass('lato-bold');
    target[1].addClass('underlined-gray').removeClass('underlined-white');
    $("#type").val("achat");
});
target[1].click(function () {
    $(this).addClass('underlined-white').removeClass('underlined-gray');
    $(this).addClass('lato-bold').removeClass('lato-light');
    $('#achat').addClass('lato-light').removeClass('lato-bold');
    target[0].addClass('underlined-gray').removeClass('underlined-white');
    $("#type").val("location");
});