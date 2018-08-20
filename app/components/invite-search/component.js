import Component from '@ember/component';
import { task } from 'ember-concurrency';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),

  classNames: ['invite-search'],

  submit(e) {
    e.preventDefault();
  },

  search: task(function * (query) {
    let results = yield this.store.query('invitation', {q: query});
    this.set('results', results.toArray());
  }),

  choseInvite(invite) {
    this.onSelect(invite);
  }
});
