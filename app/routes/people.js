import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      maids: [{
        name: 'Laura Esner',
        image1: '',
        image2: ''
      }, {
        name: 'Maya Bradford',
        image1: '',
        image2: ''
      }, {
        name: 'Caitlin Mae Burke',
        image1: '/assets/images/people/cait.jpg',
        image2: '/assets/images/people/cait2.jpg',
      }, {
        name: 'Allison Caldwell',
        image1: '',
        image2: ''
      }, {
        name: 'Bevin Cohen',
        image1: '',
        image2: ''
      }, {
        name: 'Katie Sachsenmaier',
        image1: '',
        image2: ''
      }],
      men: [{
        name: 'Brad Farberman',
        image1: '/assets/images/people/brad.jpg',
        image2: '/assets/images/people/brad2.jpg',
      }, {
        name: 'Joe Ammon',
        image1: '/assets/images/people/joe.jpg',
        image2: '/assets/images/people/joe2.jpg',
      }, {
        name: 'Dimitri Apostol',
        image1: '/assets/images/people/dimitri.jpg',
        image2: '/assets/images/people/dimitri2.jpg',
      }, {
        name: 'Michael Capristo',
        image1: '/assets/images/people/mike.jpg',
        image2: '/assets/images/people/mike2.jpg',
      }, {
        name: 'Matt Chaban',
        image1: '/assets/images/people/matt.jpg',
        image2: '/assets/images/people/matt2.jpg',
      }, {
        name: 'Gabriel Herrera',
        image1: '/assets/images/people/gabe.jpg',
        image2: '/assets/images/people/gabe2.jpg',
      }, {
        name: 'Konstantin Karmazin',
        image1: '/assets/images/people/kon.jpg',
        image2: '/assets/images/people/kon2.jpg',
      }, {
        name: 'Ian Lamb',
        image1: '/assets/images/people/ian.jpg',
        image2: '/assets/images/people/ian2.jpg',
      }]
    }
  }
});
