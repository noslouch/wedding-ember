import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | rsvp', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks)

  test('visiting /rsvp', async function(assert) {
    await visit('/rsvp');

    assert.equal(currentURL(), '/rsvp');
  });

  test('searching for an invite', async function(assert) {
    let [ invite ] = server.createList('invitation', 5, 'basic');
    let [ guest ] = invite.guests.models;

    await visit('/rsvp');

    await fillIn('[data-test-invite-input]', guest.firstName);
    await click('[data-test-invite-submit]');
    // store call starts its own run loop
    await settled();

    assert.dom('[data-test-invite-result]').exists({count: 1});
  });

  test('showing multiple results', async function(assert) {
    let ADDRESS = '123 Main St.';
    server.createList('invitation', 3, 'basic', {address: ADDRESS});

    await visit('/rsvp');

    await fillIn('[data-test-invite-input]', ADDRESS);
    await click('[data-test-invite-submit]');
    // store call starts its own run loop
    await settled();

    assert.dom('[data-test-invite-result]').exists({count: 3});
  });

  test('sending back an RSVP response', async function(assert) {
    let [ invite ] = server.createList('invitation', 1, 'basic');
    let guests = invite.guests.models;

    await visit('/rsvp');

    await fillIn('[data-test-invite-input]', invite.address);
    await click('[data-test-invite-submit]');
    // store call starts its own run loop
    await settled();

    await click('[data-test-invite-result]');

    assert.dom('[data-test-invitation-detail]').exists();
    assert.dom('[data-test-guest-detail]').exists({count: 2});

    guests.forEach((guest, i) => assert.dom(`[data-test-guest-detail-index="${i}"]`).includesText(guest.firstName));

    await click('[data-test-submit-rsvp]');
    // store call starts its own run loop
    await settled();

    assert.dom('[data-test-rsvp-success]').exists();
  });

  test('updating an RSVP response', async function(assert) {
    let [ invite ] = server.createList('invitation', 1, 'bothAttending');
    let guests = invite.guests.models;

    await visit('/rsvp');

    await fillIn('[data-test-invite-input]', invite.address);
    await click('[data-test-invite-submit]');
    // store call starts its own run loop
    await settled();

    await click('[data-test-invite-result]');

    // asert that these the wedding RSVP is prefilled from the server
    guests.forEach((guest, i) => {
      assert.dom(`[data-test-guest-detail-index="${i}"] [data-test-checkbox=weddingRsvp] input`).isChecked();
    });

    await click('[data-test-guest-detail-index="0"] [data-test-checkbox=sundayBrunch] input');
    await click('[data-test-guest-detail-index="1"] [data-test-checkbox=sundayBrunch] input');

    // assert sunday brunch is checked
    guests.forEach((guest, i) => {
      assert.dom(`[data-test-guest-detail-index="${i}"] [data-test-checkbox=sundayBrunch] input`).isChecked();
    });

    await click('[data-test-submit-rsvp]');
    // store call starts its own run loop
    await settled();

    assert.dom('[data-test-rsvp-success]').exists();

    await visit('/');
    await visit('/rsvp');

    await fillIn('[data-test-invite-input]', invite.address);
    await click('[data-test-invite-submit]');
    // store call starts its own run loop
    await settled();

    await click('[data-test-invite-result]');
  });
});
