import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    if (id) {
      return this.store.findRecord('invitation', id);
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('rsvp').set('invitation', model);
  },
})
