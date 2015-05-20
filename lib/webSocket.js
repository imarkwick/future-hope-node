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

		socket.on('cricket message', function(msg) {
			io.emit('cricket message', msg);
		});

		socket.on('teacher1year message', function(msg) {
			io.emit('teacher1year message', msg);
		});

		socket.on('education6months message', function(msg) {
			io.emit('education6months message', msg);
		});

		socket.on('activities message', function(msg) {
			io.emit('activities message', msg);
		});

		socket.on('rugby message', function(msg) {
			io.emit('rugby message', msg);
		});

		socket.on('homeandeducation6month message', function(msg) {
			io.emit('homeandeducation6month message', msg);
		});

		socket.on('houseparent message', function(msg) {
			io.emit('houseparent message', msg);
		});

		socket.on('degree message', function(msg) {
			io.emit('degree message', msg);
		});

		socket.on('closeimg message', function(msg) {
			io.emit('closeimg message', msg);
		});

		socket.on('db message', function(msg) {
			io.emit('db message', msg);
		});

	});
};


