var dimensions = {
		width: 150,
		height: 150
	},
	fillPercent = 0.5;

exports.generate = function() {
	var i = 0, j,
		map = new Array(dimensions.height),
		wall = dimensions.width * dimensions.height,
		floor = 0,
		pos = { x: 0, y: 0 };

	for( ; i<dimensions.width; i++) {
		for(j = 0; j<dimensions.height; j++) {
			map[i][j] = 0;
		}
	}

	pos = exports.pickStart();
	map[pos.x][pos.y] = 1;
	++floor;
	while(floor/wall < fillPercent) {
		pos = exports.pickAdjacent();
		map[pos.x][pos.y] = 1;
		++floor;
	}

	return map;

};

exports.pickStart = function() {
	return {
		x: 0,
		y: 0
	};
};

exports.pickAdjacent = function(x,y) {
	return {
		x: 0,
		y: 0
	};
};