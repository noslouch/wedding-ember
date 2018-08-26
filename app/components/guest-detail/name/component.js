import Component from '@ember/component';

export default Component.extend({
  classNames: ['guest-name'],
  classNameBindings: ['isEditing:is-editing', 'guest.isPlusOne:is-plus-one'],

  edit() {
    if (this.guest.isPlusOne) {
      this.set('isEditing', true);
    }
  }
});
