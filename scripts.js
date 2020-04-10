$("#yellow").click(() => {
    $(".content").css("background","yellow")
})

$("#green").click(() => {
    $(".content").css("background","green")
})

$("#blue").click(() => {
    $(".content").css("background","blue")
})

$("#gray").click(() => {
    $(".content").css("background","lightgray")
})

$("#setolor").click(() => {
    $(".content").css("background", document.getElementById("color").value)
})


