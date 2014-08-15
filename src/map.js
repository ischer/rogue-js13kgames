var dimensions = {
		width: 150,
		height: 150
	},
	fillPercent = 0.5,
	getRandomInt = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	};

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
		pos = exports.pickAdjacent(pos);
		map[pos.x][pos.y] = 1;
		++floor;
	}

	return map;

};

exports.pickStart = function() {
	return {
		x: getRandomInt(1,150),
		y: getRandomInt(1,150)
	};
};

exports.pickAdjacent = function(pos) {
	var can = {
		n: pos.y-1 > -1,
		s: pos.y+1 < dimensions.y+1,
		e: pos.x+1 < dimensions.x+1,
		w: pos.x-1 > -1
	};
	return {
		x: 0,
		y: 0
	};
};