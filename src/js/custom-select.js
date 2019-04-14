import customSelect from 'custom-select';
    
document.addEventListener('DOMContentLoaded',function() {
        
    const select = document.getElementsByTagName('select');

    const init = function() {

        const cstSel = customSelect(select);
        
        for (let i = 0; i < select.length; i ++) {
            cstSel[i].container.addEventListener('custom-select:open', (e) => { 
                e.target.parentNode.style.position = 'relative';
                e.target.parentNode.style.zIndex = '10';
            });
            
            cstSel[i].container.addEventListener('custom-select:close', (e) => { 
                e.target.parentNode.removeAttribute('style');
            });
        }
        
    };
            
    select ? init() : false;

}, false);