import { Factory, faker, trait } from 'ember-cli-mirage';

const trim = s => s.trim();

function addGuests(guestTrait) {
  return trait({
    afterCreate(invitation, server) {
      server.createList('guest', 2, { invitation }, guestTrait);
    }
  })
}

export default Factory.extend({
  address: () => `
    ${faker.name.prefix()} ${faker.name.findName()}
    ${faker.address.streetAddress()}
    ${faker.address.city()}, ${faker.address.state()}
    ${faker.address.zipCode()}
  `.split('\n').map(trim),

  plusOne: false,
  rehearsalDinner: false,
  musicPref: '',

  basic: addGuests(),

  bothAttending:    addGuests('attending'),
  bothNotAttending: addGuests('notAttending'),

  bothRehearsal: addGuests('attendingRehearsal'),
  bothBrunch:    addGuests('comingToBrunch'),
  bothAll:       addGuests('comingToItAll'),

  includePlusOne: trait({
    plusOne: true,
    afterCreate(invitation, server) {
      server.create('guest', { invitation }, 'guestOfAGuest');
    }
  })
});
