$("#append").on("click", function () {
    $(".task5 ul").append("<li>last</li>");
});

$("#prepend").on("click", function () {
    $(".task5 ul").prepend("<li>first</li>");
});

$("#remove").on("click", function () {
    $(".task5 ul li").last().remove();
});



$("#imgChange").on("click", function(){
    $(".task6 img").attr("src", "../photos/image2.png");
})

$("#linkChange").on("click", function(){
    $(".task6 a").attr("href", "https://github.com/").text("GitHub");
})



$("#inputText").on("input", function () {
    $(".textOutput").text("Text: " + $(this).val());
});

$("#inputEmail").on("input", function () {
    $(".emailOutput").text("email: " + $(this).val());
});