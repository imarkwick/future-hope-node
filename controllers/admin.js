module.exports.controller = function(app) {

	/* GET admin page */
	app.get('/admin', function(req, res) {
		var db = req.db;
		var collection = db.get('tablecollection');
		collection.find({},{},function(e,docs) {
			res.render('admin', {
				tablelist : docs
			})
		})
	});

	/* POST to add guest */
	app.post('/addguest', function(req, res) {
	var db = req.db;
	var tableNumber = req.body.tableno;
	var guests = req.body.names;
	var collection = db.get('tablecollection');
	collection.insert({
			"tableno" : tableNumber,
			"names" : guests
		}, function(err, doc) {
			if (err) {
				res.send("There was a problem adding information to the database");
			} else {
				res.location("admin");
				res.redirect("admin");
			}
		});
	});

}; 