import Ember from 'ember';
import computed from 'ember-computed';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['nav-links'],
  classNameBindings: ['gradientState'],
  
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
  })
});
