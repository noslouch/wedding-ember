import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | brunch-info', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{brunch-info}}`);

    await click('.brunch-info__trigger');

    assert.dom('.brunch-info__content').exists('pops up with brunch info!');
  });
});
