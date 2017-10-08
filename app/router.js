import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('schedule');
  this.route('direction');
  this.route('where-to-stay');
  this.route('people');
  this.route('registry');
  this.route('rsvp');
});

export default Router;
