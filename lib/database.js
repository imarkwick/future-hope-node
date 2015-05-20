function Tables() {};

Tables.prototype.getNames = function(tableData) {
	var list = [];
	tableData.forEach(function(table) {
		list.push(table.names);
	});
	var array = list.join().split(',');
	return array;
};

String.prototype.repeat = function(num) {
  return new Array(num + 1).join(this + ',');
};

Tables.prototype.totalImages = function(itemData) {
	var itemArray = [];
	itemData.forEach(function(item) {
		if (typeof item.names === 'string') {
			item.names = [item.names];
		};
		if (item.names !== null && item.item !== null) {
			itemArray.push( (item.item).repeat(item.names.length) );
		};
	});
	return itemArray;
};

Tables.prototype.imagesArray = function(images) {
	var items = [];
	images.forEach(function(string) {
		var last = string.length - 1;
		items.push(string.slice(0, last));
	});
	return items.join().split(',');;
};

module.exports = Tables;
