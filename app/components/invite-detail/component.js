import Component from '@ember/component';
import { inject } from '@ember/service';

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

  send() {
    if (this.sendResponse) {
      this.sendResponse(this.invitation);
    }
  }
});
