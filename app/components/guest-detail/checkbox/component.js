import Component from '@ember/component';
import { reads } from '@ember/object/computed';

export default Component.extend({
  classNames: ['guest-checkbox'],

  'data-test-checkbox': reads('name'),

  click() {
    this.set('touched', true);
  }
});
