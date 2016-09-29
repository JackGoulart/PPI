$(document).ready(function () {
    alert("chegou até aqui")
    $("span:eq(0)").dblclick(function () {
        $("div").hide()
    })
    $("span:eq(1)").click(function () {
        $("div").show()
    })
    $("span:eq(2)").click(function () {
        $("div").toggle()
    })
})