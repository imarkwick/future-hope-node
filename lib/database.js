function Tables() {};

Tables.prototype.getNames = function(tableData) {
	var list = [];
	tableData.forEach(function(table) {
		list.push(table.names);
	});
	var array = list.join().split(',');
	return array;
};

module.exports = Tables;