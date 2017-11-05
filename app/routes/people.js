import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      maids: [{
        name: 'Laura Esner',
        image: '',
      }, {
        name: 'Katie Sachsenmeier Wang',
        image: '',
      }, {
        name: 'Bevin Cohen',
        image: '',
      }, {
        name: 'Maya Bradford',
        image: '',
      }, {
        name: 'Caitlin Mae Burke',
        key: 'cait',
      }, {
        name: 'Allison Caldwell',
        image: ''
      }],
      men: [{
        name: 'Brad Farberman',
        key: 'brad'
      }, {
        name: 'Joe Ammon',
        key: 'joe'
      }, {
        name: 'Dimitri Apostol',
        key: 'dimitri'
      }, {
        name: 'Michael Capristo',
        key: 'mike'
      }, {
        name: 'Matt Chaban',
        key: 'matt'
      }, {
        name: 'Gabriel Herrera',
        key: 'gabe'
      }, {
        name: 'Konstantin Karmazin',
        key: 'kon'
      }, {
        name: 'Ian Lamb',
        key: 'ian'
      }]
    }
  }
});
