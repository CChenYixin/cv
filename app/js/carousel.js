;(function(){
    var list = document.getElementById('list');


function animate(offset){
    var newLeft = parseInt(list.style.left) + offset;
    var time = 1000;//位移总时间
    var interval = 10;//位移间隔时间
    var speed = offset/(time/interval);//每次位移量

    function go(){
        if ( (speed <0 && parseInt(list.style.left) > newLeft)||(speed>0 &&parseInt(list.style.left) < newLeft) ){
            list.style.left = parseInt(list.style.left) + speed +'px';
            setTimeout(go,interval);

        }else{
            list.style.left = newLeft +'px';
            // if(newLeft > -400 ){
            //         list.style.left = -1600+ 'px';
            // }
            if(newLeft <-1200){
                    list.style.left = -400+ 'px';
            }
        }
    }
    go();
}

var timer;
function play() {
    clearInterval(timer);
    timer = setInterval(function () {
        animate(-400);
    }, 10000);
}

play();




})();

/*if ( (speed <0 && parseInt(list.style.left) > newLeft)||(speed>0 &&parseInt(list.style.left) < newLeft) ){
    list.style.left = parseInt(list.style.left)+speed+'px';
    setInterval(go,interval);
}else{
    animated=false;
    list.style.left = newLeft +'px';
    if(newLeft >-400){
            list.style.left = -2000+ 'px';
    }
        if(newLeft <-2000){
            list.style.left = -400+ 'px';
    }
}
go();
}*/
