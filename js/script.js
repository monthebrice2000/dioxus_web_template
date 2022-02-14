
$(".first").click(function() {
    $(".feeds .content").removeClass("second");
    $(".feeds .content").removeClass("third");
    $(".feeds .content").addClass("first");
    $(".feeds .nav .item").removeClass("active");
    $(".feeds .nav .first").addClass("active");
})

$(".second").click(function() {
    $(".feeds .content").removeClass("first");
    $(".feeds .content").removeClass("third");
    $(".feeds .content").addClass("second");
    $(".feeds .nav .item").removeClass("active");
    $(".feeds .nav .second").addClass("active");
})

$(".third").click(function() {
    $(".feeds .content").removeClass("second");
    $(".feeds .content").removeClass("first");
    $(".feeds .content").addClass("third");
    $(".feeds .nav .item").removeClass("active");
    $(".feeds .nav .third").addClass("active");
})
