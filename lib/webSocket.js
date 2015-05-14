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

		socket.on('img message', function(msg) {
			io.emit('img message', msg);
		});
		socket.on('closeimg message', function(msg) {
			io.emit('closeimg message', msg);
		});
	});
};


