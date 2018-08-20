import { Factory, faker, trait } from 'ember-cli-mirage';

export default Factory.extend({
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  email: () => faker.internet.email(),

  isPlusOne: false,
  weddingRsvp: null,
  rehearsalRsvp: null,
  sundayBrunch: null,

  attending: trait({ weddingRsvp: true }),
  notAttending: trait({ weddingRsvp: false }),

  attendingRehearsal: trait({ rehearsalRsvp: true, weddingRsvp: true }),
  comingToBrunch: trait({ sundayBrunch: true, weddingRsvp: true }),
  comingToItAll: trait({ rehearsalRsvp: true,  sundayBrunch: true, weddingRsvp: true }),

  guestOfAGuest: trait({ isPluseOne: true }),
});
