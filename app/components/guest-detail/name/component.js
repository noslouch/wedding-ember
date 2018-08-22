import Component from '@ember/component';

export default Component.extend({
  classNames: ['guest-name'],
  classNameBindings: ['canEditName:is-editing'],
});
