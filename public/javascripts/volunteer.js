$(document).ready(function() {
  var socket = io();
  $('#mela-auction').submit(function(e) {
  	e.preventDefault();
  	var item = $('#mela-item').val();
  	var names = $('#guest-list').val();
  	if (item && names) {
  		$.ajax({
	  		type: "POST",
	  		url: "/add-to-display",
	  		data: $('form#mela-auction').serialize(),
	  		success: function() {
	  			console.log('saved to db');
	  		}
	  	});
	  	var total = Object.keys(names).length
	  	socket.emit('chat message', item.repeat(total));
	  	socket.emit('names message', names);
	  	console.log(item.repeat(total));
	  	console.log(names);
	  	$('#mela-item').val('AUCTION ITEM');
	  	$('#guest-list').val('');
	  	$('#success').show();
	  	$('#error').hide();
	  	$("html, body").animate({ scrollTop: 0 }, 200);
  	} else {
  		$('#success').hide();
  		$('#error').show();
		 	$("html, body").animate({ scrollTop: 0 }, 200);
  	};
  	return false;
  });
	$('#mela-item').click(function() {
		$('#success').hide();
	});
});