document.addEventListener('DOMContentLoaded',function() {

    let cover = document.getElementById('cover');
    
    document.body.removeAttribute('style');
    document.body.classList.add('is-loaded');
    cover.remove();


    window.onload = function() {
    
        const choicer = document.getElementById('choicer');
        const partners = document.getElementById('partners');
            

        choicer ? window.choicerCarousel() : false;
        partners ? window.partnersCarousel() : false;
    
        
    }
        
}, false);