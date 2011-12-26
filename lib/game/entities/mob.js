ig.module(
	'game.entities.mob'
).requires(
	'impact.entity'
).defines(function() {
EntityMob = ig.Entity.extend({
	collides: ig.Entity.COLLIDES.PASSIVE
	, type: ig.Entity.TYPE.B


	, direction: 'down'
	, mode: 'idle'


	, update: function() {

	  	if (this.currentAnim) {
			// left is just a flip of right
			if ('left' == this.direction) {
				this.currentAnim = this.anims[this.mode + '_right'];
				this.currentAnim.flip.x = true;
			} else {
				this.currentAnim = this.anims[this.mode + '_' + this.direction];
				this.currentAnim.flip.x = false;
			}
		}

		this.parent();
	}


	/**
	  * Override the addAnim to support multiple animation sheets
	  */
	, addAnim: function( name, sheet, frameTime, sequence, stop ) {
		var a = new ig.Animation( sheet, frameTime, sequence, stop );
	  	this.anims[name] = a;
	  	if (!this.currentAnim) {
			this.currentAnim = a;
		}

	  	return a;
	}
});

});