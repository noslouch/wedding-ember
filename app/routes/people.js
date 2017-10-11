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
        image: ''
      }, {
        name: 'Allison Caldwell',
        image: ''
      }, {
        name: 'Jenny Hartman',
        image: ''
      }],
      men: [{
        name: 'Brad Farberman',
        image: ''
      }, {
        name: 'Dimitri Apostol',
        image: '',
      }, {
        name: 'Konstantin Karmazin',
        image: '',
      }, {
        name: 'Michael Capristo',
        image: ''
      }, {
        name: 'Gabriel Herrera',
        image: '',
      }, {
        name: 'Ian Lamb',
        image: '',
      }, {
        name: 'Joe Ammon',
        image: ''
      }, {
        name: 'Matt Chaban',
        image: ''
      }]
    }
  }
});
