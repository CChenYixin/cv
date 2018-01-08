(function(){

var t = new TimelineMax();
$('#menu').click(function(){

    t.staggerTo('.nav-li',0.2,{opacity:1},-0.5);
});

$('#close').click(function(){
    t.staggerTo('.nav-li',0.1,{opacity:0},0);
});

})();
