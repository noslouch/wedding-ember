import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('schedule');
  this.route('where-to-stay');
  this.route('people');
  this.route('registry');
  this.route('rsvp');
  this.route('directions');
});

export default Router;
