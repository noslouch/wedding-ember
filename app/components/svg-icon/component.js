import Component from 'ember-component';
import computed from 'ember-computed';

const SvgIcon = Component.extend({
  tagName: '',
  svgPath: computed('icon', function() {
    let icon = this.icon;
    return icon ? `components/icons/${icon}` : false
  })
});

SvgIcon.reopenClass({
  positionalParams: ['icon']
});

export default SvgIcon;
