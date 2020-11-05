let eyes = $(".ghost i")
let position = eyes.offset()
$(document).on("mousemove", function (a) {
    a.pageX < position.left && eyes.removeClass("right").addClass("left");
    a.pageX > position.left + 50 && eyes.removeClass("left").addClass("right");
    a.pageX > position.left - 40 && a.pageX < position.left + 80 && eyes.removeClass("left right");
    a.pageY < position.top - 25 && eyes.removeClass("bottom").addClass("top");
    a.pageY > position.top + 25 && eyes.removeClass("top").addClass("bottom");
    a.pageY > position.top - 10 && a.pageY < position.top + 10 && eyes.removeClass("top bottom");
})