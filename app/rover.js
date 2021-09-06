'use strict';

var directions = {
	nord: {
		left: 'ouest',
		right: 'est',
		move: function() {
			this._y ++;
		}
	},
	sud: {
		left: 'est',
		right: 'ouest',
		move: function() {
			this._y --;
		}
	},
	est: {
		left: 'nord',
		right: 'sud',
		move: function() {
			this._x ++;
		}
	},
	ouest: {
		left: 'sud',
		right: 'nord',
		move: function() {
			this._x --;
		}
	}
};

/**
 * Un seul rover de mars
 * @param direction L'objet de direction auquel le rover fait face
 * @param x La coordonnée x du rover
 * @param y La coordonnée y du rover
 * @constructor
 */
function Rover(direction, x, y) {
	this._direction = direction;
	this._x = x;
	this._y = y;
}

Rover.prototype.turnLeft = function() {
	this._direction = directions[this._direction].left;
};

Rover.prototype.turnRight = function() {
	this._direction = directions[this._direction].right;
};

Rover.prototype.move = function() {
	directions[this._direction].move.call(this);
};

/**
 * Simuler un déplacement et renvoyer la position projetée
 * @returns {{x, y}}
 */
Rover.prototype.projectMove = function() {
	var x = this._x;
	var y = this._y;
	directions[this._direction].move.call(this);
	var projectedPosition = this.getPosition();
	this._x = x;
	this._y = y;
	return projectedPosition;
};

Rover.prototype.getDirection = function() {
	return this._direction;
};

Rover.prototype.getPosition = function() {
	return {
		x: this._x,
		y: this._y
	};
};

module.exports = Rover;