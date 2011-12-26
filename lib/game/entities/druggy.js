ig.module(
	'game.entities.druggy'
).requires(
	'game.entities.mob'
).defines(function() {
EntityDruggy = EntityMob.extend({
	size: { x: 35, y: 35 }
	, type: ig.Entity.TYPE.B

	, animIdle: new ig.AnimationSheet( 'media/koffing.png', 45, 45 )

	, init: function( x, y, settings ) {
	  	// movement animations
		this.addAnim( 'idle_down'	, this.animIdle, 1, [3], false );
		this.addAnim( 'idle_up'		, this.animIdle, 1, [3], false );
		this.addAnim( 'idle_right'	, this.animIdle, 1, [3], false );

		this.addAnim( 'run_down'	, this.animIdle, 1, [3], false );
		this.addAnim( 'run_up'		, this.animIdle, 1, [3], false );
		this.addAnim( 'run_right'	, this.animIdle, 1, [3], false );

	  	this.parent( x, y, settings );
	}
});
});