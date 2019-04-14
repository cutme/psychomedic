import SimpleBar from 'simplebar';
require('../../node_modules/simplebar/dist/simplebar.css');

document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementById('locations');
    
    
    const init = function() {

          new SimpleBar(el, {
              autoHide: false
          });
                  
        
    };
    
    
    el ? init() : false;


}, false);
