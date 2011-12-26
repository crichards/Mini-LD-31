ig.module(
	'game.entities.police'
).requires(
	'game.entities.mob'
).defines(function() {
EntityPolice = EntityMob.extend({
	size: { x: 35, y: 35 }

	, direction: 'left'
	, mode: 'run'
	, speed: 50
	, animRun: new ig.AnimationSheet( 'media/heracross.png', 45, 45 )

	, init: function( x, y, settings ) {
	  	// movement animation
		this.addAnim( 'idle_down'		, this.animRun, .16, [ 0,  1,  2, 1, 0], false );
	  	this.addAnim( 'idle_up'			, this.animRun, .16, [ 8,  9, 10, 9, 8], false );
	  	this.addAnim( 'idle_right'		, this.animRun, .16, [ 0,  1,  2, 1, 0], false );

	  	this.addAnim( 'run_down'		, this.animRun, .25, [ 4,  5,  6,  7], false );
	  	this.addAnim( 'run_up'			, this.animRun, .25, [12, 13, 14, 15], false );
	  	this.addAnim( 'run_right'		, this.animRun, .25, [ 4,  5,  6,  7], false );

	  	this.parent( x, y, settings );
	}

	, update: function() {
		var speed = this.speed
	  		, dir = this.direction
	  		;

	  	this.vel.x = 0;
	  	this.vel.y = 0;

	  	if ('left' == dir) {
			this.vel.x = 0 - speed;
		} else if ('right' == dir) {
			this.vel.x = speed;
		} else if ('up' == dir) {
			this.vel.y = 0 - speed;
		} else if ('down' == dir) {
			this.vel.y = speed;
		}


		this.parent();
	}
});
});