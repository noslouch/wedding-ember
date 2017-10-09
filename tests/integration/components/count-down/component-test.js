import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('count-down', 'Integration | Component | count down', {
  integration: true
});

test('it renders', function(assert) {
  this.set('date', '2018-11-10T19:00-05:00');
  this.set('from', '2017-10-09 00:00-05:00')

  this.render(hbs`{{count-down from=from to=date}}`);

  assert.equal(this.$().text().trim(), 'in 397 days');
  
  this.set('from', '2017-11-10 00:00-05:00');
  
  assert.equal(this.$().text().trim(), 'in 1 year');
  
  this.set('from', '2017-11-11 00:00-05:00');
  
  assert.equal(this.$().text().trim(), 'in 364 days');
  
  this.set('from', '2018-11-09 00:00-5:00');
  assert.equal(this.$().text().trim(), 'Tomorrow!');
  
  this.set('from', '2018-11-10 00:00-5:00');
  assert.equal(this.$().text().trim(), 'Today at 7:00 PM!');
});
