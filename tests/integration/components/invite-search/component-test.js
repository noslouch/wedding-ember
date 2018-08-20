import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click, focus, triggerKeyEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import test from 'ember-sinon-qunit/test-support/test';

module('Integration | Component | invite-search', function(hooks) {
  setupRenderingTest(hooks);

  test('searching', async function() {
    const EMAIL = 'foo@email.com';

    let store = this.owner.lookup('service:store');
    this.mock(store)
      .expects('query')
      .twice()
      .withArgs('invitation', {q: EMAIL})
      .resolves([]);

    await render(hbs`{{invite-search}}`);

    await fillIn('[data-test-invite-input]', EMAIL);
    await click('[data-test-invite-submit]');

    await focus('[data-test-invite-input]');
    await triggerKeyEvent('[data-test-invite-input]', 'keyup', 13);
  });

  test('selecting a result', async function(assert) {
    assert.expect(2);

    const RESULTS = [{
      address: 'Mr. Foo & Ms. Bar'
    }, {
      address: 'Mr. Johnny Boom Ba'
    }];
    const onSelect = result => assert.deepEqual(result, RESULTS[1]);

    this.setProperties({
      onSelect,
      results: RESULTS,
    });
    await render(hbs`{{invite-search results=results onSelect=onSelect}}`);

    assert.dom('[data-test-invite-result]').exists({count: 2});

    await click('[data-test-invite-result="1"]');
  });
});
