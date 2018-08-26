import Component from '@ember/component';
import { reads } from '@ember/object/computed';

export default Component.extend({
  classNames: ['guest-checkbox'],

  'data-test-checkbox': reads('name'),

  click(e) {
    if (['INPUT', 'LABEL'].includes(e.target.tagName)) {
      this.set('touched', true);
    }
  }
});
