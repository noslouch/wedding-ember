import Controller from '@ember/controller';
import config from '../config/environment';

export default Controller.extend({
  showRSVP: config.RSVP,

  sendResponse(invitation) {
    invitation.save()
      .then(() => this.set('success', true));
  },

  reset() {
    this.setProperties({
      success: false,
      invitation: null
    })
  }
});
