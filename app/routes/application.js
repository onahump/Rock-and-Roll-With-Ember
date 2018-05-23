import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

   var Song = EmberObject.extend({
    title: '',
    band: '',
    ranking: 0
   });

export default Route.extend({
  model: function(){
    var blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zepellin',
      rating: 3
    });

    var yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    })

    var pretender = Song.create({
      title: 'I wanna be to Sedated',
      band: 'The Ramones',
      rating: 2
    })

    return [blackDog,yellowLedbetter,pretender];
  }
});
