import Component from '@ember/component';
import fetch from 'fetch';
import { computed } from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('errors', {});
    this.set('hasErrors', computed(`errors.{${this.get('fields')},submit}`, function() {
      let errors = 0;
      let fields = this.get('fields');
      fields.forEach(f => {
        if (this.get(`errors.${f}.length`)) {
          errors++;
        }
      })
      if (this.get('errors.submit')) {
        errors++;
      }
      return Boolean(errors);
    }))
  },

  checkErrors() {},

  clearError(e) {
    let field = e.target.name;
    this.set(`errors.${field}`, []);
  },

  actions: {
    submit() {
      let errors = this.checkErrors();
      if (errors) {
        return errors.forEach(setErrors.bind(this));
      } else {
        this.set('errors', {});
      }
      this.set('isFetching', true);
      fetch(this.get('submitEndpoint'), {
        method: 'POST',
        body: JSON.stringify(this.getProperties(...this.get('fields')))
      })
        .then(checkStatus)
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
        .catch(() => this.setProperties({'errors.submit': true, isFetching: false}));
    }
  }

});

function setErrors(error) {
  if (this.get(`errors.${error.key}`)) {
    this.get(`errors.${error.key}`).pushObject(error.message);
  } else {
    this.set(`errors.${error.key}`, [error.message]);
  }
}

function checkStatus(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
