import Controller from '@ember/controller';
import { bind } from '@ember/runloop';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';

const ROUTES = [
  {
    route: 'index',
    label: 'Home'
  }, {
    route: 'schedule',
    label: 'Schedule'
  }, {
    route: 'directions',
    label: 'Directions'
  }, {
    route: 'where-to-stay',
    label: 'Where to Stay'
  }, {
    route: 'faq',
    label: 'FAQ'
  }, {
    route: 'people',
    label: 'People'
  }, {
    url: 'https://registry.theknot.com/melissa-esner-brian-whitton-november-2018-ny/22528407',
    label: 'Registry'
  }, {
    route: 'rsvp',
    label: 'RSVP'
  }
];


export default Controller.extend({
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),

  handler() {
    let heroImage = document.querySelector('[class*=hero-image]');
    if (!heroImage) {
      return;
    }
    let { top, bottom } = heroImage.getBoundingClientRect();
    if (bottom < 0) {
      this.set('heroScroll', 'outOfView');
    } else if (top < 0) {
      this.set('heroScroll', 'pastTop');
    } else if (top >= 0) {
      this.set('heroScroll', 'atTop');
    }
  },

  init() {
    this._super(...arguments);
    this.set('routes', ROUTES);
    if (this.get('isFastBoot')) {
      return;
    }
    this.set('_boundHandler', bind(this, 'handler'));
    window.addEventListener('scroll', this.get('_boundHandler'));
    this.handler();
  },
  willDestroy() {
    this._super(...arguments);
    if (this.get('isFastBoot')) {
      return;
    }
    window.removeEventListener('scroll', this.get('_boundHandler'));
  },
});
