jquery.on-pro
==============

jquery.on(event),So that you can pass `event` argument to rebind the unbind-event.Just write less do more.

##usage


**on(event)**
    
	$(function() {
		$('button').on('click',function(e){
			var evt = e;

			$().off(e);
			setTimeout(function(){
				$().on(evt);
			},20000);
		})
	});

see [jQuery.fn.on](http://api.jquery.com/on/ "on api") api

	


---

The MIT License (MIT)

Copyright (c) 2014 icai