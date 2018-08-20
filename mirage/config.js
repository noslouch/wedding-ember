import config from '../config/environment';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.urlPrefix = config.API;

  this.get('/invitations', function({ invitations, guests }, request) {
    let { queryParams: { q }} = request;
    if (q) {
      // q could be an address, email, firstName, or lastName
      let byAddress = invitations.where({address: q}).models;

      // need to get the invite from these guests
      let byEmail = guests.where({email: q}).models;
      let byFirst = guests.where({firstName: q}).models;
      let byLast = guests.where({lastName: q}).models;
      let guestlist = byEmail.concat(byFirst).concat(byLast);
      guestlist = guestlist.mapBy('invitation');

      let invitelist = byAddress.concat(guestlist)
        .reduce((list, invite) => {
          if (!list.findBy('id', invite.id)) {
            list.push(invite);
          }
          return list;
        }, []);

        return invitelist.map(invite => this.serialize(invite, 'invitation'));
    }
  });

  this.patch('/invitations/:id', function({invitations, guests}, { requestBody, params: { id } }) {
    let body = JSON.parse(requestBody);

    body.guests.forEach(guest => {
      let attrs = Object.keys(guest).reduce((obj, key) => {
        obj[key.camelize()] = guest[key];
        return obj;
      }, {});
      delete attrs.invitation;
      guests.find(guest.id).update(attrs);
    });
    delete body.guests;
    invitations.find(id).update(body);

    return this.serialize(invitations.find(id), 'invitation');
  });
}
