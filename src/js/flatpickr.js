
const flatpickr = require("flatpickr");
require('../../node_modules/flatpickr/dist/flatpickr.css');

import rangePlugin from '../../node_modules/flatpickr/dist/plugins/rangePlugin' ;

//require('../../node_modules/flatpickr/dist/plugins/rangePlugin');


//import rangePlugin from '../../node_modules/flatpickr/dist/plugins/rangePlugin';

//import '../../node_modules/flatpickr/dist/plugins/rangePlugin';

//            "plugins": [new rangePlugin({ input: "#date_end"})],


document.addEventListener('DOMContentLoaded',function() {

    const date_start = document.getElementById('dateStart');
    
    const init = function() {
    
        const date_end = document.getElementById('dateEnd'),
              time_start = document.getElementById('timeStart'),
              time_end = document.getElementById('timeEnd');
        
        if(document.documentElement.classList.contains('desktop')) {
        
            const dateStartPicker = flatpickr(date_start, {
                minDate: "today",
                plugins: [new rangePlugin({ input: date_end })],
                onChange: function(selectedDates, dateStr, instance) {
                    this.element.classList.add('no-icon');
                    date_end.classList.add('no-icon');
                }
            });

        } else {
            
            const dateStartPicker = flatpickr(date_start, {
                minDate: "today"
            });
        }
        
        const dateEndPicker = flatpickr(date_end, {
            minDate: "today",            
        });
        
        const timeStartPicker = flatpickr(time_start, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true,
            minTime: Date.now(),
            onOpen: function(selectedDates, dateStr, instance) {
                this.element.classList.add('no-icon');
            }
        });
        
        const timeEndPicker = flatpickr(time_end, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true,
            minTime: Date.now(),
            onOpen: function(selectedDates, dateStr, instance) {
                this.element.classList.add('no-icon');
            }
        });
        
    };
    
    
    date_start ? init() : false;
        
    

}, false);
