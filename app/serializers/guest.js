import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeCreateRecordResponse(store, modelClass, payload, ...rest) {
    return this._super(store, modelClass, {guest: payload}, ...rest);
  },
});
