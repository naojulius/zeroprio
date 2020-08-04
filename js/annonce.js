var nombrePage = $(".annonces-content").length;

showPage = function (pagination) {
    if (pagination < 0 || pagination >= nombrePage) return;

    $(".annonces-content").hide().eq(pagination).show();
    $("#pagin li").removeClass("active").eq(pagination).addClass("active");
    // $('#pagination li[1]').addClass("active");
}

// Go to Left
$(".prev").click(function () {
    showPage($("#pagin ul .active").index() - 1);
});

// Go to Right
$(".next").click(function () {
    showPage($("#pagin ul .active").index() + 1);
});

$("#pagin nav ul li button").click(function (e) {
    e.preventDefault();
    showPage($(this).parent().index());
});
$(".first-pagin-link-button").addClass("disabled");

showPage(0)

$(".dropdown>button").on("mouseleave", function () {
    let buttonPosition = $(this).attr("button-position");
    $('.dropdown-line').removeClass("dropdown-container-red-line");
    switch (buttonPosition) {
        case "drop-1":
            $('.maison').addClass("dropdown-container-red-line");
            break;
        case "drop-2":
            $('.localisation').addClass("dropdown-container-red-line");
            break;
        case "drop-3":
            $('.piece').addClass("dropdown-container-red-line");
            break;
        case "drop-4":
            $('.chambre').addClass("dropdown-container-red-line");
            break;
        case "drop-5":
            $('.prix').addClass("dropdown-container-red-line");
            break;
        case "drop-6":
            $('.surface').addClass("dropdown-container-red-line");
            break;
        case "drop-7":
            $('.plus-critere').addClass("dropdown-container-red-line");
            break;
    }
});

$(".dropdown>button").on("mouseenter", function () {
    $('.dropdown>button').removeClass('dropdown-active-legend');
    $('.dropdown-line').removeClass("dropdown-container-red-line");
    $(this).addClass('dropdown-active-legend');
    let buttonPosition = $(this).attr("button-position");
    switch (buttonPosition) {
        case "drop-1":
            $('.maison').addClass("dropdown-container-red-line");
            break;
        case "drop-2":
            $('.localisation').addClass("dropdown-container-red-line");
            break;
        case "drop-3":
            $('.piece').addClass("dropdown-container-red-line");
            break;
        case "drop-4":
            $('.chambre').addClass("dropdown-container-red-line");
            break;
        case "drop-5":
            $('.prix').addClass("dropdown-container-red-line");
            break;
        case "drop-6":
            $('.surface').addClass("dropdown-container-red-line");
            break;
        case "drop-7":
            $('.plus-critere').addClass("dropdown-container-red-line");
            break;
    }
});
$(".dropdown>button").on("click", function () {

    $('.dropdown>button').removeClass('dropdown-active-legend');
    $('.dropdown-line').removeClass("dropdown-container-red-line");
    $(this).addClass('dropdown-active-legend');
    let buttonPosition = $(this).attr("button-position");
    switch (buttonPosition) {
        case "drop-1":
            $('.maison').addClass("dropdown-container-red-line");
            break;
        case "drop-2":
            $('.localisation').addClass("dropdown-container-red-line");
            break;
        case "drop-3":
            $('.piece').addClass("dropdown-container-red-line");
            break;
        case "drop-4":
            $('.chambre').addClass("dropdown-container-red-line");
            break;
        case "drop-5":
            $('.prix').addClass("dropdown-container-red-line");
            break;
        case "drop-6":
            $('.surface').addClass("dropdown-container-red-line");
            break;
        case "drop-7":
            $('.plus-critere').addClass("dropdown-container-red-line");
            break;
    }
});

