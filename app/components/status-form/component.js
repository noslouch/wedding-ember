import Component from '../form-base/component';
import { computed } from '@ember/object';
import config from '../../config/environment';

const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const FIELDS = ['email'];

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('fields', FIELDS);
  },
  submitEndpoint: config.statusEndpoint,

  emergencyStatusCheck: computed('email', function() {
    let email = this.get('email');
    let address = 'esnerwhitton@gmail.com';
    let subject = `Status Request from ${email}`;
    let body = `Please send an RSVP status update to ${email}.`;

    return `mailto:${address}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }),

  checkErrors() {
    let email = this.get('email');
    let errors = [];
    if (!email) {
      errors.push({key: 'email', message: 'Need your email to check your status.'});
    }
    if (!EMAIL_REGEX.test(email)) {
      errors.push({key: 'email', message: 'This doesn\'t look like a valid email.'});
    }
    return errors.length ? errors: false;
  }
});
