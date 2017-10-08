import Controller from 'ember-controller';

export default Controller.extend({
  routes: [{
    route: 'index',
    label: 'Home'
  }, {
    route: 'schedule',
    label: 'Schedule'
  }, {
    route: 'where-to-stay',
    label: 'Where to Stay'
  }, {
    route: 'people',
    label: 'People'
  }, {
    route: 'registry',
    label: 'Registry'
  }, {
    route: 'rsvp',
    label: 'RSVP'
  }]
});
