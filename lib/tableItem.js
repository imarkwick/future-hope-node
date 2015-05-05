function TableList() {};

TableList.prototype.find_names = function(collection, tablenumber) {
	var tables = db.get(collection);
	tables.find(
		{ tableno : tablenumber }, function(err, docs) {
			if(err) alert('There was a problem');
			console.log(data);
			done;
		}
	);
};

module.exports = TableList;

// tablecollection in futurehope database
// entries have - tableno & names
// -- want to find all names for single table number
// -- want to dislplay the above in form on volunteer p

