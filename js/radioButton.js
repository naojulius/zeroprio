var target = [$('#achat'), $('#location')];
target[0].click(function () {
    $(this).addClass('underlined-white').removeClass('underlined-gray');
    target[1].addClass('underlined-gray').removeClass('underlined-white');
    $("#type").val("achat");
});
target[1].click(function () {
    $(this).addClass('underlined-white').removeClass('underlined-gray');
    target[0].addClass('underlined-gray').removeClass('underlined-white');
    $("#type").val("location");
});