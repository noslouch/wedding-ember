import DS from 'ember-data';
import config from '../config/environment';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import fetch from 'fetch';

export default DS.RESTAdapter.extend(AdapterFetch, {
  host: config.API,
  createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot);
    let url = this.urlForCreateRecord(type.modelName, snapshot);

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'}
    }).then(r => r.json());
  }
});
