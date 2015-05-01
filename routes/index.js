var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET table names for volunteer */
router.get('/volunteer', function(req, res) {
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.find({},{},function(e,docs) {
		res.render('volunteer', {
			tablelist : docs
		})
	})
});

/* GET admin page for adding to table names */
router.get('/admin', function(req, res) {
	res.render('admin', {
		title: 'Add guests to a table'
	})
});

/* POST to add guest */
router.post('/addguest', function(req, res) {
	var db = req.db;
	var tableNumber = req.body.tableno;
	var guests = req.body.names;
	var collection = db.get('tablecollection');

	collection.insert({
		"tableno" : tableNumber,
		"names" : guests
	}, function(err, doc) {
		if (err) {
			res.send("There was a problem add information to the database");
		} else {
			res.location("volunteer");
			res.redirect("volunteer");
		}
	});
});

module.exports = router;
