import Component from '@ember/component';
import { filterBy, setDiff } from '@ember/object/computed';

export default Component.extend({
  classNames: ['invite-success'],

  'data-test-rsvp-success': true,

  reset() {},

  attending: filterBy('invitation.guests', 'weddingRsvp', true),
  notAttending: setDiff('invitation.guests', 'attending'),
});
