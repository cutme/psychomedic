 (function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	thisindex: thisindex
        };
    };
    
    const thisindex = function(elm) {
        let nodes = elm.parentNode.childNodes, node, i = 0, count = 0;
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;            
        }
        return count;
    };
    


    cutme.Helpers = new Helpers();


    

}(window, document, window.cutme = window.cutme  || {}));