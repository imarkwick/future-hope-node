/* SOCKET */

module.exports = function(io) {

	io.on('connection', function(socket) {
		console.log('User connected');
		socket.on('disconnect', function() {
			console.log('User disconnected');
		});
	});

	io.on('connection', function(socket) {
		socket.on('chat message', function(msg) {
			console.log('message is...' + msg);
		});
	});

};
