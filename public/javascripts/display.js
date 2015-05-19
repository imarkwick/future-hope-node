$(document).ready(function() {
	new WOW().init();
	var socket = io();

	socket.emit('create', 'room1');

	socket.on('rugby message', function(msg) {
		$('#photo1').css("display", "block");
		$('#display').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('cricket message', function(msg) {
		$('#photo2').css("display", "block");
		$('#display').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('houseparents message', function(msg) {
		$('#photo3').css("display", "block");
		$('#display').css("opacity", ".3");
		$('#display-names').css("opacity", ".4");
		$('#thankyou').css("opacity", ".4");
		$('.socket-images').css("opacity", ".4");
	});

	socket.on('closeimg message', function(msg) {
		$('.futurehope').hide();
		$('#display').css("opacity", ".6");
		$('#display-names').css("opacity", "1");
		$('#thankyou').css("opacity", "1");
		$('.socket-images').css("opacity", "1");
	});

	socket.on('names message', function(msg) {
		var names = msg;
		$('#disp').append('<li id="names-list">' + msg + ',' + ("&nbsp;") + '</li>');
	});

	socket.on('chat message', function(msg) {
		var string = msg.substring(0, msg.length -1);
		var array = string.split(',');
		var display = document.getElementById('display');
		display.style.opacity = "0.6";

		array.forEach(function(image) {
		  function randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
      }
			var effect = randomFrom([' bounceIn', ' zoomIn', ' bounceIn', ' zoomIn']);
			var pic = '<img id="avatars" class="animated' + effect + '" height="80px" width="80px" src="images/' + image + '"/>';
			var bigPic = '<img id="avatars" class="animated' + effect + '" height="160px" width="160px" src="images/' + image + '"/>';
			if (image === 'Rugby.svg') {
		  	$('#display-rugby-messages').append(bigPic);
			// } else if (image === 'cricket.svg') {
			// 	$('#display-cricket-messages').append(bigPic);
			} else {
		  	$('#display-messages').append(pic);
		  };
	  });

		// var loadsofimg = document.getElementsByTagName('img');
		// if (loadsofimg.length > 200) {
		// 	$('#thankseveryone').show();
		// } else {
		// 	console.log("notyet");
		// }
	});
});