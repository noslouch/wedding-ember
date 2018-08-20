import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr('string'),
  musicPref: DS.attr('string'),
  plusOne: DS.attr('boolean'),
  rehearsalDinner: DS.attr('boolean'),

  guests: DS.hasMany('guest', {defaultValue: () => []})
});
