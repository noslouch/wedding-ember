import Route from 'ember-route';

export default Route.extend({
  actions: {
    willTransition() {
      window.scrollTo(0, 0);
    }
  }
})
