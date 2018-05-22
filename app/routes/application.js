import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({

  model: function(){
    var blackDog = EmberObject.create({
      title: 'Black Dog',
      band: 'Led Zepellin',
      rating: 3
    });

    var yellowLedbetter = EmberObject.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    })

    var pretender = EmberObject.create({
      title: 'I wanna be to Sedated',
      band: 'The Ramones',
      rating: 2
    })

    return [blackDog,yellowLedbetter,pretender];
  }
});
