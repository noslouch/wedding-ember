import Component from '@ember/component';
import { inject } from '@ember/service';
import { get } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Component.extend({
  tagName: 'form',
  classNames: ['invite-detail'],

  'data-test-invitation-detail': true,

  store: inject(),

  init() {
    this._super(...arguments);
    if (this.invitation.plusOne) {
      let plusOne = this.invitation.guests.findBy('isPlusOne');
      if (!plusOne) {
        plusOne = this.store.createRecord('guest', {
          isPlusOne: true,
          invitation: this.invitation,
        });
      }
      this.set('plusOne', plusOne);
    }
  },

  submit(e) {
    e.preventDefault();
  },

  guests: sort('invitation.guests', function(a, b) {
    if (get(a, 'isPlusOne')) {
      return 1;
    } else if (get(b, 'isPlusOne')) {
      return -1;
    }
  }),

  send() {
    if (this.plusOne && !this.plusOne.firstName && !this.plusOne.lastName) {
      this.plusOne.set('invitation', null);
    }
    if (this.sendResponse) {
      this.sendResponse(this.invitation);
    }
  },

  newSearch() {}
});
