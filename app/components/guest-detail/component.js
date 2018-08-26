import Component from '@ember/component';

export default Component.extend({
  classNames: ['guest-detail'],

  classNameBindings: ['name'],

  'data-test-guest-detail': true,

  canEditName: false
});
