ig.module(
	'game.entities.mover'
).requires(
	'impact.entity'
).defines(function() {
EntityMover = ig.Entity.extend({
	_wmDrawBox: true
	, _wmBoxColor: 'orange'
	, _wmScalable: true
	, size: { x: 45, y: 45 }
	, type: ig.Entity.TYPE.A
	, checkAgainst: ig.Entity.TYPE.B



	, check: function( other ) {
	  	var i = null
	  		, target = null
	  		, dir = 'direction_' + other.direction
	  		;


	  	for (i in this.target) {
			target = this.target[i];

			if (target == other.name) {
				if (this[dir]) {
					other.direction = this[dir];
				}
			}
		}

	}

});
});