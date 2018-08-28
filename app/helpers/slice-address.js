import { helper } from '@ember/component/helper';

export function sliceAddress([ address = '']/*, hash*/) {
  let [name, , aptOrCity, cityOrZip] = address.split('\n').map(s => s.trim());
  if (/,/.test(aptOrCity)) {
    // this is probbly a street
    return [name, aptOrCity];
  } else {
    return [name, cityOrZip];
  }
}

export default helper(sliceAddress);
