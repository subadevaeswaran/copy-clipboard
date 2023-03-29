$(document).ready(function(){
$(".cpy-btn").click(function(){
    $("#text").select();
    document.execCommand("copy");
})
});