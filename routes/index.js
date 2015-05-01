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

module.exports = router;
