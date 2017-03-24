NProgress.configure({ ease: 'ease', speed: 800 });
NProgress.configure({ showSpinner: false });

$(document).ready(
    NProgress.start()
);


$(window).load(
    NProgress.done()
);
