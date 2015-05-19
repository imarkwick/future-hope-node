$(document).ready(function() {

  var socket = io();

  $('#mela-auction').submit(function(e) {
  	e.preventDefault();
  	var item = $('#mela-item').val();
  	var names = $('#guest-list').val();
  	var total = Object.keys(names).length;
  	var auctionItem = item.slice(0, -4);
  	$('#selection').append('<li>Item: ' + auctionItem + '</li>');
  	$('#selection').append('<li>Total guests giving: ' + total + '</li>');
  	$('#vol-body').css('opacity', '.4');
  	$('#confirmation').show();
  	$("html, body").animate({ scrollTop: 0 }, 200);
  });

  $('#return').click(function(e) {
  	e.preventDefault();
  	$('#confirmation').hide();
  	$('#vol-body').css('opacity', '1');
  });

  // $('#mela-auction').submit(function(e) {
  // 	e.preventDefault();
  // 	var item = $('#mela-item').val();
  // 	var names = $('#guest-list').val();
  // 	if (item && names) {
		// 	if (item === 'Auction Item') {
		// 		$('#error').show();
		// 		$("html, body").animate({ scrollTop: 0 }, 200);
		// 	} else {
	 //  		$.ajax({
		//   		type: "POST",
		//   		url: "/add-to-display",
		//   		data: $('form#mela-auction').serialize(),
		//   		success: function() {
		//   			console.log('saved to db');
		//   		}
		//   	});
		//   	var total = Object.keys(names).length
		//   	socket.emit('chat message', item.repeat(total));
		//   	socket.emit('names message', names);
		//   	$('#mela-item').val('AUCTION ITEM');
		//   	$('#guest-list').val('');
		//   	$('#success').show();
		//   	$('#error').hide();
		//   	$("html, body").animate({ scrollTop: 0 }, 200);
		//   };
  // 	} else {
  // 		$('#success').hide();
  // 		$('#error').show();
		//  	$("html, body").animate({ scrollTop: 0 }, 200);
  // 	};
  // 	return false;
  // });

	$('#mela-item').click(function() {
		$('#success').hide();
	});
});