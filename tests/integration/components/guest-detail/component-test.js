import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | guest-detail', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const GUEST = {
      firstName: 'Foo',
      lastName: 'Bar',
    };
    this.set('guest', GUEST);
    await render(hbs`
      {{#guest-detail guest=guest as |row|}}
        {{row.name}}

        {{row.wedding}}
        {{row.brunch}}
        {{row.rehearsal}}
      {{/guest-detail}}
    `);

    assert.dom('[data-test-guest-detail]').exists();

    assert.dom('[data-test-guest-name]').hasText('Foo Bar', 'combines first and last');
    assert.dom('[data-test-checkbox=weddingRsvp]').exists();
    assert.dom('[data-test-checkbox=sundayBrunch]').exists();
    assert.dom('[data-test-checkbox=rehearsalRsvp]').exists();
  });

  test('updates guest responses', async function(assert) {
    const GUEST = {
      firstName: 'Foo',
      lastName: 'Bar',
    };
    this.set('guest', GUEST);
    await render(hbs`
      {{#guest-detail guest=guest as |row|}}
        {{row.name}}

        {{row.wedding}}
        {{row.brunch}}
        {{row.rehearsal}}
      {{/guest-detail}}
    `);

    assert.dom('[data-test-checkbox=weddingRsvp] input').isNotChecked();
    assert.dom('[data-test-checkbox=rehearsalRsvp] input').isNotChecked();
    assert.dom('[data-test-checkbox=sundayBrunch] input').isNotChecked();

    await click('[data-test-checkbox=weddingRsvp] input');
    await click('[data-test-checkbox=rehearsalRsvp] input');
    await click('[data-test-checkbox=sundayBrunch] input');

    assert.dom('[data-test-checkbox=weddingRsvp] input').isChecked();
    assert.dom('[data-test-checkbox=rehearsalRsvp] input').isChecked();
    assert.dom('[data-test-checkbox=sundayBrunch] input').isChecked();

    assert.ok(GUEST.weddingRsvp, 'should set the wedding rsvp value');
    assert.ok(GUEST.rehearsalRsvp, 'should set the rehearsal rsvp value');
    assert.ok(GUEST.sundayBrunch, 'should set the sunday brunch rsvp value');
  });

  test('can start prefilled', async function(assert) {
    const GUEST = {
      firstName: 'Foo',
      lastName: 'Bar',
      weddingRsvp: true,
      sundayBrunch: true,
    };
    this.set('guest', GUEST);
    await render(hbs`
      {{#guest-detail guest=guest as |row|}}
        {{row.name}}

        {{row.wedding}}
        {{row.brunch}}
      {{/guest-detail}}
    `);

    assert.dom('[data-test-checkbox=weddingRsvp] input').isChecked();
    assert.dom('[data-test-checkbox=sundayBrunch] input').isChecked();
  });
});
