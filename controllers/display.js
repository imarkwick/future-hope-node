module.exports.controller = function(app) {

	/* GET display items */
	app.get('/display', function(req, res) {
		res.render('display');
	// 	var db = req.db;
	// 	var collection = db.get('itemcollection');
	// 	var itemArray = []
	// 	var items = []
	// 	collection.find({},{},function(e,docs) {
	// 		var data = docs
	// 		console.log(data);
	// 		String.prototype.repeat = function(num) {
	// 	    return new Array(num + 1).join(this + ',');
	// 	  };		
	// 		data.forEach(function(item) {
	// 			if (typeof item.names === 'string')
	// 				item.names = [item.names];
	// 			itemArray.push( (item.item).repeat(item.names.length) );
	// 		})
	// 		itemArray.forEach(function(string) {
	// 			var last = string.length-1;
	// 			items.push(string.slice(0, last));
	// 		});
	// 		var images = items.join().split(',');
	// 		res.render('display', {
	// 			itemlist : docs,
	// 			images : images
	// 		});
	// 	});
	});
};
