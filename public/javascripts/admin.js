$(document).ready(function() {
	
	var socket = io();

	$('#photo1').submit(function(e) {
		e.preventDefault();
		socket.emit('child message', 'Photo 1');
	});

	$('#photo2').submit(function(e) {
		e.preventDefault();
		socket.emit('tim message', 'Photo 2');
	});

	$('#photo3').submit(function(e) {
		e.preventDefault();
		socket.emit('school message', 'Photo 3');
	});

	$('#closephoto').submit(function(e) {
		e.preventDefault();
		socket.emit('closeimg message', 'Photo 1');
	});
});å