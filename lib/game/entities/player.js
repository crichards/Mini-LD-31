ig.module(
	'game.entities.player'
).requires(
	'game.entities.mob'
	, 'impact.entity'
).defines(function () {
EntityPlayer = EntityMob.extend({
	size: { x: 20, y: 22 }
	, type: ig.Entity.TYPE.A

	, animIdle: new ig.AnimationSheet( 'media/max_idle.png', 35, 35)
	, animRun: new ig.AnimationSheet( 'media/max_run.png', 35, 35)

	, init: function( x, y, settings ) {

	  	// movement animations
	  	this.addAnim( 'idle_down'		, this.animIdle, .16, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  1], false );
	 	this.addAnim( 'idle_up'			, this.animIdle,   1, [6], false );
	  	this.addAnim( 'idle_right'		, this.animIdle, .16, [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13], false );

	  	this.addAnim( 'run_down'		, this.animRun,  .16, [0,   1,  2,  3,  4, 5], false );
	  	this.addAnim( 'run_up'			, this.animRun,  .16, [6,   7,  8,  9, 10, 11], false );
	  	this.addAnim( 'run_right'		, this.animRun,  .16, [12, 13, 14, 15, 16, 17], false );


		this.parent( x, y, settings );
	}


	, update: function() {


	  	if (ig.input.pressed('down')) {
			this.vel.y += 50;
			this.vel.x = 0;
			this.direction = 'down';
			this.mode = 'run';
		}
	  	else if (ig.input.released('down')) {
			this.vel.y = 0;
			this.mode = 'idle';
		}
	  	else if (ig.input.pressed('up')) {
			this.vel.y -= 50;
			this.vel.x = 0;
			this.direction = 'up';
			this.mode = 'run';
		}
	  	else if (ig.input.released('up')) {
			this.vel.y = 0;
			this.mode = 'idle';
		}
	  	else if (ig.input.pressed('right')) {
			this.vel.x += 50;
			this.vel.y = 0;
			this.direction = 'right';
			this.mode = 'run';
		}
	  	else if (ig.input.released('right')) {
			this.vel.x = 0;
			this.mode = 'idle';
		}
	  	else if (ig.input.pressed('left')) {
			this.vel.x -= 50;
			this.vel.y = 0;
			this.direction = 'left';
			this.mode = 'run';
		}
	  	else if (ig.input.released('left')) {
			this.vel.x = 0;
			this.mode = 'idle';
		}


		this.parent();
	}


});

});