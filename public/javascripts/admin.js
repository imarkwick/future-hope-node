$(document).ready(function() {
	
	var socket = io();

	$('#photo1').submit(function(e) {
		e.preventDefault();
		socket.emit('cricket message', 'Photo 1');
	});

	$('#photo2').submit(function(e) {
		e.preventDefault();
		socket.emit('teacher1year message', 'Photo 2');
	});

	$('#photo3').submit(function(e) {
		e.preventDefault();
		socket.emit('education6months message', 'Photo 3');
	});

	$('#photo4').submit(function(e) {
		e.preventDefault();
		socket.emit('activities message', 'Photo 4');
	});

	$('#photo5').submit(function(e) {
		e.preventDefault();
		socket.emit('rugby message', 'Photo 5');
	});

	$('#photo6').submit(function(e) {
		e.preventDefault();
		socket.emit('homeandeducation6month message', 'Photo 6');
	});
	$('#photo7').submit(function(e) {
		e.preventDefault();
		socket.emit('houseparent message', 'Photo 7');
	});

	$('#photo8').submit(function(e) {
		e.preventDefault();
		socket.emit('degree message', 'Photo 8');
	});

	$('#closephoto').submit(function(e) {
		e.preventDefault();
		socket.emit('closeimg message', 'Photo 1');
	});
});