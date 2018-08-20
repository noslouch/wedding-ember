import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | invite-detail', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    const INVITATION = {
      address: '123 Main street',
      guests: [{
        firstName: 'Foo',
        lastName: 'Bar'
      }, {
        firstName: 'Biza',
        lastName: 'Baza'
      }]
    };

    this.set('invitation', INVITATION);

    await render(hbs`{{invite-detail invitation=invitation}}`);

    assert.dom('[data-test-invitation-detail]').exists();
    assert.dom('[data-test-guest-detail]').exists({count: 2});

    assert.dom('[data-test-checkbox=rehearsalRsvp]').doesNotExist('rehearsal input does not render unless invitation says so');
    assert.dom('[data-test-plusone]').doesNotExist('plus one input does not exist unless invitation says so');

    this.set('invitation.rehearsalDinner', true);
    assert.dom('[data-test-checkbox=rehearsalRsvp]').exists();
  });

  test('plus ones', async function(assert) {
    const INVITATION = {
      address: '123 Main street',
      plusOne: true,
      guests: [{
        firstName: 'Foo',
        lastName: 'Bar'
      }]
    };
    const PLUS_ONE = {
      firstName: 'Booza',
      lastName: 'Bombooza',
      isPlusOne: true
    };

    this.set('invitation', INVITATION);

    await render(hbs`{{invite-detail invitation=invitation}}`);

    assert.dom('[data-test-plusone]').exists('provides a plus one area if one does not exist');

    INVITATION.guests.pushObject(PLUS_ONE);
    await render(hbs`{{invite-detail invitation=invitation}}`);

    assert.dom('.invite-detail__guests [data-test-guest-detail]').exists({count: 1}, 'only primary guests are in the top section');
    assert.dom('[data-test-plusone] [data-test-guest-name]').hasText('Booza Bombooza');

    await click('[data-test-edit-plusone]');
    await fillIn('[data-test-guest-first-input]', 'Quz');
    await fillIn('[data-test-guest-last-input]', 'Bazz');
    await click('[data-test-edit-plusone]');

    assert.dom('[data-test-plusone] [data-test-guest-name]').hasText('Quz Bazz');

    assert.equal(PLUS_ONE.firstName, 'Quz');
    assert.equal(PLUS_ONE.lastName, 'Bazz');
  });
});
