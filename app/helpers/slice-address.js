import { helper } from '@ember/component/helper';

export function sliceAddress([ address = '']/*, hash*/) {
  let [name, aptOrStreet, streetOrCity] = address.split('\n');
  if (/,/.test(aptOrStreet)) {
    return [name, aptOrStreet];
  } else {
    return [name, streetOrCity];
  }
}

export default helper(sliceAddress);
