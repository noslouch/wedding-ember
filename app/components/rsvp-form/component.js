import Component from '../form-base/component';
import computed from 'ember-computed';
import config from '../../config/environment';

const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default Component.extend({
  fields: [
    'name',
    'email',
    'plusOneName',
    'attending',
    'songRequest',
    'comment'
  ],
  attending: true,
  submitEndpoint: config.rsvpEndpoint,
  
  emergencySubmit: computed('name', 'email', 'plusOneName', 'attending', 'songRequest', 'comment', function() {
      let {
        name,
        email,
        plusOneName,
        attending,
        songRequest,
        comment
      } = this.getProperties('name', 'email', 'plusOneName', 'attending', 'songRequest', 'comment');
    let address = 'esnerwhitton@gmail.com';
    let subject = `Manual RSVP from ${name}`;
    let body = `Name: ${name}
Email: ${email || 'No Email.'}${plusOneName ? `\nPlus One: ${plusOneName}` : ''}
Attending? ${attending ? 'Yes' : 'No'}
${songRequest ? `Won't you please play this song? ${songRequest}` : 'Don\'t forget to include a song request! ---> [SONG NAME HERE]'}
Anything else? ${comment || ' '}`;

    return `mailto:${address}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }),
  
  checkErrors() {
      let {
        name,
        email,
      } = this.getProperties('name', 'email');
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
      return errors.length ? errors : false;
  }
});
