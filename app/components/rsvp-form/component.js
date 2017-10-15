import Component from 'ember-component';
import fetch from 'fetch';
import config from '../../config/environment';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default Component.extend({
  attending: true,
  
  init() {
    this._super(...arguments);
    this.set('errors', {});
  },
  actions: {
    submit() {
      let {
        name,
        email,
        plusOneName,
        attending,
        songRequest,
        comment
      } = this.getProperties('name', 'email', 'plusOneName', 'attending', 'songRequest', 'comment');
      let errors = [];
      if (!name) {
        errors.push({key: 'name', message: 'Forgot your name.'});
      }
      if (!email) {
        errors.push({key: 'email', message: 'Need your email.'});
      }
      if (!EMAIL_REGEX.test(email)) {
        errors.push({key: 'email', message: 'This doesn\'t look like a valid email.'});
      }
      if (errors.length) {
        return errors.forEach(setErrors.bind(this));
      } else {
        this.set('errors', {});
      }

      this.set('isFetching', true);
      fetch(config.rsvpEndpoint, {method: 'POST', body: JSON.stringify({
        name,
        email,
        plusOneName,
        attending,
        songRequest,
        comment
      })})
        .then(r => r.json())
        .then(json => {
          this.set('isFetching', false);
          if (json.errors) {
            json.errors.forEach(setErrors.bind(this));
          } else {
            this.set('errors', {});
            this.set('success', true);
          }
        })
    },
  },
  clearError(e) {
    let field = e.target.name;
    this.set(`errors.${field}`, []);
  }
});

function setErrors(error) {
  if (this.get(`errors.${error.key}`)) {
    this.get(`errors.${error.key}`).pushObject(error.message);
  } else {
    this.set(`errors.${error.key}`, [error.message]);
  }
}
