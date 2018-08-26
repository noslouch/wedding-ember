import Component from '@ember/component';
import { reads } from '@ember/object/computed';

export default Component.extend({
  classNames: ['guest-detail'],

  classNameBindings: ['name'],

  'data-test-guest-detail': true,
  'data-test-plus-one': reads('guest.isPlusOne'),

  canEditName: false
});
