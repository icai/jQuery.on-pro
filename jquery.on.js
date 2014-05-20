
/**
 *  The MIT License (MIT)
 *  @license https://github.com/icai/jQuery.on-pro 
 *  @author icai
 *  @description jQuery.on(event) support.
 *  
 */

(function($) {
	var originalON = $.fn.on;
	$.fn.on = function(types){
      	if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).on(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler);
                return this;
		}else{
			originalON.apply(this,arguments);
		}
	}
})(jQuery);