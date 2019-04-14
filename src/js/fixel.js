import stickybits from 'stickybits';

document.addEventListener('DOMContentLoaded',function() {
    
    const init = function() {
        const stickybit = stickybits('#nav')
    };

    document.getElementById('nav') ? init() : false;

}, false);

