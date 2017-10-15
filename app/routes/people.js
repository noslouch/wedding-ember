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
        image: '/assets/images/people/brad.jpg'
      }, {
        name: 'Joe Ammon',
        image: '/assets/images/people/joe.jpg'
      }, {
        name: 'Dimitri Apostol',
        image: '/assets/images/people/dimitri.jpg',
      }, {
        name: 'Michael Capristo',
        image: '/assets/images/people/mike.jpg'
      }, {
        name: 'Matt Chaban',
        image: '/assets/images/people/matt.jpg'
      }, {
        name: 'Gabriel Herrera',
        image: '/assets/images/people/gabe.jpg',
      }, {
        name: 'Konstantin Karmazin',
        image: '/assets/images/people/kon.jpg',
      }, {
        name: 'Ian Lamb',
        image: '/assets/images/people/ian.jpg',
      }]
    }
  }
});
