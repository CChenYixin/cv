;(function(){

$('#weixin').click(function(){
    $('#float02').fadeIn(1000).show();
});


$('#close02').click(function(){
    $('#float02').fadeOut().hide();
});

$('#nav-li-weixin').click(function(){
    $('#float').fadeOut(1000).hide();
    $('#float02').fadeIn(1000).show();
});

})();
