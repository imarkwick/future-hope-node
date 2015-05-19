/* SOCKET */

module.exports = function(io) {

	io.on('connection', function(socket) {
		console.log('User connected');
		
		socket.on('disconnect', function() {
			console.log('User disconnected');
		});

		socket.on('create', function(room) {
			socket.join(room);
			console.log('joined new room');
		});

		socket.on('chat message', function(msg) {
			io.emit('chat message', msg);
		});

		socket.on('names message', function(msg) {
			io.emit('names message', msg);
		});

		socket.on('rugby message', function(msg) {
			io.emit('rugby message', msg);
		});

		socket.on('cricket message', function(msg) {
			io.emit('cricket message', msg);
		});

		socket.on('houseparents message', function(msg) {
			io.emit('houseparents message', msg);
		});

		socket.on('closeimg message', function(msg) {
			io.emit('closeimg message', msg);
		});
	});
};


