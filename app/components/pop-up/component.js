import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  classNames: ['pop-up'],

  calculatePosition(trigger, content) {
    let { top, left, height, width } = trigger.getBoundingClientRect();
    let { height: contentHeight, width: contentWidth } = content.getBoundingClientRect();
    let style = {
      top: window.pageYOffset + ( top - height - contentHeight - 10),
      left: left - ((contentWidth / 2) - (width / 2)),
    };

    return { style };
  }
});
