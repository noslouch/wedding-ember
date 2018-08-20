import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName:  DS.attr('string'),
  email:     DS.attr('string'),

  weddingRsvp:   DS.attr('boolean'),
  rehearsalRsvp: DS.attr('boolean'),
  sundayBrunch:  DS.attr('boolean'),

  isPlusOne:  DS.attr('boolean'),
  
  invitation: DS.belongsTo('invitation'),
});
