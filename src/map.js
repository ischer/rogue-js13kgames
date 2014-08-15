var dimensions = {
		width: 150,
		height: 150
	},
	map;

exports.createArray = function() {
	var i = 0;
	map = new Array(dimensions.width);
	for( ; i<dimensions.width; i++) {
		map[i] = new Array(dimensions.height);
	}

	return map;
};

exports.generate = function() {

};