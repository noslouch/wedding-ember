import DS from 'ember-data';
import config from '../config/environment';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import fetch from 'fetch';
import { Promise } from 'rsvp';

export default DS.RESTAdapter.extend(AdapterFetch, {
  host: config.API,

  updateRecord(store, type, snapshot) {
    let newGuest = snapshot.record.guests.findBy('isNew');
    let data = this.serialize(snapshot);
    let url = this.urlForUpdateRecord(snapshot.id, type.modelName, snapshot);

    let requests = [];
    if (newGuest) {
      data.guests = data.guests.filterBy('id');
      requests.push(newGuest.save());
    }

    let invite = fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }).then(r => r.json());

    requests.push(invite);
    return Promise.all(requests);
  }
});
