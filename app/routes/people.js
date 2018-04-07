import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      maids: [{
        name: 'Laura Esner',
        image1: '/assets/images/people/laura.jpg',
        image2: '/assets/images/people/laura2.jpg',
        
      }, {
        name: 'Maya Bradford',
        image1: '/assets/images/people/maya.jpg',
        image2: '/assets/images/people/maya2.jpg',
        bio: `Melissa and I met through work in 2013 and became instant friends, and over the next four years were sent to every major comic-con in North America together.`
      }, {
        name: 'Caitlin Mae Burke',
        image1: '/assets/images/people/cait.jpg',
        image2: '/assets/images/people/cait2.jpg',
        bio: `Caitlin and Melissa met at Vassar College, cemented their friendship over fried cheese in Prague, coparented a bamboo in the best ever Terrace Apartment, traveled all over the world together and wound up living only a few blocks apart in Carroll Gardens.`
      }, {
        name: 'Allison Caldwell',
        image1: '/assets/images/people/allison.jpg',
        image2: '/assets/images/people/allison2.jpg',
        bio: `Allison and Melissa (and Ernie) met at the very start of college, destined to become best woms on the first floor of Raymond over a shared love of frosted animal crackers and wintry walks. Since then, and many adventures later, Allison is overjoyed to know and love Brian, and to celebrate the wedding of this wonderful pair.`
      }, {
        name: 'Bevin Cohen',
        image1: '/assets/images/people/bevin.jpg',
        image2: '/assets/images/people/bevin2.jpg',
        bio: `I met Melissa in 1999 when a mutual friend suggested I invite her to my bat mitzvah.  Melissa and I haven't spoken since, but a mutual friend suggested she invite me to her wedding.`
      }, {
        name: 'Katie Sachsenmaier',
        image1: '/assets/images/people/katie.jpg',
        image2: '/assets/images/people/katie2.jpg',
        bio: `I can't remember exactly when Melissa and I met but I do remember her lost for hours looking for my home when we were 13. So glad she found it because since then its been non stop laughs and silliness that keep us feeling like we're still 13 everyday. :)`
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
