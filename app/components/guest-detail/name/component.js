import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['guest-name'],
  classNameBindings: ['isEditing:is-editing', 'guest.isPlusOne:is-plus-one'],

  hasError: computed('needPlusOne', 'guest.{firstName,lastName}', function() {
    if (!this.guest) {
      return false;
    }
    let { firstName, lastName, isPlusOne } = this.guest;
    if ((!firstName && !lastName) && isPlusOne && this.needPlusOne) {
      return true;
    } else if (isPlusOne && (firstName && !lastName)) {
      return true;
    } else {
      return false;
    }
  }),

  edit() {
    if (this.guest.isPlusOne) {
      this.set('isEditing', true);
    }
  }
});
