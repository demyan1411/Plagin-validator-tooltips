
 $(document).ready(function() {

 	"use strict";


//Запуск модулей


	if($('popup').length) {
    Popups.init();
  }

  $('form').on('submit', function(e) {
      e.preventDefault();

      var $this = $(this);

      if (validateThis($this)) {
			     postFormData($this, function(data) {
    				if (data.status) {
    					Popups.open('#success');
    				} else {
    					Popups.open('#error');
    				}
  			});
  		}

    });
});
