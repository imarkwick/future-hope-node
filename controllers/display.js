module.exports.controller = function(app) {

	/* GET display items */
	app.get('/display', function(req, res) {
		res.render('display');
	});
};
