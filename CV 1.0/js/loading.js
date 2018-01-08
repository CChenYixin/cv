NProgress.configure({ ease: 'ease', speed: 800 });
NProgress.configure({ showSpinner: false });

$(document).ready(
    NProgress.start()
);


window.onload = function(){
    NProgress.done();
};

/**
*API已弃用
$(window).load(
    NProgress.done()
);
*/
