export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.create('invitation', 'solo', {id: 'solo'});
  server.create('invitation', 'basic', {id: 'basic'});
  server.create('invitation', 'bothAttending', {id: 'attending'});
  server.create('invitation', 'bothBrunch', {id: 'brunch'});
  server.create('invitation', 'bothRehearsal', {id: 'rehearsal'});
  server.create('invitation', 'bothAll', {id: 'all'});
  server.create('invitation', 'includePlusOne', {id: 'with-plus-one'});
  server.create('invitation', 'plusOneInvite', {id: 'plus-one'});

  console.log(server.schema.guests.all().models.mapBy('firstName')); // eslint-disable-line
}
