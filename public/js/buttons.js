$(function () {
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax(`/api/update/${id}`, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
$(".eat-burger").on("click", function (event) {
    $.ajax("/api/cats", {
        type: "POST",
        data: newCat
    }).then(
        function () {
            console.log("created new cat");
            location.reload();
        }
    );
});
