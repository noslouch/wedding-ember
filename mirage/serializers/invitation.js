import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['guests'], // eslint-disable-line
});
