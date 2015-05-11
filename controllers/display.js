module.exports.controller = function(app, tables) {

	/* GET display items */
	app.get('/display', function(req, res) {
		var db = req.db;
		var collection = db.get('itemcollection');
		collection.find({},{},function(e,docs) {
			var images = tables.totalImages(docs);
			var imageArray = tables.imagesArray(images);
			res.render('display', { items : imageArray });
		});
	});
};
