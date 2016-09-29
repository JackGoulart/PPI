$(document).ready(function(){
    alert("chegou até aqui");
    $("span:eq(0)").click(function(){
        $("div").fadeOut();
    });
    $("span:eq(1)").click(function(){
        $("div").fadeIn();
    });
    $("span:eq(2)").click(function(){
        $("div").fadeTo(1000, 0.5);
    });
});