const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
import ScrollToPlugin from 'gsap/ScrollToPlugin';
const plugins = [ ScrollToPlugin ];

document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementsByClassName('js-hamburger')[0];
    
    const init = function() {
    
        let ww = window.innerWidth;
                
        const checkWindowWidth = function() {
            ww = window.innerWidth;
            
            if (ww > 1024) {
                hideMenu();
            }
        };
    
        const nav = document.getElementsByClassName('js-nav-content')[0],
              li = nav.getElementsByTagName('li'),
              parent = document.getElementById('nav').getElementsByTagName('li');  
        
        const hideMenu = function() {
            
            enableBodyScroll(document.getElementsByClassName('js-menu')[0]);
            nav.classList.remove('is-visible');
            el.classList.remove('is-active');
            
            let parent = nav.getElementsByClassName('js-parent');
            
            for (let i = 0; i < parent.length; i ++) {
                parent[i].classList.remove('is-active');
            }
        };
    
        const showMenu = function(e) {  

            // Menu is open
            if (e.currentTarget.classList.contains('is-active')) {
                
                hideMenu();
                
            } else {
                
                disableBodyScroll(document.getElementsByClassName('js-menu')[0]);
                
                
                let windowPos = window.pageYOffset || document.documentElement.scrollTop;
                
                if(windowPos < 120) {                
                    TweenLite.to(window, 1, {
            			scrollTo: {
            				y: 120,
            				autoKill: false
            			},
            			onComplete: function() {},
            			ease: Power1.easeOut
            		});
        		}
                
                nav.classList.add('is-visible');
                el.classList.add('is-active');
                
            }

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        }
        
        const submenu = function(e) {
        
            if (ww <= 1024) {
                let item = e.currentTarget;
               
                e.stopPropagation();
                
                if (item.classList.contains('js-parent')) {
                    if (item.classList.contains('is-active')) {
                        item.classList.remove('is-active');
                    } else {
                        item.classList.add('is-active');
                    }
                } else {
                    let url = item.getElementsByTagName('a')[0].getAttribute('href');
                    window.open(url, '_self');
                    hideMenu();
                }

                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }
        }
        
        
        for (let j = 0; j < parent.length; j++) {
            parent[j].addEventListener('click', submenu);
        }

        el.addEventListener('click', showMenu);
     
     
        // Hide menu on ESC
        
        document.addEventListener('keydown', function(evt) {
           // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });

       
        window.addEventListener('resize', checkWindowWidth);
    }
    
    el ? init() : false;
    
    
    
}, false);
