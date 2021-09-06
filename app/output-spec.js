'use strict';

var output = require('./output');
var Rover = require('./rover');

describe('output', function() {
	it('outputs bon', function() {
		var rovers = [];
		rovers.push(new Rover('nord', 1, 1));
		rovers.push(new Rover('est', 2, 2));
		expect(output(rovers)).toEqual('1 1 N\n2 2 E\n');
	});
});