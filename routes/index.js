var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET admin page to add names and see all guest list */
router.get('/admin', function(req, res) {
	var db = req.db;
	var collection = db.get('tablecollection');
	collection.find({},{},function(e,docs) {
		res.render('admin', {
			tablelist : docs
		})
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
			res.location("admin");
			res.redirect("admin");
		}
	});
});

/* GET volunteer chooses table */
router.get('/volunteer-table', function(req, res, tablenumber) {
	var number = 'yo';
	var table = req.body.tablenumber;
	res.render('volunteerTable', {
		number : number
	});
});

/* GET volunteer page for viewing table names */
router.get('/volunteer', function(req, res) {
	res.render('volunteer');
});

/* POST to add an auction item */
router.post('/add-to-display', function(req, res) {
	var db = req.db;
	var itemName = req.body.item;
	var guestNames = req.body.names;
	var collection = db.get('itemcollection');
	collection.insert({
		"item" : itemName,
		"names" : guestNames
	}, function(err, doc) {
		if (err) {
			res.send("There was a problem adding the information to the database.");
		} else {
			res.location("volunteer");
			res.redirect("volunteer");
		}
	})
});

/* GET display items */
router.get('/display', function(req, res) {
	var db = req.db;
	var collection = db.get('itemcollection');
	collection.find({},{},function(e,docs) {
		res.render('display', {
			itemlist : docs
		});
	});
});


module.exports = router;















