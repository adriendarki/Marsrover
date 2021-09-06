'use strict';

var Rover = require('./rover');

describe('Rover', function() {
	it('inits avec les valeurs correctes', function() {
		var rover = new Rover('nord', 1, 2);
		expect(rover.getDirection()).toEqual('nord');
		expect(rover.getPosition()).toEqual({x: 1, y: 2});
	});

	it('tourne correctement', function() {
		var rover = new Rover('nord', 1, 2);
		rover.turnRight();
		expect(rover.getDirection()).toEqual('est');
		rover.turnLeft();
		expect(rover.getDirection()).toEqual('nord');
	});

	it('avance dans la bonne direction', function() {
		var rover = new Rover('sud', 1, 2);
		rover.move();
		expect(rover.getPosition()).toEqual({x: 1, y: 1});
	});

	it('projette une position de mouvement sans déplacer réellement le rover', function() {
		var rover = new Rover('est', 1, 2);
		expect(rover.projectMove()).toEqual({x: 2, y: 2});
		expect(rover.getPosition()).toEqual({x: 1, y: 2});
	});
});