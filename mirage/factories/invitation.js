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
  address: () => `${faker.name.prefix()} ${faker.name.findName()}
    ${faker.address.streetAddress()}
    ${faker.address.city()}, ${faker.address.state()}
    ${faker.address.zipCode()}
  `.split('\n').map(trim).filter(s => s).join('\n'),

  plusOne: false,
  rehearsalDinner: false,
  musicPref: '',

  basic: addGuests(),

  bothAttending:    addGuests('attending'),
  bothNotAttending: addGuests('notAttending'),

  bothBrunch:    addGuests('comingToBrunch'),

  bothRehearsal: trait({
    rehearsalDinner: true,
    afterCreate(invitation, server) {
      server.createList('guest', 2, { invitation }, 'attendingRehearsal');
    }
  }),

  bothAll: trait({
    rehearsalDinner: true,
    afterCreate(invitation, server) {
      server.createList('guest', 2, { invitation }, 'comingToItAll');
    }
  }),

  plusOneInvite: trait({
    plusOne: true,
    afterCreate(invitation, server) {
      server.create('guest', { invitation });
    }
  }),

  includePlusOne: trait({
    plusOne: true,
    afterCreate(invitation, server) {
      server.create('guest', { invitation });
      server.create('guest', { invitation }, 'guestOfAGuest');
    }
  })
});
