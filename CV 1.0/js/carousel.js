;(function(){
    var list = document.getElementById('list');
    var timer = null;
    var animated =false;





function animate(offset){
    animated= true;
    var newLeft = parseInt(list.style.left) + offset;
    var time = 400;//位移总时间
    var interval = 20;//位移间隔时间
    var speed = offset/(time/interval);//每次位移量





    function go(){

        if ( (speed < 0 && parseInt(list.style.left) > newLeft) || (speed >0 && parseInt(list.style.left) < newLeft) ){
            list.style.left = parseInt(list.style.left) + speed +'px';
            setTimeout(go,interval);
        }else{
            animated = false;
            list.style.left = newLeft +'px';
            if(newLeft > -400 ){
                    list.style.left = -1600+ 'px';
            }
            if(newLeft <-1200){
                    list.style.left = -400+ 'px';
            }
        }

    }
    go();


}

function play() {

    clearInterval (timer);
    timer = setInterval(function () {
        if(!animated){
            animate(-400);
        }
    }, 10000);
}

play();


})();
