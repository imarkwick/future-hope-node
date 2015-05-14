$(document).ready(function() {
	var socket = io();
	
	$('#photo').submit(function(e) {
		e.preventDefault();
		socket.emit('img message', 'Photo 1');
	});

	$('#closephoto').submit(function(e) {
		e.preventDefault();
		socket.emit('closeimg message', 'Photo 1');
	});
});å