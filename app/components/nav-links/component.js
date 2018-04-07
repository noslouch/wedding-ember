import { computed } from '@ember/object';
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  fastboot: service(),
  
  tagName: 'nav',
  classNames: ['nav-links'],
  classNameBindings: ['gradientState', 'isOpen'],
  
  gradientState: computed('heroScroll', function() {
    let scrollState = this.get('heroScroll');
    switch(scrollState) {
      case 'pastTop':
        return 'show-gradient';
      case 'atTop':
        return false;
      case 'outOfView':
        return 'solid-background';
    }
  }),
  didUpdateAttrs() {
    if (this.get('fastboot.isFastBoot')) {
      return;
    }
    let isOpening = this.get('isOpen');
    if (isOpening) {
      document.body.classList.add('stop-scroll');
    } else {
      document.body.classList.remove('stop-scroll');
    }
  }
});
