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
    $("#submit-button").on("click", function (event) {
        var newBurger = $("#user-burger").val().trim();
        $("#user-burger").val("");
        $.ajax(`/api/insert/${newBurger}`, {
            type: "POST"
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
