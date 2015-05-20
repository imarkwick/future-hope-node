$(document).ready(function() {
	new WOW().init();
	var socket = io();

	socket.emit('create', 'room1');

	socket.on('cricket message', function(msg) {
		$('#photo1').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('teacher1year message', function(msg) {
		$('#photo2').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('education6months message', function(msg) {
		$('#photo3').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

		socket.on('activities message', function(msg) {
		$('#photo4').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('rugby message', function(msg) {
		$('#photo5').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('homeandeducation6month message', function(msg) {
		$('#photo6').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

		socket.on('houseparent message', function(msg) {
		$('#photo7').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('degree message', function(msg) {
		$('#photo8').css("display", "block");
		$('#wholepage').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('closeimg message', function(msg) {
		$('.futurehope').hide();
		$('#wholepage').css("opacity", ".6");
		$('#display-names').css("opacity", "1");
		$('#thankyou').css("opacity", "1");
		$('.socket-images').css("opacity", "1");
	});

	socket.on('db message', function(msg) {
		$('#database-images').show();
	})

	socket.on('names message', function(msg) {
		var names = msg;
		$('#disp').append('<li id="names-list">' + msg + ',' + ("&nbsp;") + '</li>');
	});

	socket.on('chat message', function(msg) {
		var string = msg.substring(0, msg.length -1);
		var array = string.split(',');
		var display = document.getElementById('wholepage');
		display.style.opacity = "0.6";

		array.forEach(function(image) {
		  function randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
      }
			var effect = randomFrom([' bounceIn', ' zoomIn', ' bounceIn', ' zoomIn']);
			var pic = '<img id="avatars" class="animated' + effect + '" opacity="1" height="80px" width="80px" src="images/' + image + '"/>';
			var bigPic = '<img id="avatars" class="animated' + effect + '" height="160px" width="160px" src="images/' + image + '"/>';
			if (image === 'rugby.svg') {
		  	$('#display-rugby-messages').append(bigPic);
			} else if (image === 'cricket.svg') {
				$('#display-cricket-messages').append(bigPic);
			} else {
		  	$('#display-messages').append(pic);
		  };
	  });
	});
});