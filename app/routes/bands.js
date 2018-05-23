import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

var Band = EmberObject.extend({
	name:'',
});

export default Route.extend({

	model: function(){
		var ledZepellin = Band.create({ name: 'Led Zepellin'});
		var pearlJam = Band.create({ name: 'Pearl Jam'});
		var fooFighters = Band.create({ name: 'Foo Fighters'});
	
		return [ledZepellin,pearlJam,fooFighters];
	}

});
