import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    guests: { embedded: 'always' }
  },
  normalizeFindRecordResponse(store, modelClass, payload, ...rest) {
    return this._super(store, modelClass, {invitation: payload}, ...rest);
  },
  normalizeQueryResponse(store, modelClass, payload, ...rest) {
    return this._super(store, modelClass, {invitations: payload}, ...rest);
  },
  normalizeUpdateRecordResponse(store, modelClass, payload, ...rest) {
    return this._super(store, modelClass, {invitations: payload}, ...rest);
  }
});
