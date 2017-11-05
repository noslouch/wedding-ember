import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      maids: [{
        name: 'Laura Esner',
        key: '',
      }, {
        name: 'Maya Bradford',
        key: '',
      }, {
        name: 'Caitlin Mae Burke',
        key: 'cait',
      }, {
        name: 'Allison Caldwell',
        key: ''
      }, {
        name: 'Bevin Cohen',
        key: '',
      }, {
        name: 'Katie Sachsenmaier',
        key: '',
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
