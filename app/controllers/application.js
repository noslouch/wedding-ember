import Controller from 'ember-controller';
import { bind } from 'ember-runloop';
import { reads } from 'ember-computed';
import service from 'ember-service/inject';
import $ from 'jquery';

export default Controller.extend({
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),
  routes: [
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
      route: 'people',
      label: 'People'
    }, {
      route: 'registry',
      label: 'Registry'
    }, {
      route: 'rsvp',
      label: 'RSVP'
    }
  ],
  
  handler() {
    let heroImage = $('[class*=hero-image]')[0];
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
    window.removeEventListner('scroll', this.get('_boundHandler'));
  },
});
