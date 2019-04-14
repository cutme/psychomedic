const Flickity = require('flickity');


document.addEventListener('DOMContentLoaded',function() {

    window.choicerCarousel = function() {

        let flkySpecialists,
            activeTab = choicer.getElementsByClassName('js-content')[0].getElementsByClassName('is-active')[0],
            specialists = activeTab.getElementsByClassName('js-specialists')[0],
            doctors = activeTab.getElementsByClassName('js-doctors')[0],
            isflkySpecialists = false, isflkyDoctors = false;

        const doctorsAll = document.getElementsByClassName('js-doctors');

        // Chose specialists

        const initSpecialists = function(el) {

            flkySpecialists = new Flickity( el, {
                arrowShape: '',
                cellAlign: 'left',
                freeScroll: true,
                friction: 0.5,
                pageDots: false,
                selectedAttraction: 0.1,
                wrapAround: true
            });
    
            flkySpecialists.on( 'staticClick', function( event, pointer, cellElement, cellIndex  ) {
                let target = cellElement.getAttribute('data-specialty');
                
                // Set active speciality
                specialists.getElementsByClassName('is-active')[0].classList.remove('is-active');
                cellElement.classList.add('is-active');

                
                // Show doctors of selected speciality                
                
                for (let i = 0; i < doctorsAll.length; i ++) {
                    doctorsAll[i].classList.remove('is-active');
                }
                
                if (document.getElementById(target)) { 
                    document.getElementById(target).classList.add('is-active');
                    initDoctors(document.getElementById(target));
                }
            });
            
            isflkySpecialists = true;
        };



        // Chose doctors

        const initDoctors = function(el) {

            flkyDoctors = new Flickity( el, {
                arrowShape: '',
                cellAlign: 'left',
                friction: 0.5,
                pageDots: false,
                selectedAttraction: 0.1,
            });
            
            isflkyDoctors = true;
        };


        setTimeout(function() {
            initSpecialists(specialists);            
        }, 1000);

        initDoctors(doctors);
        


        // Tabs

        const tabs = document.getElementById('tabs');

        const init = function() {
            const content = tabs.getElementsByClassName('js-content')[0],
                  contentItem = content.getElementsByClassName('js-tab'),
                  nav = tabs.getElementsByClassName('js-nav')[0],
                  navItem = nav.getElementsByClassName('js-tab');
    
            const showTab = function(idx) {
    
                for (let i = 0; i < contentItem.length; i ++) {
                    contentItem[i].classList.remove('is-active');                    
                }
                
                for (let i = 0; i < contentItem.length; i ++) {
                    if (i === idx) {
                        contentItem[i].classList.add('is-active');
                        
                        let tabs = content.getElementsByClassName('js-tab');
                        
                        for (j = 0; j < tabs.length; j++) {
                            if(tabs[j].classList.contains('is-active')) {
                               activeTab = tabs[j]; 
                               
                               specialists = activeTab.getElementsByClassName('js-specialists')[0];
                        
                               break;
                            }
                        }

                        break;
                    }
                }
                
                setTimeout(function() {
                    initSpecialists(specialists);
                }, 100);
                
                        
                let selectedSpecialization = specialists.getElementsByClassName('is-active')[0];
                let target = selectedSpecialization.getAttribute('data-specialty');
                
                for (let i = 0; i < doctorsAll.length; i ++) {
                    doctorsAll[i].classList.remove('is-active');
                }
                
                if (document.getElementById(target)) { 
                    document.getElementById(target).classList.add('is-active');
                    initDoctors(document.getElementById(target));
                } else {
                    console.log('no slider with doctors');
                }
                
                for (let j = 0; j < navItem.length; j ++) {
                    navItem[j].classList.remove('is-active');
                }
            }
    
            for (let i = 0; i < navItem.length; i ++) {
                navItem[i].addEventListener('click', function() {
        
                    showTab(cutme.Helpers.thisindex(this));                
                    this.classList.add('is-active');
                });
            }
        }
    
        tabs ? init() : false;
    };

    window.partnersCarousel = function() {
    
        const init = function() {
            flkyPartners = new Flickity( '#partners', {
                arrowShape: '',
                contain: true,
                freeScroll: true,
                friction: 0.5,
                pageDots: false,
                selectedAttraction: 0.1,
            });
        }
        
        setTimeout(function() {
            init();
        }, 100);
    };
    
    

}, false);