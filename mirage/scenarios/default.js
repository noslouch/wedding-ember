export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('invitation', 10, 'basic');
  server.create('invitation', 'basic', {address: 'home'});

  console.log(server.schema.guests.all().models.mapBy('firstName')); // eslint-disable-line
}
