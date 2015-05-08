module.exports.controller = function(app) {

	/* GET volunteer chooses table */
	app.get('/volunteer-table', function(req, res) {
		res.render('volunteerTable');
	});

	/* POST tablenumber to volunteer page in session */
	app.post('/tablenumber', function(req, res){
		var sess = req.session;
		var table = req.body.tablenumber;
		sess.table = table;
		req.session.save(function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("save");
			};
		});
		res.location("volunteer");
		res.redirect("volunteer");
	});
};