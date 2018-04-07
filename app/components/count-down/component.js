import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

function getDiffs(from, to, _diffs) {
  let diffs = {};
  _diffs.forEach(d =>  diffs[d] = Math.abs(from.diff(to, d, d !== 'days')));
  return diffs;
}

const DEFAULT_INTERVALS = ['year', 'months', 'weeks', 'days']

export default Component.extend({
  tagName: 'span',
  classNames: ['count-down'],

  init() {
    this._super(...arguments);
    this.set('intervals', this.intervals || DEFAULT_INTERVALS);
  },
  formatted: computed('from', 'to', function() {
    let intervals = this.get('intervals');
    let from = this.get('from') ? moment(this.get('from')) : moment();
    let to = moment(this.get('to'));
    let formatted = to.calendar(from, {
      nextDay() {
        return '[Tomorrow!]';
      },
      sameDay() {
        return '[Today at 7:00 PM!]';
      },
      sameElse(from) {
        let diffs = getDiffs(from, this, intervals);
        let unit, value;
        if (diffs.days === 365) {
          unit = 'year';
          value = 1;
        } else if (diffs.months === 6) {
          unit = 'months';
          value = 6;
        } else if (diffs.weeks === 8) {
          unit = 'weeks'
          value = 8;
        } else {
          unit = 'days';
          value = diffs.days;
        }
        return `[in ${value} ${unit}]`;
      }
    });
    return formatted;
  })
});
