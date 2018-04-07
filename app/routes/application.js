import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition() {
      window.scrollTo(0, 0);
      this.controller.set('openNav', false);
    }
  }
})
