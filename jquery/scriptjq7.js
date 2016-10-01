$(document).ready(function(){
    alert("Chegou aqui")
    $("span:eq(0)").click(function(){
        $("div").slideUp(2000);
    });
    $("span:eq(1)").click(function(){
        $("div").slideDown(2000);
    });
     $("span:eq(2)").click(function(){
        $("div").slideToggle(1000);
    });
});